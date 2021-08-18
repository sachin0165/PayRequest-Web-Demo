export class Payment {
    CreationTimeUtc: Date;  
    amount: number;
    amountInSatoshi: number;
    cancellationTimeUtc : Date;
    expiry : Date;
    expiryInUnixTimestamp : number;
    fromAddress : string;
    id : number;
    paymentStatus : number;
    paymentTimeUtc : Date;
    reason : string;
    requestGuid : string;
    toAddress : string;
    constructor() {
        this.CreationTimeUtc = new Date;  
        this.amount = 0;
        this.amountInSatoshi = 0;
        this.cancellationTimeUtc  = new Date;
        this.expiry  = new Date;
        this.expiryInUnixTimestamp  = 0;
        this.fromAddress  = '';
        this.id  = 0;
        this.paymentStatus  = 0;
        this.paymentTimeUtc  = new Date;
        this.reason  = '';
        this.requestGuid  = '';
        this.toAddress  = '';
      }
}
  