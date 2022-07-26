import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email:any
  password:any
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  register(){
    if(this.email==''){
      alert("Email not entered")
      return
    }
    if(this.password==''){
      alert('Password not entered')
      return
    }
    this.auth.register(this.email,this.password)
    this.email=''
    this.password=''
  }
}
