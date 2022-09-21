import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TablaBaseComponent } from './tabla-base/tabla-base.component';
import { TablaHeadComponent } from './tabla-head/tabla-head.component';
import { BotonesComponent } from './botones/botones.component';
import { VictDerComponent } from './vict-der/vict-der.component';
import { ImagesComponent } from './images/images.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TablaBaseComponent,
    TablaHeadComponent,
    BotonesComponent,
    VictDerComponent,
    ImagesComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
