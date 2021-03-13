import { Component } from '@angular/core';
import { from } from 'rxjs';
import { User } from './app.employee';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Example';
  userModel = new User('manasvi',101,'manasvi@gmail.com',12000, 7709736542);

  constructor(private _enrollmentService : EnrollmentService){}
  onSubmit(){
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log("success",data),
      error => console.error('Error!', error)
    )
    
  }
}
