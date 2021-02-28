import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { LanguageService } from '../language.service';

import { _CarouselImageStruct } from "../interfaces/carousel"
import { tracking_id } from "../gtag.config";

declare let gtag: Function

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private _language: string
  private _about_carousel_images: Array<_CarouselImageStruct> = [
    {
      url: '../../assets/carousel/about/pallet.jpeg',
      alt_text: 'pallet'
    },
    {
      url: '../../assets/carousel/about/stock1.jpeg',
      alt_text: ''
    },
    {
      url: '../../assets/carousel/about/stock2.jpeg',
      alt_text: ''
    }
  ]

  constructor(
    private router: Router,
    private languageService: LanguageService,
    private config: NgbCarouselConfig
  ) {
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

  get about_carousel_images(): Array<_CarouselImageStruct> {
    return this._about_carousel_images
  }
}
