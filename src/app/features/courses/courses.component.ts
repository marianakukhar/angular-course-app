import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent {
  public buttonText = 'Logout';
  public icon = 'fas fa-sign-out-alt';
  public title = 'Your list is empty';
  public infoText = 'Please use the "Add new course" button to add your first course';
  public addNewCourseButton = 'Add new course';
  public canEdit = true;
  public showModalWindow = false;
  public buttonsText = ['Ok', 'Cancel'];

  public showCourse(course: any) {
    console.log(course);
  }

  public onShowModalWindow(): void {
    this.showModalWindow = !this.showModalWindow;
  }

  public logModalResult(result: boolean): void {
    console.log(result);
    this.onShowModalWindow();
  }
}
