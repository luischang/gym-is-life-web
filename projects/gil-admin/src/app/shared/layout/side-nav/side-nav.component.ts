import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;
  list = [
    {
      number: '1',
      name: 'Home',
      icon: 'fa-solid fa-house',
      route: 'home'
    },
    {
      number: '2',
      name: 'Analytics',
      icon: 'fa-solid fa-chart-line',
      route: 'analytics'
    },
    {
      number: '3',
      name: 'Products',
      icon: 'fa-solid fa-box',
      route: 'products'
    },
    {
      number: '4',
      name: 'Order',
      icon: 'fa-solid fa-cart-shopping',
      route: 'order'
    },
    {
      number: '5',
      name: 'Settings',
      icon: 'fa-solid fa-gear',
      route: 'settings'
    },
    {
      number: '6',
      name: 'About',
      icon: 'fa-solid fa-circle-info',
      route: 'about'
    },
    {
      number: '7',
      name: 'Contact',
      icon: 'fa-solid fa-phone'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
