import { AuthService } from './../services/auth.service';
import { User } from './../models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService, NotificationModel } from '../services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  selctUser: "nav-link active show";

  constructor(private builder: FormBuilder,
    private auth: AuthService,
    private notifiService: NotificationService,
    private router: Router) { }

  ngOnInit() {
    console.log(this.selctUser);
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/profile']);
    }
    this.form = this.builder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      mobileno: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required]
    });

    console.log(this.form);
  }

  onSubmit() {
    if (this.form.invalid) {
      this.notifiService.notify({
        title: 'Ooops!',
        description: 'Please recheck form fields for red cross!',
        type: 'danger'
      });
      return;
    }
    if (this.form.value.password !== this.form.value.passwordConfirm) {
      this.notifiService.notify({
        title: 'Ooops!',
        description: 'Please recheck the password fields!',
        type: 'danger'
      });
      return;
    }
    this.auth.signup(this.form.value)
      .subscribe((user: User) => {
        this.notifiService.notify({
          title: 'Well Done!',
          description: 'You have successfully registered!',
          type: 'success'
        });

      }, err => {
        this.notifiService.notify({
          title: 'Ooops!',
          description: 'Your registrasion has something wrong!',
          type: 'danger'
        });
      });
    this.auth.signupEmployee(this.form.value)
      .subscribe((user: User) => {
        this.router.navigate(['/login']);
      }, err => {
        this.notifiService.notify({
          title: 'Ooops!',
          description: 'Your registrasion has something wrong!',
          type: 'danger'
        });
      });
  }

}
