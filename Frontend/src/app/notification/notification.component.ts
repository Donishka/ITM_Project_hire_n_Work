import { NotificationModel, NotificationService } from './../services/notification.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, OnDestroy {
  messages: NotificationModel[] = [];
  subscription: Subscription;

  constructor(private notifiService: NotificationService) { }

  ngOnInit() {
    this.subscription = this.notifiService.isNotified()
      .subscribe((msg: NotificationModel) => {
        this.messages.push(msg);
        setTimeout(() => {
          const index = this.messages.indexOf(msg);
          if (index >= 0) {
            this.messages.splice(index, 1);
          }
        }, 5000);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
