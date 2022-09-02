import { Transaction } from "../model/Transaction.model";

export class TransactionService{ // Simulating the Backend of the Application
    getData(){
        const returnData = [];
        const endDate = new Date();
        const startDate = new Date(endDate);
        startDate.setMonth(startDate.getMonth() - 3);
        while(startDate < endDate){
            for(let i = 0; i < 10; i++){
                returnData.push(new Transaction(Math.floor(Math.random() * 300), new Date(startDate)));
            }
            startDate.setDate(startDate.getDate() + 1);
        }
        return returnData;
    }
}