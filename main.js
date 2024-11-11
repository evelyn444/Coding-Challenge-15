// Task 4: Create the Main Application

import { assets } from "./asset.js";
import { calculatePortfolioValue, getPortfolioAllocation } from "./portfolio.js"; // Importing all the functions and class
import { Transaction } from "./transaction.js";

console.log ("Assets:", assets); //Display the total portfolio value and allocation percentages
console.log ("Portfolio Value:", calculatePortfolioValue(assets));
console.log ("Portfolio Allocations:", getPortfolioAllocation(assets));

const transactionOne = new Transaction (3, 'sell', 10);
transactionOne.finalizeTransaction();
const transactionTwo = new Transaction (1, 'buy', 5);
transactionTwo.finalizeTransaction();

console.log("Updated Portfolio Value:", calculatePortfolioValue(assets));
