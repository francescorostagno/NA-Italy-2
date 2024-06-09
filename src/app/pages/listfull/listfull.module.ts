import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListfullPageRoutingModule } from './listfull-routing.module';
import { ListfullPage } from './listfull.page';

import { TranslateModule } from '@ngx-translate/core';
import { MeetingListService } from 'src/app/services/meeting-list.service';
import { ServiceGroupsService } from 'src/app/services/service-groups.service';
import { StorageService } from 'src/app/services/storage.service';

import { ComponentModule } from '../../components/component/component.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ComponentModule,
    ListfullPageRoutingModule
  ],
  declarations: [
    ListfullPage
  ],
  providers: [
    MeetingListService,
    ServiceGroupsService,
    StorageService
  ]
})
export class ListfullPageModule {}

