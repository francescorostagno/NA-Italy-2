import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ServiceGroupsProviderService {

  constructor() {
  }

  getApiUrlServiceGroups = environment.getApiUrlServiceGroups;

  async getAllServiceGroups() {
    const data: HttpResponse = await CapacitorHttp.get({url: this.getApiUrlServiceGroups});
    return data.data;
  }
}
