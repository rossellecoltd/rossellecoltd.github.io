import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { LanguageService } from "../language.service";

import { _CarouselImageStruct } from '../interfaces/carousel';
import { tracking_id } from '../gtag.config';

declare let gtag: Function

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private _language: string
  private _product_carousel_images: Array<_CarouselImageStruct> = [
    {
      url: '../../assets/carousel/product/pasta1.jpg',
      alt_text: 'pasta1'
    },
    {
      url: '../../assets/carousel/product/noodle1.jpg',
      alt_text: 'noodle1'
    },
    {
      url: '../../assets/carousel/product/noodle2.jpg',
      alt_text: 'noodle2'
    },
    {
      url: '../../assets/carousel/product/bread1.jpg',
      alt_text: 'bread1'
    },
  ]

  constructor(
    private router: Router,
    private languageService: LanguageService,
    private config: NgbCarouselConfig) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', tracking_id, {
          'page_path': event.urlAfterRedirects
        })
      }
    })

    this._language = languageService.language

    languageService.lang_publisher.subscribe(language => {
      this._language = language
    })

    config.interval = 3000
    config.pauseOnHover = true
    config.keyboard = true
  }

  ngOnInit(): void {
  }

  get language(): string {
    return this._language
  }

  get product_carousel_images(): Array<_CarouselImageStruct> {
    return this._product_carousel_images
  }
}
