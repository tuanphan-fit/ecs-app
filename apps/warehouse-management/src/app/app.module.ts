import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import {InputTextModule} from "primeng/inputtext";
import {AutoFocusModule} from "primeng/autofocus";
import {EcsLayoutModule, UxFrameworkModule} from "@ecs/ux-framework";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    InputTextModule,
    AutoFocusModule,
    UxFrameworkModule,
    EcsLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
