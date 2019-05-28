import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
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
  limit = 10;
  offset = 0;
  count = 20;
  loading = false;
  @ViewChildren('progressRef', {read: ElementRef}) progressRefs: QueryList<ElementRef>;

  constructor(
    public popoverController: PopoverController
  ) {}

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      const rows = [];
      ['Caramel Dundee', 'Gosinder Shah', 'Mein Black', 'Gos Baxter', 'Monday Blighton', 'Joreis Park', 'Dimitry Ricks', 'Desean Ning'].forEach(st => {
        rows.push({
          student: st,
          progress: [],
          action: '...'
        });
      });
      this.rows = rows;
      this.loading = false;
    }, 1000);
    setTimeout(() => {
      this.getProgress();
    }, 2000);
  }

  getProgress() {
    let index = this.rows.findIndex(row => {
      return row.progress.length === 0;
    });
    this.rows[index].progress = Array(10).fill({}).map(this.randomProgress).concat(Array(5).fill({
      name: 'assessment name',
      due_date: '2019-09-08 07:00:00',
      status: 'not started',
      overdue: false
    }));
    this.rows = [...this.rows];
    index = this.rows.findIndex(row => {
      return row.progress.length === 0;
    });
    if (index >= 0) {
      setTimeout(() => {
        this.getProgress();
      }, 1000);
    }
  }

  randomProgress(x) {
    const status = ['not started', 'in progress', 'done', 'pending review', 'pending approval', 'published'];
    return {
      name: 'assessment name',
      due_date: '2019-01-08 07:00:00',
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

  scrollLeft(i) {
    const elementRef = this.progressRefs.toArray()[i];
    elementRef.nativeElement.scrollTo({left: elementRef.nativeElement.scrollLeft - 100});
  }

  scrollRight(i) {
    const elementRef = this.progressRefs.toArray()[i];
    elementRef.nativeElement.scrollTo({left: elementRef.nativeElement.scrollLeft + 100});
  }
}
