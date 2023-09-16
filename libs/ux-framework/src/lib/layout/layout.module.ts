import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcsDefaultLayoutComponent } from './default-layout/ecs-default-layout.component';
import { EcsB2eHeaderComponent } from './header/ecs-b2e-header.component';
import {RouterOutlet} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterOutlet],
  declarations: [EcsDefaultLayoutComponent, EcsB2eHeaderComponent],
  exports: [EcsDefaultLayoutComponent, EcsB2eHeaderComponent],
})
export class EcsLayoutModule {}
