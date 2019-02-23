import { Component, OnInit } from "@angular/core";
import { Course } from "../core/course.model";
import { CourseService } from "../core/course.service";

@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.css"]
})
export class CourseListComponent implements OnInit {
  courses: Course[];

  constructor(private courseService: CourseService) {
    this.courses = [];
  }

  ngOnInit() {
    this.courseService.list().subscribe((courses: Course[]) => {
      this.courses = courses;
    });
  }
}
