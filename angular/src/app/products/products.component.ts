import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { tracking_id } from '../gtag.config';

declare let gtag: Function

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

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