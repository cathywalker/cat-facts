import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public catForm: FormGroup;
  public error: boolean = false;
  public isSubmitted = false;

  // intialize FormGroup with FormControls
  constructor() {
    this.catForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      preferred: new FormControl()
    })
  }

  // subscribe to changes in the form
  ngOnInit(): void {
    this.catForm.controls['preferred'].valueChanges.subscribe(changes => {
      changes == 'Dog'? this.error = true : this.error = false;
    });
  }

  // executed on submit/sign-up button clicked
  public signUp(form: any){
    localStorage.setItem("name", form.name);
    localStorage.setItem("email", form.email);
    this.isSubmitted = true;
  }

}
