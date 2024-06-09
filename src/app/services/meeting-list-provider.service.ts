import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MeetingListProviderService {

  meetings: any;
  italyBMLT = environment.italyBMLT;
  tomatoBMLT = environment.tomatoBMLT;
  virtualItalyBMLT = environment.virtualItalyBMLT;

  constructor() { }

  getApiUrlMap: string = this.italyBMLT + '?switcher=GetSearchResults&sort_keys=longitude,latitude,weekday_tinyint,start_time';
  getApiUrlDay: string = this.italyBMLT + '?switcher=GetSearchResults&sort_keys=weekday_tinyint,start_time';
  getApiUrlVirt: string = this.virtualItalyBMLT + '?switcher=GetSearchResults&sort_keys=weekday_tinyint,start_time';

  async getMeetingsSortedByDay() {
    const data: HttpResponse = await CapacitorHttp.get({url: this.getApiUrlDay});
    return data;
  }

}
