import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { CampaignsModule } from './features/campaigns/campaigns.module';
import { CreateCampaignModule } from './features/create-campaign/create-campaign.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, MainLayoutComponent],
  imports: [BrowserModule, CampaignsModule, CreateCampaignModule, AppRoutingModule, FormsModule, ReactiveFormsModule, ToastrModule.forRoot()],
  providers: [provideAnimations(), provideToastr()],
  bootstrap: [AppComponent]
})
export class AppModule { }
