import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { CampaignsRoutingModule } from './campaigns.routing.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SharedModule } from 'src/app/shared/shared.campaing.module';



@NgModule({
  declarations: [CampaignsComponent],
  imports: [
    CommonModule, CampaignsRoutingModule, SharedModule
  ],
  providers: [BsModalService]
})
export class CampaignsModule { }
