import { Injectable } from "@angular/core";

export class Course {
  constructor(
    public id: number,
    public code: string,
    public name: string,
    public created: Date
  ) {}
}

@Injectable({
  providedIn: "root"
})
export class CourseAdapter {
  adapt(item: any): Course {
    return new Course(item.id, item.code, item.name, new Date(item.created));
  }
}
