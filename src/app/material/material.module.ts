import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';

const MeterialComponents = [
  MatSidenavModule
];

@NgModule({
  imports: [MeterialComponents],
  exports: [MeterialComponents],
})
export class MaterialModule { }
