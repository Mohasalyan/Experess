const express = require("express");
const router = express.Router();
const control = require("../controller/control");

router.get("/", control.getTodo);
router.post("/", control.postTodo);
router.get("/:id", control.getTodoID);
router.put("/:id", control.putTodo);
router.delete("/:id", control.deleteTodo);

module.exports =router ;
