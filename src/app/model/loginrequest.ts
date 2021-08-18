export class LoginRequest {
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
    accessToken: string;  
    walletAddress:string;
    constructor() {
        this.accessToken = '';
        this.walletAddress = '';
      }

      
  }