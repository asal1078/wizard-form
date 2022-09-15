import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  constructor(public router: Router){}

  wizardItems: MenuItem[] = [];
  start: number = 1;

  ngOnInit(): void {
    this.wizardItems = [
      { 
        label: 'Image',
        routerLink: '/upload-image'
      },
      { label: 'Form',
        routerLink: '/form'
      },
      { label: 'Table',
        routerLink: '/table'
      },
      { label: 'Summery',
        routerLink: 'summery'
      },
    ];
  }
}
