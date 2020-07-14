import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private _language: string

  constructor(private languageService: LanguageService) {
    this._language = languageService.language
    
    languageService.lang_publisher.subscribe(language => {
      this._language = language
    })
  }

  ngOnInit(): void {
  }

  /**
   * Change to another language
   * 
   * @param language language to change to
   */
  changeLanguage(language: string) {
    if (language !== this.language)
      this.languageService.changeLanguage()
  }

  get language(): string {
    return this._language
  }
}
