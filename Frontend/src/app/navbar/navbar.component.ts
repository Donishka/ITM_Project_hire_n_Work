import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService,
    private router: Router,
    private notifiService: NotificationService) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.auth.isAuthenticated();
  }

  logout() {
    this.auth.signout();
    this.notifiService.notify({
      title: 'See you soon!',
      description: 'You are always welcome here',
      type: 'info'
    });
    this.router.navigate(['/login']);
  }

}
