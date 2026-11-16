import { Component } from '@angular/core';
import { Studentservices } from '../../Services/studentservices';
import { IStudents } from '../../models/student';
import { CommonModule } from '@angular/common';
@Component({
  imports: [CommonModule],
  selector: 'app-students-table',
  styleUrl: './students-table.css',
  templateUrl: './students-table.html',
})
export class StudentsTable {



students : IStudents[] = []

constructor(private studentservice: Studentservices) { }

ngOnInit(){
  this.students = this.studentservice.getStudents()
  console.log(this.students)
}
  


}
