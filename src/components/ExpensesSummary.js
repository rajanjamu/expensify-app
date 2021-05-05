import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount == 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expenseTotal / 100).format('$0,0.00');
  return (
    <div>
      <p>
        Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  const selectedExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseTotal: selectExpensesTotal(selectedExpenses),
    expenseCount: selectedExpenses.length,
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
