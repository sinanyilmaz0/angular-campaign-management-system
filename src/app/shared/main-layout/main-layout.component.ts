import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  sideBarMenu = [
    {label: 'Campaigns', icon: 'bi-ticket-perforated', href: '/campaigns'},
    {label: 'Create Campaign', icon: 'bi-plus-square', href: '/create-campaign'},
  ]
}
