import { Component } from '@angular/core';

import { LanguageService } from '../language.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  private _language: string
  get language(): string {
    return this._language
  }

  constructor(private languageService: LanguageService) {
    this._language = languageService.language
    languageService.lang_publisher.subscribe(language => this._language = language)
  }
}
