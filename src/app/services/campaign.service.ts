import { Injectable } from '@angular/core';
import { Common } from '../shared/models/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class CampaignService {
  constructor() {}

  addCampaign(request: Common.Campaign) {
    const storedCampaignsString = localStorage.getItem('campaigns');
    let storedCampaigns: Common.Campaign[] = [];

    if (storedCampaignsString) {
      storedCampaigns = JSON.parse(storedCampaignsString);
    }

    const uniqueId = uuidv4();
    request.id = uniqueId;
    storedCampaigns.push(request);
    localStorage.setItem('campaigns', JSON.stringify(storedCampaigns));
  }

  getCampaigns(): Common.Campaign[] {
    const storedCampaignsString = localStorage.getItem('campaigns');
    if (storedCampaignsString) {
      return JSON.parse(storedCampaignsString);
    }

    return [];
  }

  deleteCampaign(id: string) {
    const storedCampaignsString = localStorage.getItem('campaigns');
    let storedCampaigns: Common.Campaign[] = [];

    if (storedCampaignsString) {
      storedCampaigns = JSON.parse(storedCampaignsString);

      const indexToDelete = storedCampaigns.findIndex(
        (campaign) => campaign.id === id
      );

      if (indexToDelete !== -1) {
        storedCampaigns.splice(indexToDelete, 1);

        localStorage.setItem('campaigns', JSON.stringify(storedCampaigns));
      }
    }
  }

  updateCampaign(updatedCampaign: Common.Campaign) {
    const storedCampaignsString = localStorage.getItem('campaigns');
    let storedCampaigns: Common.Campaign[] = [];

    if (storedCampaignsString) {
      storedCampaigns = JSON.parse(storedCampaignsString);

      const indexToUpdate = storedCampaigns.findIndex(
        (campaign) => campaign.id === updatedCampaign.id
      );

      if (indexToUpdate !== -1) {
        storedCampaigns[indexToUpdate] = updatedCampaign;
        localStorage.setItem('campaigns', JSON.stringify(storedCampaigns));
      }
    }
  }

  getCampaignById(id: string): Common.Campaign | null {
    const storedCampaignsString = localStorage.getItem('campaigns');
    let storedCampaigns: Common.Campaign[] = [];

    if (storedCampaignsString) {
      storedCampaigns = JSON.parse(storedCampaignsString);
      const foundCampaign = storedCampaigns.find(campaign => campaign.id === id);

      return foundCampaign || null;
    }

    return null;
  }

  updatePoint(id: string, isIncrease: boolean){
    const storedCampaignsString = localStorage.getItem('campaigns');
    let storedCampaigns: Common.Campaign[] = [];

    if (storedCampaignsString) {
      storedCampaigns = JSON.parse(storedCampaignsString);

      const indexToUpdate = storedCampaigns.findIndex(
        (c) => c.id === id
      );

      if (indexToUpdate !== -1) {
        if (isIncrease) {
          storedCampaigns[indexToUpdate].points++;
        } else {
          storedCampaigns[indexToUpdate].points = Math.max(0, storedCampaigns[indexToUpdate].points - 1);
        }

        localStorage.setItem('campaigns', JSON.stringify(storedCampaigns));

        this.getCampaigns();
      }
    }
  }
}
