import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  logout() {
    this.auth.signOut().then(() => this.router.navigate(['login']));
  }

}
