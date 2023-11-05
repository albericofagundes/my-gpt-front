import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InputAreaService {
  private readonly API_URL = 'https://mygptback.onrender.com/api/prompt';

  constructor(private http: HttpClient) {}

  public inputPrompt(prompt: string): Observable<any> {
    console.log('InputAreaService prompt:', prompt);
    // const data = { prompt };
    const data = {
      prompt: 'resumo primeiro capitulo livro eu robo',
    };

    return this.http.post(this.API_URL, data);
  }
}
