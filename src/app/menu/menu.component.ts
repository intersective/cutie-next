import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goTo(url) {
    switch (url) {
      case 'people':
        return this.router.navigate(['people']);
        break;
      case 'progress':
        return this.router.navigate(['progress']);
        break;

      default:
        return this.router.navigate(['']);
        break;
    }

  }

}
