import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  language!: string;
  theme!: string;
  searchRange!: number;

  constructor(
    private storage: StorageService,
    private translate: TranslateService
  ) {

  }

  ngOnInit() {
    this.storage.get('language')
      .then(langValue => {
        if (langValue) {
          this.language = langValue;
        } else {
          this.language = 'en';
        }
      });

  }

  selectLanguage() {
    this.storage.set('language', this.language);
    this.translate.setDefaultLang(this.language);
    this.translate.use(this.language);
  }


}