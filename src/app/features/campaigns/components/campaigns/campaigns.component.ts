import { CampaignService } from './../../../../services/campaign.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Common } from 'src/app/shared/models/common';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddCampaignFormComponent } from 'src/app/shared/components/add-campaign-form/add-campaign-form.component';
import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit{
  bsModalRef!: BsModalRef;

  campaigns: Common.Campaign[];
  updateCampaing: string;

  constructor(private campaignService: CampaignService, private toastr: ToastrService, private modalService: BsModalService){}

  ngOnInit(): void {
    this.getCampaigns();

  }

  private getCampaigns(){
    this.campaigns = this.campaignService.getCampaigns();
  }

  deleteCampaign(id: string){
    this.campaignService.deleteCampaign(id);
    this.getCampaigns();
    this.toastr.success('Campaign was successfully deleted');
  }

  onSubmit(campaing: Common.Campaign){
    this.campaignService.updateCampaign(campaing);
    this.getCampaigns();
  }

  openDeleteModal(id: string){
    this.bsModalRef = this.modalService.show(DeleteModalComponent, {});

    this.bsModalRef.content.clickedDelete.subscribe((data: Common.Campaign) => {
      this.deleteCampaign(id);
    });
  }

  openModal(campaign: Common.Campaign): void {
    this.bsModalRef = this.modalService.show(AddCampaignFormComponent, {
      initialState: {
        updateCampaing: campaign.id,
      },
    });

    this.bsModalRef.content.campaignSubmit.subscribe((data: Common.Campaign) => {
      const item = {
        ...data,
        id: campaign.id,
      }
      this.onSubmit(item);
    });
  }

  updatePoints(campaign: Common.Campaign, isIncrease: boolean): void {
    if(campaign.points < 9999){
      this.campaignService.updatePoint(campaign.id, isIncrease);
      this.getCampaigns();
    }else{
      this.toastr.error("Maximum point value reached!")
    }
  }
}
