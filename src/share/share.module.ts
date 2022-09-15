import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FileUploadModule,
    HttpClientModule
  ],
  exports: [
  ],
  providers: [],
})
export class ShareModule { }
