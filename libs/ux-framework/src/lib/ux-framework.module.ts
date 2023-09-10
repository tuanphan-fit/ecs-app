import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcsLayoutModule } from './layout/layout.module';

@NgModule({
  declarations:[],
  imports: [CommonModule, EcsLayoutModule],
  exports: [EcsLayoutModule]
})
export class UxFrameworkModule {}
