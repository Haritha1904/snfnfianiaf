import express from "express";
import { getAllExpenses, addExpense, deleteExpense } from "../controllers/expense.controller.js";

const router = express.Router();

// CRUD Routes
router.get("/", getAllExpenses);       // Fetch all expenses
router.post("/", addExpense);          // Add new expense
router.delete("/:id", deleteExpense);  // Delete expense by ID

export default router;
