import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ecs-default-layout',
  templateUrl: './ecs-default-layout.component.html',
  styleUrls: ['./ecs-default-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EcsDefaultLayoutComponent {}
