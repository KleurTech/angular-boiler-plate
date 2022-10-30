import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingRoutingModule } from './home-routing.module';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { LandingComponent } from './components/landing/landing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './shell/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    ShellComponent,
    HeaderComponent,
    LandingComponent,
    AboutUsComponent,
    ContactComponent,
    FooterComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
})
export class HomeModule {}
