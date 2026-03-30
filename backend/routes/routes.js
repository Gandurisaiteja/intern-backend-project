const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const taskController = require("../controllers/taskController");
const { verifyToken } = require("../middleware/authMiddleware");


console.log("authController:", authController);
console.log("taskController:", taskController);
console.log("verifyToken:", verifyToken);

router.post("/register", authController.register);
router.post("/login", authController.login);


router.post("/tasks", verifyToken, taskController.createTask);
router.get("/tasks", verifyToken, taskController.getTasks);
router.put("/tasks/:id", verifyToken, taskController.updateTask);
router.delete("/tasks/:id", verifyToken, taskController.deleteTask);

module.exports = router;