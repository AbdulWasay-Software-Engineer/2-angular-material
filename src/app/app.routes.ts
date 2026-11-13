import { HOME } from '@angular/cdk/keycodes';
import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { About } from './component/about/about';
import { AddStudent } from './component/add-student/add-student';

export const routes: Routes = [
    {
        path : "",
        component : Home
    },
    {
        path : "about",
        component : About
    },
        {
        path : "add-stu",
        component : AddStudent
    }
];
