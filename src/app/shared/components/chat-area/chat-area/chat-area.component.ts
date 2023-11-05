import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.css'],
})
export class ChatAreaComponent {
  messages: { text: string; isUser: boolean }[] = [
    { text: 'Olá, como posso ajudar?', isUser: false },
    { text: 'Estou com uma dúvida.', isUser: true },
    { text: 'Pode me dizer como fazer algo?', isUser: true },
    { text: 'Claro, aqui está a resposta...', isUser: false },
    { text: 'Muito obrigado!', isUser: true },
  ];
}
