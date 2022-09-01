import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username = '';
  birthdate = '';
  age = '';
  email = '';

  constructor(private router:Router) { }

  ngOnInit() {
    console.log('test');
    var test = sessionStorage.getItem('valid');
    if(test == 'true'){
      this.username = sessionStorage.getItem('username')!;
      this.birthdate = sessionStorage.getItem('birthdate')!;
      this.age = sessionStorage.getItem('age')!;
      this.email = sessionStorage.getItem('email')!;
    } else{
      this.router.navigateByUrl('');
    }
  }
  test(){
    sessionStorage.setItem('username',this.username);
    sessionStorage.setItem('birthdate',this.birthdate);
    sessionStorage.setItem('age',this.age);
    sessionStorage.setItem('email',this.email);
  };

  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl('');
  }

}

