import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Expense {
  date: string;
  category: string;
  amount: number;
  description: string;
}

@Component({
  selector: 'app-expense-tracker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './expense-tracker.component.html',
  styleUrls: ['./expense-tracker.component.scss']
})
export class ExpenseTrackerComponent {
  expenses: Expense[] = [
    { date: '2023-06-18', category: 'Transportation', amount: 100, description: 'Taxi' },
    { date: '2023-05-15', category: 'Entertainment', amount: 700, description: 'Movie Ticket' },
    { date: '2023-03-12', category: 'Bills', amount: 500, description: 'Electricity' },
  ];

  newExpense: Expense = { date: '', category: '', amount: 0, description: '' };

  addExpense() {
    if (this.newExpense.date && this.newExpense.category && this.newExpense.amount > 0) {
      this.expenses.push({ ...this.newExpense });
      this.newExpense = { date: '', category: '', amount: 0, description: '' };
      alert('✅ Expense added successfully!');
    } else {
      alert('❌ Please fill all fields correctly!');
    }
  }

  deleteExpense(index: number) {
    this.expenses.splice(index, 1);
  }

  get totalExpenses(): number {
    return this.expenses.reduce((sum, exp) => sum + exp.amount, 0);
  }
}
