import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private router: Router,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.registerForm = this.fb.group({

      'email': ['', [Validators.required]],
      'password': ['', [Validators.required, Validators.minLength(6)]],

    });
  };

  createUser(){
    const {email, password} = this.registerForm.value
    this.auth.createUserWithEmailAndPassword(email, password).then((user) => {
        console.log(user,"1111")
        this.router.navigate(['/'])
    })
    console.log(this.registerForm.value,"00000")
  }

}
