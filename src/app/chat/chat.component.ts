import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private chatService: ChatService) { }
  message: string;
  messages: string[] = [];
  ngOnInit(): void {
    this.messages.push('test');
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        console.log('message received');
        this.messages.push(message);
});  }

  sendMessage(): void {
    this.chatService.sendMessage(this.message);
  }
  getMessage(): void {
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        console.log('message received');
        this.messages.push(message);
});
  }



}
