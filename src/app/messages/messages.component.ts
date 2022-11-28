import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  // inject the singleton messageService. need to be public in order to bind in the template
  constructor(public messageService: MessageService) { }

}
