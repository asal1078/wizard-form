import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Isecond } from 'src/share/models/second-step';
import { Itable } from 'src/share/models/table-data';
import { IThird } from 'src/share/models/Third-step';
import { MessageService } from 'primeng/api';
import { EmptySecondStepModel } from 'src/share/datas/empty-second-step-model';
import { EmptyThirdStepModel } from 'src/share/datas/empty-third-step-model';
import { TableMockData } from 'src/share/datas/table-mock-data';
import { thirdSetepValidation } from 'src/share/utils/custom-validation';

@Component({
  selector: 'app-third-step-table',
  templateUrl: './third-step-table.component.html',
  styleUrls: ['./third-step-table.component.css']
})
export class ThirdStepTableComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private messageService: MessageService) {
    this.isRowSelectable = this.isRowSelectable.bind(this);
  }

  secondStepModel: Isecond = EmptySecondStepModel
  thirdStepModel: IThird = EmptyThirdStepModel
  TableData: Itable[] = TableMockData

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.secondStepModel = JSON.parse(params['secondStepModel']);
        this.thirdStepModel = {
          ...this.thirdStepModel,
          ...this.secondStepModel
        }
      }
    )
  }

  isRowSelectable(event: any) {
    return !this.isOutOfStock(event.data);
  }

  isOutOfStock(data: any) {
    return data.inventoryStatus === 'OUTOFSTOCK';
  }


  tableValidation(person: string) {
    if (person == "") {
      return false
    }
    else {
      return true
    }
  }

  handleValidation() {
    const result = thirdSetepValidation(
      this.thirdStepModel.tableData.name
    );
    if (result.status === true) {
      return true;
    }
    else {
      this.messageService.add(result);
      return false;
    }
  }

  goToFourthStep() {
    if (this.handleValidation()) {
      this.router.navigate(['/summery'], { queryParams: { thirdStepModel: JSON.stringify(this.thirdStepModel) } });
    }
  }




}
