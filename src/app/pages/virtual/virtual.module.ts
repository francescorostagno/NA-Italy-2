import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VirtualPageRoutingModule } from './virtual-routing.module';

import { VirtualPage } from './virtual.page';
import { TranslateModule } from '@ngx-translate/core';
import { MeetingListService } from 'src/app/services/meeting-list.service';
import { ServiceGroupsService } from 'src/app/services/service-groups.service';
import { ComponentModule } from '../../components/component/component.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VirtualPageRoutingModule,
    TranslateModule,
    ComponentModule
  ],
  declarations: [VirtualPage],
  providers: [
    MeetingListService,
    ServiceGroupsService
  ]
})
export class VirtualPageModule {}
