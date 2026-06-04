import pg from "pg";

const pool = new pg.Pool({
  host: "localhost",
  port: 5432,
  database: "Testing",
  user: "postgres",
  password: "password",
});

pool
  .query(
    `
    UPDATE posts
    SET loc=POINT(lng,lat)
    WHERE loc IS NULL;
    `,
  )
  .then(() => {
    console.log("Update Complete");
    pool.end();
  })
  .catch((err) => console.log(err.message));
