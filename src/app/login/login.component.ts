import { ExpressionType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export const UserArray = [{username: "Username1", password: "Password1"},{username: "Username2", password: "Password2"}, {username: "Username3", password: "Password3"}];

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  clickme(){
    console.log(this.username, this.password);
    for(let i=0; i < 3; i++){
      console.log(UserArray[i].username);
      if((UserArray[i].username == this.username) && (UserArray[i].password == this.password)){
        console.log("Correct.");
        this.router.navigateByUrl("account");
        break;
      } else if(i==2){
        alert("Error.");
      }
    }
  
  
  }

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
  }

}
