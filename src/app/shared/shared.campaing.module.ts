import { NgModule } from '@angular/core';
import { AddCampaignFormComponent } from './components/add-campaign-form/add-campaign-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';

@NgModule({
  declarations: [AddCampaignFormComponent, DeleteModalComponent],
  imports: [ReactiveFormsModule, CommonModule],
  exports: [
    AddCampaignFormComponent,
  ],
})
export class SharedModule { }
