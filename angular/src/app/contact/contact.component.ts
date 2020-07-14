import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { tracking_id } from '../gtag.config';
import { LanguageService } from '../language.service';

declare let gtag: Function

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private _language: string

  constructor(private router: Router, private languageService: LanguageService) {
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
  }

  ngOnInit(): void {
  }

  get language(): string {
    return this._language
  }
}
