import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  username:any = sessionStorage.getItem('username');
  birthdate:any = sessionStorage.getItem('birthdate');
  age:any = sessionStorage.getItem('age');
  
  constructor() { }

  ngOnInit(): void {
  }

}
