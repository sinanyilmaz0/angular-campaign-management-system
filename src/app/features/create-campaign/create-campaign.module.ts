import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCampaignComponent } from './components/create-campaign/create-campaign.component';
import { CreateCampaignRoutingModule } from './create-campaign.routing.module';
import { SharedModule } from 'src/app/shared/shared.campaing.module';



@NgModule({
  declarations: [CreateCampaignComponent],
  imports: [
    CommonModule, CreateCampaignRoutingModule, SharedModule
  ]
})
export class CreateCampaignModule { }
