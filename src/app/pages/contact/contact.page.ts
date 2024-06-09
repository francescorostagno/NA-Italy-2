import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { TranslateService } from '@ngx-translate/core';
import { LoadingService } from 'src/app/services/loading.service';
import { ServiceGroupsProviderService } from 'src/app/services/service-groups-provider.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  loader = null;
  serviceGroupNames: any;
  serviceGroupData: any;
  loadingText: any;

  sourceCodeLink = 'https://github.com/paulnagle/NA-Italy-2';
  sourceBugs = 'https://github.com/paulnagle/NA-Italy-2/issues';
  bmltLink = 'https://bmlt.app/';
  fbGroupLink = 'https://www.facebook.com/groups/149214049107349/';

  constructor(
    private ServiceGroupsProvider: ServiceGroupsProviderService,
    public loadingCtrl: LoadingService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.translate.get('CONTACT.LOADING').subscribe(value => {
      this.loadingText = value;
    });
    this.loadingCtrl.present(this.loadingText);
    this.getServiceGroupContactDetails();
  }

  getServiceGroupContactDetails() {
    this.ServiceGroupsProvider.getAllServiceGroups().then((data) => {
      console.log(data)
      this.serviceGroupNames = data;

      this.loadingCtrl.dismiss();
    });

  }

  public openLink(url: any) {
    const browser = Browser.open({url: url});
  }

  public dialNum(url: any) {
    const telUrl = 'tel:' + url;
    const browser = Browser.open({url: telUrl});
  }

}
