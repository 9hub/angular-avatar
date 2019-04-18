import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { WebcamModule } from 'ngx-webcam';

import { NgxAngularMaterialModule } from './nx-angular-material.module';
import { NgxAvatartComponent } from './ngx-avatar.component';
import { ImageEditorComponent } from './image-editor/image-editor.component';

@NgModule({
  declarations: [
    NgxAvatartComponent,
    ImageEditorComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    WebcamModule,
    NgxAngularMaterialModule,
    FlexLayoutModule
  ],
  exports: [
    NgxAvatartComponent
  ],
  entryComponents: [
    ImageEditorComponent
  ]
})
export class NgxAvatarModule { }
