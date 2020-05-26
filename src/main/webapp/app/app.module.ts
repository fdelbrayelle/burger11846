import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Burger11846SharedModule } from 'app/shared/shared.module';
import { Burger11846CoreModule } from 'app/core/core.module';
import { Burger11846AppRoutingModule } from './app-routing.module';
import { Burger11846HomeModule } from './home/home.module';
import { Burger11846EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Burger11846SharedModule,
    Burger11846CoreModule,
    Burger11846HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Burger11846EntityModule,
    Burger11846AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class Burger11846AppModule {}
