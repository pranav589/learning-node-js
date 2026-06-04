import pool from "../pool.js";

class UserRepo {
  static async find() {
    const result = await pool.query(`SELECT * FROM users;`);
    return result.rows;
  }

  static async findById() {}

  static async insert() {}

  static async update() {}

  static async delete() {}
}

export default UserRepo;
