import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IStudents } from '../../models/student';
import { Studentservices } from '../../Services/studentservices';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  imports: [MatFormFieldModule, MatInputModule , FormsModule , MatButtonModule],
  selector: 'app-add-student',
  styleUrl: './add-student.css',
  templateUrl: './add-student.html',
})

export class AddStudent {
  constructor(private studentservice: Studentservices) { }
  student: IStudents = {
    name: "",
    age: 0,
    contact: 12345678912,
    course: ""
  }
  addStudent() {
    this.studentservice.addStudent(this.student)
    this.student = {
      name: "",
      age: 0,
      contact: 12345678912,
      course: ""
    }

  }
}
