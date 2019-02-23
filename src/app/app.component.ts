import { Component } from "@angular/core";
import { Course, CourseService } from "./core";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  courses: Course[];

  constructor(private courseService: CourseService) {
    this.courses = [];
  }

  ngOnInit() {
    this.courseService
      .list()
      .pipe(tap((courses: Course[]) => (this.courses = courses)))
      .subscribe();
  }
}
