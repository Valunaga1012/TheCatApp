import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatsPageRoutingModule } from './cats-routing.module';

import { CatsPage } from './cats.page';
import { ImageViewerComponent } from 'src/app/shared/image-viewer/image-viewer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatsPageRoutingModule,

  ],
  declarations: [CatsPage, ImageViewerComponent]
})
export class CatsPageModule {}
