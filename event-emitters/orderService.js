// export class OrderService {
//   constructor(emailService, inventoryService) {
//     this.emailService = emailService;
//     this.inventoryService = inventoryService;
//   }

//   createOrder(orderData) {
//     //create order logic

//     //if success (coupling happens here)
//     this.emailService.sendEmail(orderData);
//     this.inventoryService.updateInventory(orderData);

//     return { id: Date.now().toString(), ...orderData };
//   }
// }

import { EventEmitter } from "node:events";

export class OrderService extends EventEmitter {
  createOrder(orderData) {
    //create order logic

    //if success
    // Event Emitted
    this.emit("order:created", orderData);

    return { id: Date.now().toString(), ...orderData };
  }
}
