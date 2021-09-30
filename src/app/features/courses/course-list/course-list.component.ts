import { Component, EventEmitter, Input,  Output } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  @Input() canEdit: boolean;
  @Output() showCourseEvent = new EventEmitter<string>();

  showCourse (value: any) {
    this.showCourseEvent.emit(value);
  }

  public courses = [
    {
      title: 'Angular',
      description: "Lorem ipsum",
      creationDate: new Date('December 17, 1995 03:24:00'),
      duration: 121,
      authors: ['R. Jameson', 'J. Campbell']
    },
    {
      title: 'ReactJS',
      description: "Lorem ipsum",
      creationDate: new Date('December 20, 1995 03:24:00'),
      duration: 90,
      authors: ['J. Dawson', 'S. Black']
    }
  ]

}
