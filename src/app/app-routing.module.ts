import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register-login/register/register.component';
import { LoginComponent } from './register-login/login/login.component';
import { HomeComponent } from './home-page/home/home.component';
import { ForgotPwdComponent } from './register-login/forgot-pwd/forgot-pwd.component';
import { AddAssetsComponent } from './home-page/add-assets/add-assets.component';
import { AssetListComponent } from './home-page/asset-list/asset-list.component';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { AuthGuard } from './guards/auth.guard';
import { AssetsauthGuard } from './guards/assetsauth.guard';

const routes: Routes = [
  { 
   path: 'customers', 
   loadChildren: () => import('./register-login/register-login.module').then(m => m.RegisterLoginModule)
  },
  { path: 'orders', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) },
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
  {path:'',redirectTo: 'register',pathMatch: 'full'},
  {path:'register',component:RegisterComponent},
  {path:'login', component: LoginComponent },
  {path:'forgotpassword', component:ForgotPwdComponent},
  // {path:'home',component:HomeComponent, canActivate:[AuthGuard] },  
  // {path:'add-assets',component:AddAssetsComponent,canActivate:[AssetsauthGuard] },  
  // {path:'asset-List',component:AssetListComponent,canActivate:[AuthGuard]}
  {path:'home',component:HomeComponent },  
  {path:'add-assets',component:AddAssetsComponent },  
  {path:'asset-List',component:AssetListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
