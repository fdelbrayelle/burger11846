import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Burger11846SharedModule } from 'app/shared/shared.module';
import { FooComponent } from './foo.component';
import { FooDetailComponent } from './foo-detail.component';
import { FooUpdateComponent } from './foo-update.component';
import { FooDeleteDialogComponent } from './foo-delete-dialog.component';
import { fooRoute } from './foo.route';

@NgModule({
  imports: [Burger11846SharedModule, RouterModule.forChild(fooRoute)],
  declarations: [FooComponent, FooDetailComponent, FooUpdateComponent, FooDeleteDialogComponent],
  entryComponents: [FooDeleteDialogComponent],
})
export class Burger11846FooModule {}
