import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient:HttpClient) { }

  getList(account?){
    let params:String = ' ';
    if(account){
      params = '?account=' + account;
    }
    return this.httpClient.get('http://localhost:7000/api/transactions'+params);
  }

  update(transaction: Transaction){
    return this.httpClient.put('http://localhost:7000/api/transaction', transaction);
  }
  
  insert(transaction: Transaction){
    return this.httpClient.post('http://localhost:7000/api/transaction', transaction);
  }
  delete(id) {
    return this.httpClient.delete('http://localhost:7000/api/transaction/'+id);
  }
 
  getListAccount(){
     //Mengambil Data dari objek account
    return this.httpClient.get('http://localhost:7000/api/accounts');
  }
}
