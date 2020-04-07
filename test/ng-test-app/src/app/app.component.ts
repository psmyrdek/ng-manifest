import { Component } from '@angular/core';
import dayjs from 'dayjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-test-app';
  testDate = dayjs(new Date()).format('DD MMM YYYY');
}
