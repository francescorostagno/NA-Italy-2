import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '../../services/storage.service';
import { LoadingService } from '../../services/loading.service';
import { ServiceGroupsService } from '../../services/service-groups.service';
import { MeetingListService } from '../../services/meeting-list.service';
import { firstBy } from 'thenby';
import { HttpResponse } from '@capacitor/core';

@Component({
  selector: 'app-listfull',
  templateUrl: './listfull.page.html',
  styleUrls: ['./listfull.page.scss'],
})
export class ListfullPage {

  serviceGroups: any;
  serviceGroupHierarchy: any = [];
  HTMLGrouping = 'areas';
  loader!: Promise<void> | Promise<boolean> | null;
  meetingListArea: any = [];
  areaName: any = '';
  isLoaded = false;

  constructor(
    private meetingListService: MeetingListService,
    private serviceGroupsService: ServiceGroupsService,
    private loaderCtrl: LoadingService,
    private translate: TranslateService,
    private storage: StorageService) {


    this.getServiceGroups()

  }

  getServiceGroups() {
    this.translate.get('FINDING_MTGS').subscribe(value => { this.presentLoader(value); })

    this.serviceGroupsService.getAllServiceGroups().then(response => {
      this.serviceGroups = response.data;
      this.serviceGroups.sort(firstBy('parent_id').thenBy('name').thenBy('id'));
      this.serviceGroupHierarchy = this.getServiceHierarchy(this.serviceGroups, 0);
      this.showServiceStructure();
      this.dismissLoader();
    });

  }

  getServiceHierarchy(flatServiceGroups: { [x: string]: any; }, parent: number) {
    const serviceGroupHierarchy = [];
    for (const i in flatServiceGroups) {
      if (flatServiceGroups[i].parent_id == parent) {
        const childServiceGroup = this.getServiceHierarchy(flatServiceGroups, flatServiceGroups[i].id);
        if (childServiceGroup.length) {
          flatServiceGroups[i].childServiceGroup = childServiceGroup;
        }
        serviceGroupHierarchy.push(flatServiceGroups[i]);
      }
    }
    return serviceGroupHierarchy;
  }

  getMeetingsByArea(areaID: any, areaName: any) {
    this.translate.get('FINDING_MTGS').subscribe(value => { this.presentLoader(value); });
    this.HTMLGrouping = 'meetings';
    this.areaName = areaName;
    this.meetingListService.getMeetingsByArea(areaID).then((response: HttpResponse) => {

      if (JSON.stringify(response.data) === '{}') {  // empty result set!
        this.meetingListArea = JSON.parse('[]');
      } else {
        this.meetingListArea = response.data;
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


  showServiceStructure() {
    this.HTMLGrouping = 'areas';
    this.areaName = '';
  }

}
