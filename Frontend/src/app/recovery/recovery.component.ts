import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {
  @Input() recoveryUpModel: string;
  codeSent = false;

  constructor() { }

  ngOnInit() {
  }

  codeSend() {
    this.codeSent = true;
  }

}
