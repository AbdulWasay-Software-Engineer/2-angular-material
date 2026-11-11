import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [MatInputModule,MatFormFieldModule,FormsModule,MatButtonModule],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  task : string = ""

  tasksList : string[] = []

  addTask(){
    this.tasksList.push(this.task)
    this.task = ""

    console.log(this.tasksList)
  }
}
