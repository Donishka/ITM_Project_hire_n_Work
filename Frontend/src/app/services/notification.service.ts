import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private subject = new Subject<any>();

  constructor() { }

  notify(message: NotificationModel) {
    this.subject.next(message);
  }

  isNotified() {
    return this.subject.asObservable();
  }
}

export class NotificationModel {
  title: string;
  description: string;
  type: string;
}
