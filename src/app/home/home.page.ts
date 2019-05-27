import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ProgressPopoverComponent } from '../components/progress-popover/progress-popover.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  rows = [];
  selected = [];

  constructor(
    public popoverController: PopoverController
  ) {}

  ngOnInit() {
    setTimeout(() => {
      const rows = [];
      ['Caramel Dundee', 'Gosinder Shah', 'Mein Black', 'Gos Baxter', 'Monday Blighton', 'Joreis Park', 'Dimitry Ricks', 'Desean Ning'].forEach(st => {
        rows.push({
          student: st,
          progress: Array(7).fill({}).map(this.randomProgress).concat(Array(3).fill({
            name: 'assessment name',
            due_date: '2019-09-08 07:00:00',
            status: 'not started',
            overdue: false
          })),
          action: '...'
        });
      });
      this.rows = rows;
    }, 500);
  }

  randomProgress(x) {
    const status = ['not started', 'in progress', 'done', 'pending review', 'pending approval', 'published'];
    return {
      name: 'assessment name',
      due_date: '2019-09-08 07:00:00',
      status: status[Math.floor( Math.random() * status.length )],
      overdue: Math.random() > 0.7
    };
  }

  async presentPopover(ev: any, progress) {
    const popover = await this.popoverController.create({
      component: ProgressPopoverComponent,
      event: ev,
      componentProps: {
        progress: progress
      },
      mode: 'ios'
    });
    return await popover.present();
  }

  progressWidth(x) {
    return Math.floor(100/x);
  }
}
