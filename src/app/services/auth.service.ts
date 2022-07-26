import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private route: Router) { }

  login(email:any, password:any){
    this.auth.signInWithEmailAndPassword(email,password).then( () => {
      this.route.navigate(['dashboard'])
    },err =>{
      alert('Something went wrong')
      this.route.navigate(['register'])
    } ) 
  }

  register(email:any,password:any){
    this.auth.createUserWithEmailAndPassword(email,password).then( ()=> {
      alert('register succesfull')
      this.route.navigate(['login'])
    },err=>{
      alert("Something went wrong")
      this.route.navigate(['register'])
    })
  }
}
