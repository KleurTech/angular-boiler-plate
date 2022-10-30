import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ShellComponent } from './shell/shell.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { PrivacyPolicyComponent } from '../shared/components/privacy-policy/privacy-policy.component';
import { InfoSecPolicyComponent } from '../shared/components/info-sec-policy/info-sec-policy.component';

const routes: Routes = [
  { path: '', redirectTo: 'apps', pathMatch: 'full' },
  {
    path: 'apps',
    component: ShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'investors',
        pathMatch: 'full',
      },
      {
        path: 'main',
        component: LandingComponent,
      },
      {
        path: 'templates',
        loadChildren: () =>
          import('./modules/templates/templates.module').then((m) => m.TemplatesModule),
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'privacy',
        component: PrivacyPolicyComponent,
      },
      {
        path: 'info-sec',
        component: InfoSecPolicyComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingRoutingModule { }
