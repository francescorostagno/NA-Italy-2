import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcPageRoutingModule } from './calc-routing.module';

import { CalcPage } from './calc.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcPageRoutingModule,
    TranslateModule
  ],
  declarations: [CalcPage]
})
export class CalcPageModule {}
