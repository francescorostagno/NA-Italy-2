import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { JftService } from 'src/app/services/jft.service';
import { LoadingService } from 'src/app/services/loading.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-jft',
  templateUrl: './jft.page.html',
  styleUrls: ['./jft.page.scss'],
})
export class JftPage implements OnInit {


  jft: any;
  englishjft: any;
  loader = null;
  headers = null;
  loadingText: any;

  constructor(
    public loadingCtrl: LoadingService,
    public JftProvider: JftService,
    private translate: TranslateService,
    private storage: StorageService
  ) { }

  ngOnInit() {
    this.translate.get('CONTACT.LOADING').subscribe(value => {
      this.loadingText = value;
    });
    this.loadingCtrl.present(this.loadingText);
    this.storage.get('language').then((value) => {
      if (value === 'en') {
        this.getEnglishJFT();
      } else if ( value === 'it') {
        this.getJFT();
      } else {
        this.getJFT();
      }
    });
  }

  getJFT() {
    this.JftProvider.getJFT().then((data) => {
      this.jft = data;
      this.loadingCtrl.dismiss();
    });
  }

  getEnglishJFT() {
    this.JftProvider.getEnglishJFT().then((data) => {
      this.englishjft = data;
      this.loadingCtrl.dismiss();
    });
  }
}
