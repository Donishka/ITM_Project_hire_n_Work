import { AuthService } from './../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private builder: FormBuilder,
    private notifiService: NotificationService,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/profile']);
    }
    this.form = this.builder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.auth.signin(this.form.value)
      .subscribe((user: User) => {
        this.notifiService.notify({
          title: 'Well Done!',
          description: 'You have successfully logged in!',
          type: 'success'
        });
        this.router.navigate(['/profile']);
      }, err => {
        this.notifiService.notify({
          title: 'Ooops!',
          description: 'Your login has something wrong!',
          type: 'danger'
        });
      });
  }

}
