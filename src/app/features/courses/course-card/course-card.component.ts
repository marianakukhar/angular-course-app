import { Component, Input } from '@angular/core';

interface CourseCard {
  title: string;
  description: string;
  creationDate: Date;
  duration: number;
  authors: string[];
}

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})

export class CourseCardComponent {
  @Input() courses: CourseCard[] = [];
  @Input() canEdit: boolean = true;

  public transformHours(course: CourseCard): string {
    const m = course.duration % 60;
    const h = (course.duration-m)/60;
    const HHMM = (h < 10 ? "0" : "") + h.toString() + ":" + ( m < 10 ? "0" : "") + m.toString();
    return HHMM;
  }

}
