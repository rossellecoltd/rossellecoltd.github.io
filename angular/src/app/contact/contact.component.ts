import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { tracking_id } from '../gtag.config';

declare let gtag: Function

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', tracking_id, {
          'page_path': event.urlAfterRedirects
        })
      }
    })
  }

  ngOnInit(): void {
  }

}
