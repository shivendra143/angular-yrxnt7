import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  
 ngOnInit(){
   this.updateArra(this.acctData, this.balance, this.sortby, this.filter); 
 }
acctData:any = [
{
"acctNum": "AAA - 1234",
"user": "Alice"
},
{
"acctNum": "AAA - 5231",
"user": "Bob"
},
{
"acctNum": "AAA - 9921",
"user": "Alice"
},
{
"acctNum": "AAA - 8191",
"user": "Alice"
}
];
balance:any = {
"AAA - 1234": 4593.22,
"AAA - 9921": 0,
"AAA - 5231": 232142.5,
"AAA - 8191": 4344
};
 sortby:string = 'acctNum';
 filter:string = 'Alice';
 account:any =[];
 users:any;
updateArra(acctData, balance,opt,filter){

      this.account =[];
     for(let i=0; i<acctData.length; i++){
       this.account[i] = {user:acctData[i].user, acctNum:acctData[i].acctNum, balance:balance[acctData[i].acctNum]};
     }
  console.log(opt)
   
  if(opt=="user"){
    this.account.sort(function (a, b) {
    return a.user.localeCompare(b.user);
  });
  }
   if(opt=="acctNum"){
    this.account.sort(function (a, b) {
    return a.acctNum.localeCompare(b.acctNum);
  });
  }
   if(opt=="balance"){
    this.account.sort(function (a, b) {
    return a.balance - b.balance;
  });
  }
 // console.log(filter)
   
  if(filter!=""){
    this.users =  this.account.filter(function(acc) {
	return acc.user == filter;
     });
   }                                       
   console.log(this.account)
   console.log(this.users);
  }
  
}
