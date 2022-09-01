import { ExpressionType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Username } from '../model';
import { User2 } from '../model2';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
const backendURL = 'http://localhost:3000' ;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  usertest: Username = {username:'',password:''};

  constructor(private router: Router, private httpclient: HttpClient) {
    
  }

  clickme(){
    this.httpclient.post(backendURL+'/api/auth',this.usertest,httpOptions).subscribe((data: any)=>{
      if(data.valid){
        sessionStorage.setItem('username',data.username);
        sessionStorage.setItem('birthdate',data.birthdate);
        sessionStorage.setItem('age',data.age.toString());
        sessionStorage.setItem('email',data.email);
        sessionStorage.setItem('valid',data.valid.toString());
        this.router.navigateByUrl('account');
      } else {
        alert('sorry');
        sessionStorage.setItem('valid',data.valid.toString());
      }
    }
    )
  }
  profile(){
    this.router.navigateByUrl('profile');
  }
  
  ngOnInit(): void {
  }

}
