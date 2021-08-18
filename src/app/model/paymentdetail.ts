export class Paymentdetails {
    message: string;  
    success: boolean;
    data : data;
    constructor() {
        this.message = '';
        this.success = false;
        this.data = new data;
      }
  }
  
  class data
  {
    id: string;  
    requestGuid:string;
    reason:string;
    fromAddress:string;
    toAddress:string;
    amount:string;
    amountInSatoshi:string;
    paymentStatus:number;
    expiry:Date;
    expiryInUnixTimestamp:string;
    CreationTimeUtc:Date;
    cancellationTimeUtc:string;
    paymentTimeUtc:string;

    constructor() {
        this.id = '';
        this.requestGuid = '';
        this.reason = '';
        this.fromAddress = '';
        this.toAddress = '';
        this.amount = '';
        this.amountInSatoshi = '';
        this.paymentStatus = 0;
        this.expiry = new Date;
        this.expiryInUnixTimestamp = '';
        this.CreationTimeUtc = new Date;
        this.cancellationTimeUtc = '';
        this.paymentTimeUtc = '';
      }

      
  }