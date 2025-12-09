import express from "express";
import { OrderController } from "./orderController.js";
import { EmailService } from "./emailService.js";
import { InventoryService } from "./inventoryService.js";
import { OrderService } from "./orderService.js";

const app = express();
app.use(express.json());

const orderService = new OrderService();

// Services
const emailService = new EmailService(orderService);
const inventoryService = new InventoryService(orderService);
const orderController = new OrderController(orderService);

// Register Listeners (subscribers)
// orderService.on("order:created", (orderData) => {
//   emailService.sendEmail(orderData);
// });

orderService.on("order:created", (orderData) => {
  inventoryService.updateInventory(orderData);
});

// Routes
app.post("/orders", (req, res) => orderController.create(req, res));

app.listen(8080, () => {
  console.log("Server Started!!");
});
