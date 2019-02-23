import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { CourseListComponent } from "./course-list/course-list.component";
import { FooComponent } from './foo/foo.component';

@NgModule({
  declarations: [AppComponent, CourseListComponent, FooComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
