import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private _url = 'http://localhost:4001';
  private socket: any;
  constructor() {
    this.socket = io(this._url);
   }

sendMessage(message: string): void {
  this.socket.emit('new-message', message);
}

public getMessages = () => {
  console.log('test');
  return Observable.create((observer) => {
      this.socket.on('new-message', (message) => {
        console.log('messsagge');
          observer.next(message);
      });
  });
}

}


/*
Source:
https://codingblast.com/chat-application-angular-socket-io/
Note: issue with io.emit(message) should be io.emit('new-message', message);
*/
