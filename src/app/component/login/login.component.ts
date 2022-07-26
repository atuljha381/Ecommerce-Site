import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any
  password:any

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  login(){
    if(this.email==''){
      alert('Email not entered')
      return;
    }

    if(this.password==''){
      alert('Password not entered')
      return;
    }

    this.auth.login(this.email,this.password)
    this.email=''
    this.password=''
  }
}
