import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { InputAreaService } from 'src/app/services/input-area.service';

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.css'],
})
export class InputAreaComponent {
  @Output() responsePrompt: EventEmitter<{
    question: string;
    isUser: boolean;
  }> = new EventEmitter();

  private subscription: Subscription = new Subscription();
  private prompt: string = '';

  public formInput: FormGroup;

  messages: { text: string; isUser: boolean }[] = [];
  newMessage: string = '';

  constructor(
    private inputAreaService: InputAreaService,
    private formBuilder: FormBuilder
  ) {
    this.formInput = this.formBuilder.group({
      inputItem: [{ value: '', disabled: false }],
    });
  }

  sendMessage() {
    this.prompt = this.formInput.value.inputItem;

    this.formInput.get('inputItem')?.setValue('');

    this.responsePrompt.emit({ question: this.prompt, isUser: true });

    this.subscription = this.inputAreaService
      .inputPrompt(this.prompt)
      .subscribe(
        (response) => {
          let success = response.success as boolean;
          if (success) {
            this.responsePrompt.emit({
              question: response.data,
              isUser: false,
            });

            // this.responsePrompt.emit(response.data);
          } else {
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
