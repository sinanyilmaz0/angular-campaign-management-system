import { CampaignService } from './../../../../services/campaign.service';
import { Component } from '@angular/core';
import { Common } from 'src/app/shared/models/common';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss']
})
export class CreateCampaignComponent {

  constructor(private campaignService: CampaignService) { }

  onSubmit(campaing: Common.Campaign) {
    this.campaignService.addCampaign(campaing);
  }
}
