import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { AddAssetsComponent } from './add-assets/add-assets.component';
import { RegisterLoginComponent } from '../register-login/register-login.component';
import { HomeComponent } from './home/home.component';
import { AssetListComponent } from './asset-list/asset-list.component';

const routes: Routes = [
  { path: '', component: HomePageComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
