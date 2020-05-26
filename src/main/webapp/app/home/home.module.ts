import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Burger11846SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Burger11846SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class Burger11846HomeModule {}
