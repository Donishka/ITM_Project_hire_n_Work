import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.css']
})
export class MyJobsComponent implements OnInit {
  filters: string[];

  constructor() { }

  ngOnInit() {
    this.filters = [
      'All', 'Top rated', 'Highest Price', 'Most commented'
    ];
  }

}
