import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Common } from '../../models/common';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CampaignService } from 'src/app/services/campaign.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-campaign-form',
  templateUrl: './add-campaign-form.component.html',
})
export class AddCampaignFormComponent implements OnInit {
  @Input()
  updateCampaing: string;

  @Output()
  campaignSubmit = new EventEmitter<Common.Campaign>();

  campaignForm: FormGroup;

  constructor(private formBuilder: FormBuilder,  private toastr: ToastrService, private campaignService: CampaignService, public bsModalRef: BsModalRef){}

  ngOnInit(): void {
    let campaign;
    if(this.updateCampaing){
      campaign = this.campaignService.getCampaignById(this.updateCampaing);
    }
    this.campaignForm = this.formBuilder.group({
      title: [campaign ? campaign.title: '', Validators.required],
      description: [campaign ? campaign.description : '', Validators.required],
      points: [campaign ? campaign.points : 0, [Validators.required]],
      date: [campaign ? campaign.date : '', Validators.required]
    });
  }

  get isDisabled(): boolean {
    return !this.campaignForm.valid;
  }

  onSubmit() {

    if (this.campaignForm.invalid) {
      return;
    }
    const request = {
      title: this.campaignForm.value.title,
      description: this.campaignForm.value.description,
      points: this.campaignForm.value.points,
      date: this.campaignForm.value.date,
    } as Common.Campaign;

    if(!this.updateCampaing){
      this.campaignSubmit.emit(request);
      this.campaignForm.reset();
      this.toastr.success('Campaign added successfully');
    }else{
      this.campaignSubmit.emit(request);
      this.toastr.success('Campaign updated successfully');
      this.bsModalRef.hide();
    }
  }

  limitInput() {
    const maxNumber = 9999;

    const pointsControl = this.campaignForm.get('points');

    if (pointsControl) {
      if (pointsControl.value > maxNumber) {
        pointsControl.setValue(maxNumber);
      }
    }
  }
}
