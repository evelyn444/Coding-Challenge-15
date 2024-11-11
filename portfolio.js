//Task 2: Create the Portfolio Module

import { assets } from "./asset.js";

export function calculatePortfolioValue() { // sums the total value of the portfolio
    return assets.reduce((total, asset) => total + asset.price * asset.quantity, 0);
}

export function getPortfolioAllocation() { //calculates the percentage allocation of each asset
    const totalSum = calculatePortfolioValue();
    return assets.map(asset => ({
        name: asset.name,
        allocation: ((asset.price * asset.quantity) / totalSum) * 100

        }));
}