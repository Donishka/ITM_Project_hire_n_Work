import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chat-model',
  templateUrl: './chat-model.component.html',
  styleUrls: ['./chat-model.component.css']
})
export class ChatModelComponent implements OnInit {
  @Input() username: string;
  @Input() displayName: string;

  @ViewChild('scrollMe') private chatBody: ElementRef;

  private myUsername = 'worker';

  private messages: any[] = [
    { sender: 'punsara', message: 'Hi, how are you?' },
    { sender: 'achintha', message: 'Hi, I\'m fine?' },
    { sender: 'punsara', message: 'Hi, how are you?' },
    { sender: 'punsara', message: 'Hi, how are you?' },
    { sender: 'achintha', message: 'Hi, how are you?' },
    { sender: 'achintha', message: 'Hi, how are you?' },
    { sender: 'punsara', message: 'Hi, how are you?' },
    { sender: 'punsara', message: 'Hi, how are you?' },
    { sender: 'punsara', message: 'Hi, how are you?' },
    { sender: 'achintha', message: 'Hi, how are you?' },
    { sender: 'punsara', message: 'Hi, how are you?' },
    { sender: 'punsara', message: 'Hi, how are you?' },
    { sender: 'achintha', message: 'Hi, how are you?' },
    { sender: 'punsara', message: 'Hi, how are you?' },
    { sender: 'achintha', message: 'Hi, how are you?' },
    { sender: 'punsara', message: 'Hi, how are you?' },
    { sender: 'achintha', message: 'Hi, how are you?' },
    { sender: 'punsara', message: 'Hi, how are you?' },
    { sender: 'achintha', message: 'Hi, how are you?' },
  ];

  constructor(private fire: FirebaseService) { }

  ngOnInit() {
    this.readMessages();
  }

  sendMessage(msg: any) {
    if (msg === '') {
      return;
    }
    this.fire.add(this.username, this.myUsername, {
      worker: this.username,
      client: this.myUsername,
      sender: this.myUsername,
      message: msg.value
    });
    this.messages.push({
      sender: this.myUsername,
      message: msg.value
    });
    msg.value = '';
  }

  readMessages() {
    console.log(this.fire.get());
  }

  scrollToBottom(): void {
    try {
      this.chatBody.nativeElement.scrollTop = this.chatBody.nativeElement.scrollHeight;
    } catch (err) { }
  }

}
