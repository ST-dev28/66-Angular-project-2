export class Basket{
    public qty: number;

    public constructor(qty: number) {
        this.qty = qty = 0;
}
public addToBucket(): void {
        this.qty++;
        
    }
    public removeFromBucket(): void {
        if(this.qty > 0) {
           this.qty--; 
        } else if(this.qty === 0) {
            return;
        }
    }
}