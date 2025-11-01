import Expense from "../models/expense.model.js";

// Get all expenses
export const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching expenses", error });
  }
};

// Add a new expense
export const addExpense = async (req, res) => {
  try {
    const { title, amount, category, description } = req.body;
    const newExpense = new Expense({ title, amount, category, description });
    await newExpense.save();
    res.status(201).json({ message: "Expense added successfully ✅", newExpense });
  } catch (error) {
    res.status(500).json({ message: "Error adding expense", error });
  }
};

// Delete expense
export const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    await Expense.findByIdAndDelete(id);
    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting expense", error });
  }
};
