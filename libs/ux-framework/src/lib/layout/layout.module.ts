import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcsDefaultLayoutComponent } from './default-layout/ecs-default-layout.component';
import { EcsB2eHeaderComponent } from './header/ecs-b2e-header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EcsDefaultLayoutComponent, EcsB2eHeaderComponent],
  exports: [EcsDefaultLayoutComponent, EcsB2eHeaderComponent],
})
export class EcsLayoutModule {}
