import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstStepImageUploaderComponent } from './pages/first-step-image-uploader/first-step-image-uploader.component';
import { FourthStepSummeryComponent } from './pages/fourth-step-summery/fourth-step-summery.component';
import { SecondStepFormComponent } from './pages/second-step-form/second-step-form.component';
import { ThirdStepTableComponent } from './pages/third-step-table/third-step-table.component';

const routes: Routes = [
  {
    path: 'upload-image',
    component: FirstStepImageUploaderComponent ,
  },
  {
    path: 'form',
    component: SecondStepFormComponent ,
  },
  {
    path: 'table',
    component: ThirdStepTableComponent ,
  },
  {
    path: 'summery',
    component: FourthStepSummeryComponent ,
  },
  {
    path: '',
    redirectTo: 'upload-image',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
