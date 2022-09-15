import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ifirst } from 'src/share/models/first-step';
import { MessageService } from 'primeng/api';
import { EmptyFirstStepModel } from 'src/share/datas/empty-first-step-model';

@Component({
  selector: 'app-first-step-image-uploader',
  templateUrl: './first-step-image-uploader.component.html',
  styleUrls: ['./first-step-image-uploader.component.css']
})
export class FirstStepImageUploaderComponent implements OnInit {

  constructor( private router : Router, private messageService : MessageService) { }

  firstStepModel: Ifirst = EmptyFirstStepModel;
  
  ngOnInit(): void {}


  
  onSelectImage(event:any){
    var files = event.target.files;
    var file = files[0];
  if (files && file) {
      var reader = new FileReader();
      reader.onload =this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    } 
  }

  _handleReaderLoaded(readerEvt : any) {
    var binaryString = readerEvt.target.result;
    this.firstStepModel.imageUrl= btoa(binaryString);
  }


  goToSecondStep() {
    if(this.firstStepModel.imageUrl !== ""){
      this.router.navigate(['/form'] , 
      { queryParams : { firstStepModel : JSON.stringify(this.firstStepModel) } });
    }
    else {
      this.messageService.add({severity: 'error', summary: 'Input Error' , detail:'You Should Choose A Image!'})
    }
  }


}
