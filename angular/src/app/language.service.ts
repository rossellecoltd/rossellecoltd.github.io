import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private _language: string = 'th' // Default to Thai
  private lang_subject: Subject<string>
  lang_publisher: Observable<string>

  constructor() {
    this.lang_subject = new Subject<string>()
    this.lang_publisher = this.lang_subject.asObservable()
  }

  get language(): string {
    return this._language
  }

  /**
   * Change to another language
   */

  changeLanguage() {
    this._language = (this._language === 'en') ? 'th' : 'en'
    this.lang_subject.next(this._language.toLowerCase())
  }
}
