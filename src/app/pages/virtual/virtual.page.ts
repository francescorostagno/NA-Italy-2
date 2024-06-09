import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoadingService } from 'src/app/services/loading.service';
import { MeetingListService } from 'src/app/services/meeting-list.service';
import { ServiceGroupsService } from 'src/app/services/service-groups.service';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.page.html',
  styleUrls: ['./virtual.page.scss'],
})
export class VirtualPage implements OnInit {
  loader: any;
  meetingListArea: any;
  isLoaded = false;

  constructor(
    private meetingListService: MeetingListService,
    private serviceGroupsService: ServiceGroupsService,
    private loaderCtrl: LoadingService,
    private translate: TranslateService
  ) { 
    this.getVirtMeetings()
  }

  ngOnInit() {
  }

  getVirtMeetings() {
    this.translate.get('FINDING_MTGS').subscribe(value => { this.presentLoader(value); });

    this.meetingListService.getVirtualMeetings().then((data ) => {
      console.log(data)

      if (JSON.stringify(data) === '{}') {  // empty result set!
        this.meetingListArea = JSON.parse('[]');
      } else {
        this.meetingListArea = data;
        this.isLoaded = true;
      }
      this.dismissLoader();
    });

  }


  presentLoader(loaderText: any) {
    if (!this.loader) {
      this.loader = this.loaderCtrl.present(loaderText);
    }
  }


  dismissLoader() {
    if (this.loader) {
      this.loader = this.loaderCtrl.dismiss();
      this.loader = null;
    }
  }


}
