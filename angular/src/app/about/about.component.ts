import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { tracking_id } from "../gtag.config";

declare let gtag: Function

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
