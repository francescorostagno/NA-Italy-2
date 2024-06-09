import { Component, NgZone } from '@angular/core';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './services/storage.service';
import { Router } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';
import { App, URLOpenListenerEvent } from '@capacitor/app';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'HOME',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'SETTINGS',
      url: '/settings',
      icon: 'settings'
    },
    {
      title: 'MEETINGLIST',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'GOOGLE_MAPS',
      url: '/map',
      icon: 'map'
    },
    {
      title: 'VIRTMEETINGLIST',
      url: '/virtual',
      icon: 'cloud'
    },
    {
      title: 'JUSTFORTODAY',
      url: '/jft',
      icon: 'book'
    },
    {
      title: 'DATETIME',
      url: '/calc',
      icon: 'stopwatch'
    },

    {
      title: 'POSTS',
      url: '/events',
      icon: 'calendar'
    },
    {
      title: 'CONTACT',
      url: '/contact',
      icon: 'person'
    }
  ];

  constructor(
    private platform: Platform,
    private translate: TranslateService,
    private storage: StorageService,
    private router: Router,
    private zone: NgZone
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    this.translate.setDefaultLang('it');

    await SplashScreen.hide();

    const langValue = await this.storage.get('language');
    if (langValue) {
      this.translate.use(langValue);
    } else {
      this.translate.use('it');
      this.storage.set('language', 'it');
    }

      App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
          this.zone.run(() => {
              // Example url: https://beerswift.app/tabs/tab2
              // slug = /tabs/tab2
              const slug = event.url.split(".app").pop();
              if (slug) {
                  this.router.navigateByUrl(slug);
              }
              // If no match, do nothing - let regular routing
              // logic take over
          });
      });
  }

}
