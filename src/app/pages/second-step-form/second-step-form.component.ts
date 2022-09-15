import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ifirst } from 'src/share/models/first-step';
import { Isecond } from 'src/share/models/second-step';
import { MessageService } from 'primeng/api';
import { EmptySecondStepModel } from 'src/share/datas/empty-second-step-model';
import { EmptyFirstStepModel } from 'src/share/datas/empty-first-step-model';
import { Istatus } from 'src/share/models/status';
import { StatusMockData } from 'src/share/datas/status-mock-data';
import { secondSetepValidation } from 'src/share/utils/custom-validation';

@Component({
  selector: 'app-second-step-form',
  templateUrl: './second-step-form.component.html',
  styleUrls: ['./second-step-form.component.css']
})
export class SecondStepFormComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private messageService: MessageService) { }

  secondStepModel: Isecond = EmptySecondStepModel;
  firstStepModel: Ifirst = EmptyFirstStepModel;
  Statuses: Istatus[] = StatusMockData;
  minDate = this.fromToday(0);
  maxDate = this.fromToday(5);

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.firstStepModel = JSON.parse(params['firstStepModel']);
        this.secondStepModel = {
          ...this.secondStepModel,
          ...this.firstStepModel
        }
      }
    )
  }


  getMinDate(minDate: Date) {
    var minDay = minDate.getDay();
    var minMonth = minDate.getMonth();
    var minYear = minDate.getFullYear();
    return minYear + "/" + minMonth + "/" + minDay;
  }

  getMaxDate(maxDate: Date) {
    var maxDay = maxDate.getDay();
    var maxMonth = maxDate.getMonth();
    var maxYear = maxDate.getFullYear();
    return maxYear + "/" + maxMonth + "/" + maxDay;
  }

  handleValidation() {
   const result = secondSetepValidation (
      this.secondStepModel.phoneNumber,
      this.secondStepModel.sourceOfFund,
      this.secondStepModel.range);
    if (result.status === true ) {
        return true;
    }
    else {
      this.messageService.add(result);
      return false;
    }
  }

  goToThirdStep() {
    if (this.handleValidation()) {
      this.secondStepModel.maxDate = this.getMaxDate(this.secondStepModel.range[1]);
      this.secondStepModel.minDate = this.getMinDate(this.secondStepModel.range[0]);
      this.router.navigate(['/table'], { queryParams: { secondStepModel: JSON.stringify(this.secondStepModel) } });
    }
  }

  fromToday(day: number) {
    const today = new Date();
    return new Date(today.setDate(today.getDate() + day));
  }

}
