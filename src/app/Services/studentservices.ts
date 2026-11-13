import { Service } from '@angular/core';
import { IStudents } from '../models/student';
@Service()
export class Studentservices {
    studentsList : IStudents[] = []

    addStudent(student : IStudents){
        this.studentsList.push(student)
        console.log(this.studentsList)
    }

    getStudents() : IStudents[] {
        return this.studentsList
    }
}
