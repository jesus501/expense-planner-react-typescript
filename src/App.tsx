import React from "react";

import { useMemo, useEffect } from "react";
import BudgeForm from "./componets/BudgetForm";
import BudgetTracker from "./componets/BudgetTracker";
import ExpenseModal from "./componets/ExpenseModal";
import ExpenseList from "./componets/ExpenseList";
import FilterByCategory from "./componets/FilterByCategory";

import { useBudget } from "./hooks/useBudget";

export const App = () => {
  const { state } = useBudget();

  const isValidBudget = useMemo(() => state.budget > 0, [state.budget]);

  useEffect(() => {
    localStorage.setItem("budget", state.budget.toString());
    localStorage.setItem("expenses", JSON.stringify(state.expenses));
  }, [state]);

  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72">
        <h1 className="uppercase text-center font-black text-4xl text-white">
          Planificador de Gastos
        </h1>
      </header>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {isValidBudget ? <BudgetTracker /> : <BudgeForm />}
      </div>

      {isValidBudget && (
        <main className="max-w-3xl mx-auto py-10">
          <FilterByCategory />
          <ExpenseList />
          <ExpenseModal />
        </main>
      )}
    </>
  );
};
