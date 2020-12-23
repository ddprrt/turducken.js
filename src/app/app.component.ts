import { Component } from '@angular/core';
import { Counter } from './Counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'turducken';
  Counter = Counter;
}
