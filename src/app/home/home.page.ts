import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  rows = [];
  selected = [];

  ngOnInit() {
    ['Caramel Dundee', 'Gosinder Shah', 'Mein Black', 'Gos Baxter', 'Monday Blighton', 'Joreis Park', 'Dimitry Ricks', 'Desean Ning'].forEach(st => {
      this.rows.push({
        student: st,
        progress: Array(10).fill({}).map(this.randomProgress),
        action: '...'
      });
    });
  }

  randomProgress(x) {
    const status = ['not started', 'in progress', 'done', 'pending review', 'pending approval', 'published'];
    return {
      due_date: '2019-09-08 07:00:00',
      status: status[Math.floor( Math.random() * status.length )],
      overdue: Math.random() > 0.7
    };
  }

  progressWidth(x) {
    return Math.floor(100/x);
  }
}
