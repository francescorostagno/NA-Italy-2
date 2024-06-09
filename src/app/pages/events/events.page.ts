import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../../services/wordpress.service';
import { LoadingService } from '../../services/loading.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment.prod';
import * as moment from 'moment';
import { Browser } from '@capacitor/browser';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  eventsData: any = [];
  loadingText: string = '';
  now: any;
  wordpressApiUrl = environment.wordpressApiUrl;

  constructor(
    public loadingCtrl: LoadingService,
    public wp: WordpressService,
    private translate: TranslateService
  ) { }

  async ngOnInit() {
    this.translate.get('CONTACT.LOADING').subscribe(value => {
      this.loadingText = value;
    });
    this.loadingCtrl.present(this.loadingText);
    this.now = Date.now() / 1000;

    const data: HttpResponse = await CapacitorHttp.get({url: this.wordpressApiUrl});
    
    console.log(data);
    const jsonParsed = data;

    const eventsObj = jsonParsed.data.events;
    this.eventsData = Object.values(eventsObj);
    this.eventsData = this.eventsData.filter((event: { end_date: moment.MomentInput; }) => moment(event.end_date).format('X') > this.now);
    this.eventsData = this.eventsData.filter((event: { title: string; }) => event.title = this.tidyName(event.title));
    console.log(this.eventsData);
    this.loadingCtrl.dismiss();

  }

  public tidyName(name: any) {
    const doc = new DOMParser().parseFromString(name, 'text/html');
    return doc.body.textContent || '';
  }


  public openLink(url: any) {
    const browser = Browser.open({url: url});
  }


  public openMapsLink(destLatitude: string, destLongitude: string) {
    const browser = Browser.open({url: 'https://www.google.com/maps/search/?api=1&query=' + destLatitude + ',' + destLongitude});
  }

}
