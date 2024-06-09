import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class JftService {

  constructor() { }

  JftUrlEnglish = 'https://www.jftna.org/jft/';
  JftUrlItalian = 'https://na-italia.org/get-jft';

  async getJFT() {
    const data: HttpResponse = await CapacitorHttp.get({url: this.JftUrlItalian});
    return data.data;

  }

  async getEnglishJFT() {
    const data: HttpResponse = await CapacitorHttp.get({url: this.JftUrlEnglish});
    return data.data;
  }
}
