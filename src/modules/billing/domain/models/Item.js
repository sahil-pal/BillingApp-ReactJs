export class Item{

    constructor(name,qty,uom,rate,amount,taxPercentage,taxAmount,totalAmount){
        this.name = name;
        this.qty = qty;
        this.uom = uom;
        this.rate = rate;
        this.amount = amount;
        this.taxPercentage = taxPercentage;
        this.taxAmount = taxAmount;
        this.totalAmount = totalAmount;
    }

    createItemFromInput(itemObj){
        return new Item(
            
        );
    }
}