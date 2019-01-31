import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-find-worker',
  templateUrl: './find-worker.component.html',
  styleUrls: ['./find-worker.component.css']
})
export class FindWorkerComponent implements OnInit {
  categories: string[];
  filters: string[];

  constructor(private router: Router, private notifiService: NotificationService) { }

  ngOnInit() {
    // this.notifiService.notify({ title: 'Well Done', description: 'Okay', type: 'info' });
    this.categories = [
      'Developer', 'Model', 'Plumber', 'Carpenter', 'Driver', 'Electrician'
    ];
    this.filters = [
      'Top rated', 'Lowest Price', 'Most commented', 'Experienced'
    ];
  }

  itemClicked() {
    this.router.navigate(['/profile']);
  }

}
