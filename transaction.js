// Task 3: Create the Transaction Module

import { getAssetById } from "./asset.js"; //imports assets and getAssetById from asset.js

export class Transaction { // creating transaction class
  constructor (id, type, quantity){
    this.id = id;
    this.type = type;
    this.quantity = quantity;
    this.assets = getAssetById(id);
  }

  finalizeTransaction(){
    if (this.type === 'sell'){ //if selling
        if (this.quantity > this.assets.quantity){
            throw new Error (`Insufficient quantity for sale of ${this.assets.name}.`); //error code
        }
        this.assets.quantity -= this.quantity;
    } else if (this.type === 'buy'){ //if buying 
        this.assets.quantity += this.quantity;
        console.log('Transaction successful');
    } else{
        throw new Error ('Invalid Transaction');
    }
  }

}