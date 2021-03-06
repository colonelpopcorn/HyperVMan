import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@hypervman/api-interfaces';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'hypervman-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {
    this.hello$.pipe(tap(message => console.log(message)));
  }
}
