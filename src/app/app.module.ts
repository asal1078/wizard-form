import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepsModule } from 'primeng/steps';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ShareModule } from 'src/share/share.module';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { FirstStepImageUploaderComponent } from './pages/first-step-image-uploader/first-step-image-uploader.component';
import { SecondStepFormComponent } from './pages/second-step-form/second-step-form.component';
import { ThirdStepTableComponent } from './pages/third-step-table/third-step-table.component';
import { FourthStepSummeryComponent } from './pages/fourth-step-summery/fourth-step-summery.component';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    FirstStepImageUploaderComponent,
    SecondStepFormComponent,
    ThirdStepTableComponent,
    FourthStepSummeryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StepsModule,
    BrowserAnimationsModule,
    ShareModule,
    FileUploadModule,
    HttpClientModule,
    TableModule,
    CalendarModule,
    FormsModule,
    DropdownModule,
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
