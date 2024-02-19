import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'campaigns',
        loadChildren: () =>
          import('../app/features/campaigns/campaigns.module').then(
            (m) => m.CampaignsModule
          ),
      },
      {
        path: 'create-campaign',
        loadChildren: () =>
          import('../app/features/create-campaign/create-campaign.module').then(
            (m) => m.CreateCampaignModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
