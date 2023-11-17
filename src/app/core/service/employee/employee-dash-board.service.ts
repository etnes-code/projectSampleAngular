import { Injectable } from '@angular/core';
import { MasterService } from '../master/master.service';
import { environment } from '../../../../environments/environments';



@Injectable({
  providedIn: 'root'
})
export class EmployeeDashBoardService {

  constructor(private master: MasterService) { }

  getAllEmployee() {
    return this.master.get(environment.apiUrl + APIConstant.employee.getAllEmployees);
  }
}

  

