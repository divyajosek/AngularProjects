import { Component } from '@angular/core';
import { Employee } from './models/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedEmployee;
  selecteddiv;

  onSelectDiv(val){
  if(val==2)
  this.formView=true;
  
  }
  //Creating Employee
  employees :Array<Employee> = [new Employee('divya',20) , new Employee('jose',25)];
  
  clearSelections(){
    this.employees.forEach(emp => emp.selected=false);
  }

  //On selecting 'view' 
  selectemployee(emp){
    //alert("I am clicked");
    this.clearSelections();
    emp.selected=true;
    this.selectedEmployee=emp;
  }

    /* initialising using constructor */
    newEmployee:Employee = new Employee('',null);
  
    //Add Employee by NgModel 
    addEmployee(){
      this.employees.push(this.newEmployee);
    }

    //Delete Employee by passing index 
    deleteEmployee(index: number){
      this.employees.splice(index, 1);
    }

    clearAddEmployee(){
 
    }

}
