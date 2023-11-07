import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.css'],
})
export class ChatAreaComponent {
  messages: { text: string; isUser: boolean }[] = [
    { text: 'Olá, como posso ajudar?', isUser: false },
  ];

  handleResponse(question: string, isUser: boolean) {
    this.messages.push({ text: question, isUser: isUser });
  }
}
