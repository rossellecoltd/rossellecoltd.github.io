import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { tracking_id } from './gtag.config';

declare let gtag: Function

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', tracking_id, {
          'page_path': event.urlAfterRedirects
        })
      }
    })
  }
}
