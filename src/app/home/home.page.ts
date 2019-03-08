import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  rows = [
    { student: 'Caramel Dundee', progress: '0.81', action: '...' },
    { student: 'Gosinder Shah', progress: '0.79', action: '...' },
    { student: 'Mein Black', progress: '0.79', action: '...' },
    { student: 'Gos Baxter', progress: '0.76', action: '...' },
    { student: 'Monday Blighton', progress: '0.75', action: '...' },
    { student: 'Joreis Park', progress: '0.70', action: '...' },
    { student: 'Dimitry Ricks', progress: '0.68', action: '...' },
    { student: 'Desean Ning', progress: '0.67', action: '...' },
  ];
  selected = [];
}
