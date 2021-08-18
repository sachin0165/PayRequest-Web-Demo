import { Payment } from '../model/payment';

export class AllPayments {
    message: string;  
    success: boolean;
    token: string;
    data : data;
    constructor() {
        this.message = '';
        this.success = false;
        this.data = new data;
        this.token = '';
      }
}
class data
{
    requests: Payment[];  
    constructor() {
        this.requests = [];
    }
}