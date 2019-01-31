import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService, NotificationModel } from '../services/notification.service';
import { Invoice } from '../models/invoice.model';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  user: User;
  form: FormGroup;
  view:boolean = false;

  constructor(private builder: FormBuilder,
    private auth: AuthService,
    private notifiService: NotificationService,
    private router: Router) { }

  ngOnInit() {
    this.form = this.builder.group({
      User_ID: ['', Validators.required],
      Employee_name: ['', Validators.required],
      Basic_charge: ['', Validators.required],
      Cost: ['', Validators.required],
      Total_Cost: ['', Validators.required]
    });
    this.user = this.auth.getUser();
    
    this.form.patchValue({User_ID: this.auth.getUser()._id});
    this.form.patchValue({Employee_name: this.auth.getUser().fname});
  }

  viewDiv(){
this.view = true;
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

    this.auth.createInvoice(this.form.value)
      .subscribe((user: Invoice) => {
      }, err => {
        this.notifiService.notify({
          title: 'Ooops!',
          description: 'Your registrasion has something wrong!',
          type: 'danger'
        });
      });
  }

}
