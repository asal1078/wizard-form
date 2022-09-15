import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IThird } from 'src/share/models/Third-step';
import { DomSanitizer } from "@angular/platform-browser"; 


@Component({
  selector: 'app-fourth-step-summery',
  templateUrl: './fourth-step-summery.component.html',
  styleUrls: ['./fourth-step-summery.component.css']
})
export class FourthStepSummeryComponent implements OnInit {

  constructor(private route : ActivatedRoute , private sanitizer: DomSanitizer) { }

  summeryModel !: IThird;

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.summeryModel = JSON.parse(params['thirdStepModel']);
      }
    )
    this.sanitizeImage();
  }

  sanitizeImage() {
    this.summeryModel.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + this.summeryModel.imageUrl);
  }

}
