export class Transaction{
    onePointLevel = 50;
    twoPointLevel = 100;

    amount;
    date;

    constructor(amount, date){
        this.amount = amount;
        this.date = date;
    }

    getPoints(){
        if(this.amount > this.twoPointLevel){
            return ((this.amount-100) * 2) + 50;
        }
        else if(this.amount > 50){
            return this.amount - 50;
        }
        else{ return 0; }
    }

    getMonthName(){
        const monthData = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return monthData[this.date.getMonth()];
    }
}