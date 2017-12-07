import { UpdateService } from './update.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The Factory';
  logs: string[] = [];
  constructor(public updateService: UpdateService) {
    updateService.log.subscribe(entry => {
      // if (this.logs.length > 10) {
        // this.logs.shift();
      // }
      this.logs.push(entry);
    });
  }
}
