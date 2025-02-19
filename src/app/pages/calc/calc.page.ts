import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import 'moment-precise-range-plugin';

declare module 'moment' {
  function preciseDiff(start: string | Date | moment.Moment, end: string | Date | moment.Moment, convertToObject?: boolean): any;
}

@Component({
  selector: 'app-calc',
  templateUrl: './calc.page.html',
  styleUrls: ['./calc.page.scss'],
})
export class CalcPage implements OnInit {

  myDate: any;
  cleanHumanized: any;
    
  todayInMilliseconds: any;
  todayDate: any;
  maxDisplayDate: any;
  todayDay: any;
  todayMonth: any;
  todayYear: any;

  cleanTimeInMilliseconds = 0;
  cleanTimeDate: any;
  cleanDay: any;
  cleanMonth: any;
  cleanYear: any;
  cleanTimeInDays = 0;
  cleanTimeInYears = 0;
  cleanTimeInWeeks = 0;

  tag: any;
  tagTime: any;
  keytagImage: any;
  wait = true;

  monthNames: string[] = [];
  cancelText: any;
  doneText: any;

  constructor(
    private storage: StorageService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    let cleanDate;


    this.storage.get('cleanDate').then(value => {
      if (value) {
        cleanDate = moment(value).toISOString();
      } else {
        cleanDate = moment().toISOString();
      }

      this.maxDisplayDate = moment().toISOString();
      this.todayDate = moment();

      this.todayInMilliseconds = this.todayDate.valueOf();
      this.todayDay = this.todayDate.date();
      this.todayMonth = this.todayDate.month();
      this.todayYear = this.todayDate.year();

      this.myDate = cleanDate;

      this.tag = 'none';
      this.wait = false;
      this.getCleanTime();
    });


    this.translate.get('JANUARY').subscribe(value1 => {
      this.monthNames.push(value1);
      this.translate.get('FEBRUARY').subscribe(value2 => {
        this.monthNames.push(value2);
        this.translate.get('MARCH').subscribe(value3 => {
          this.monthNames.push(value3);
          this.translate.get('APRIL').subscribe(value4 => {
            this.monthNames.push(value4);
            this.translate.get('MAYL').subscribe(value5 => {
              this.monthNames.push(value5);
              this.translate.get('JUNE').subscribe(value6 => {
                this.monthNames.push(value6);
                this.translate.get('JULY').subscribe(value7 => {
                  this.monthNames.push(value7);
                  this.translate.get('AUGUST').subscribe(value8 => {
                    this.monthNames.push(value8);
                    this.translate.get('SPETEMBER').subscribe(value9 => {
                      this.monthNames.push(value9);
                      this.translate.get('OCTOBER').subscribe(value10 => {
                        this.monthNames.push(value10);
                        this.translate.get('NOVEMBER').subscribe(value11 => {
                          this.monthNames.push(value11);
                          this.translate.get('DECEMBER').subscribe(value12 => {
                            this.monthNames.push(value12);
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });


    this.translate.get('CANCEL').subscribe(value => {
      this.cancelText = value;
    });

    this.translate.get('DONE').subscribe(value => {
      this.doneText = value;
    });
  }

  getCleanTime() {
    if (!this.wait) {
      const oneDay = 86400000;  // in  milliseconds
      const oneWeek = oneDay * 7;
      const oneYear = 31556952000; // inmillseconds

      const cleanDateInMilliseconds = Date.parse(this.myDate);
      this.storage.set('cleanDate', cleanDateInMilliseconds);

      this.cleanTimeDate = new Date(cleanDateInMilliseconds);
      this.cleanDay = this.cleanTimeDate.getDate();
      this.cleanMonth = this.cleanTimeDate.getMonth();
      this.cleanYear = this.cleanTimeDate.getFullYear();

      // this.cleanTimeInMilliseconds = (this.todayInMilliseconds - cleanDateInMilliseconds) + oneDay; // ??
      this.cleanTimeInMilliseconds = (this.todayInMilliseconds - cleanDateInMilliseconds); // ??
      this.cleanTimeInDays = Math.floor(this.cleanTimeInMilliseconds / oneDay);
      this.cleanTimeInWeeks = Math.floor(this.cleanTimeInMilliseconds / oneWeek);
      this.cleanTimeInYears = Math.floor(this.cleanTimeInMilliseconds / oneYear);

      if (this.cleanTimeInDays !== 0) {
        this.cleanTimeTag();
      }

      const todayMoment = moment(this.todayInMilliseconds);
      const cleanMoment = moment(cleanDateInMilliseconds);
      this.cleanHumanized = moment.preciseDiff(cleanMoment, todayMoment, true);
      console.log('Today : ', todayMoment);
      console.log('Clean : ', cleanMoment);
      
      console.log('YEARS : ', this.cleanHumanized.years);
      console.log('MONTHS: ', this.cleanHumanized.months);
      console.log('DAYS  : ', this.cleanHumanized.days);
    }
  }

  cleanTimeTag() {
    // One day
    if (this.cleanTimeInDays === 1) {
      this.tagTime = '1';
      this.tag = 'DAYCLEAN';
      this.keytagImage = './assets/keytags/1-day.png';

      // 30 days
    } else if (this.cleanTimeInDays === 30) {
      this.tagTime = '30';
      this.tag = 'DAYSCLEAN';
      this.keytagImage = './assets/keytags/30-days.png';

      // 60 days
    } else if (this.cleanTimeInDays === 60) {
      this.tagTime = '60';
      this.tag = 'DAYSCLEAN';
      this.keytagImage = './assets/keytags/60-days.png';

      // 90 days
    } else if (this.cleanTimeInDays === 90) {
      this.tagTime = '90';
      this.tag = 'DAYSCLEAN';
      this.keytagImage = './assets/keytags/90-days.png';

      // 6 months
      // TODO: FIX THIS
    } else if (this.cleanTimeInDays === 182) {
      this.tagTime = '6';
      this.tag = 'MONTHSCLEAN';
      this.keytagImage = './assets/keytags/6-months.png';

      // 9 months
      // TODO: FIX THIS
    } else if (this.cleanTimeInDays === 274) {
      this.tagTime = '9';
      this.tag = 'MONTHSCLEAN';
      this.keytagImage = './assets/keytags/9-months.png';

      // 1 year
    } else if ((this.todayDay === this.cleanDay) &&
      (this.todayMonth === this.cleanMonth) &&
      ((this.todayYear - 1) === this.cleanYear)) {
      this.tagTime = '1';
      this.tag = 'YEARCLEAN';
      this.keytagImage = './assets/keytags/1-year.png';

      // 18 months
      // TODO: Fix this
    } else if (this.cleanTimeInDays === 547) {
      this.tagTime = '18';
      this.tag = 'MONTHSCLEAN';
      this.keytagImage = './assets/keytags/18-months.png';

      // Multiple years
    } else if ((this.todayDay === this.cleanDay) &&
      (this.todayMonth === this.cleanMonth) &&
      (this.cleanYear !== this.todayYear) &&
      ((this.todayYear - this.cleanYear) > 1)) {
      this.tagTime = this.cleanTimeInYears;
      this.tag = 'YEARSCLEAN';
      this.keytagImage = './assets/keytags/x-years.png';

    } else {
      // Not a clean time anniversary today
      this.tag = 'none';
    }
    return this.tag;
  }

}
