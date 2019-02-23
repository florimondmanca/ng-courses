import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Course, CourseAdapter } from "./course.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CourseService {
  private baseUrl = "http://localhost:8000/courses";

  constructor(private http: HttpClient, private adapter: CourseAdapter) {}

  list(): Observable<Course[]> {
    const url = `${this.baseUrl}/`;
    return this.http
      .get(url)
      .pipe(map((data: any[]) => data.map(item => this.adapter.adapt(item))));
  }
}
