import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OkPageRoutingModule } from './ok-routing.module';

import { OkPage } from './ok.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OkPageRoutingModule
  ],
  declarations: [OkPage]
})
export class OkPageModule {}
