import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { InputAreaService } from 'src/app/services/input-area.service';

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.css'],
})
export class InputAreaComponent {
  private subscription: Subscription = new Subscription();
  private prompt: string = '';

  messages: { text: string; isUser: boolean }[] = [];
  newMessage: string = '';

  constructor(private inputAreaService: InputAreaService) {}

  // @ViewChild('messageContainer', { static: true }) private messageContainer: ElementRef;

  sendMessage() {
    this.subscription = this.inputAreaService
      .inputPrompt(this.prompt)
      .subscribe(
        (response) => {
          let success = response.success as boolean;
          if (success) {
            console.log('response', response);
          } else {
            console.log('error', 'response');
          }
        },
        (error) => {
          console.log('error', error);
        }
      );

    if (this.newMessage.trim() !== '') {
      this.messages.push({ text: this.newMessage, isUser: true });
      this.newMessage = ''; // Limpa o campo de entrada

      // Simula uma resposta do assistente após um pequeno atraso (você pode ajustar isso)
      setTimeout(() => {
        this.messages.push({
          text: 'Isso é uma resposta do assistente.',
          isUser: false,
        });
        this.scrollToBottom();
      }, 1000);
    }
  }

  scrollToBottom(): void {
    try {
      // this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }
}
