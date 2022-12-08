import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const CHECKSTATUS = 'check-status'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  menus = [
    {
      label: 'Cek Status Ahli Waris',
      id: CHECKSTATUS
    },
    {
      label: 'Cek Status Ahli Waris',
      id: ''
    },
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  openMenu(id: string) {
    if (id == CHECKSTATUS) this.router.navigate(['home/heir-check'])
  }

}
