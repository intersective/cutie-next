import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  rows = [
    { student: 'Austin', progress: '0.3', action: '...' },
  ];
}
