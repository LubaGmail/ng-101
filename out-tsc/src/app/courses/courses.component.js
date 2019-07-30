import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var CoursesComponent = /** @class */ (function () {
    function CoursesComponent() {
        this.title = 'Courses';
        this.courses = ['Course 1', 'Course 2', 'Course 3'];
    }
    CoursesComponent.prototype.ngOnInit = function () {
    };
    CoursesComponent.prototype.getCourses = function () {
        return this.courses;
    };
    CoursesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-courses',
            template: "\n    <hr />\n    <h3>{{title.length}} {{title}}</h3>\n    <ul>\n      <li *ngFor='let c of courses'>{{c}}</li>\n    </ul>\n    <button class='btn btn-primary'>Save</button>\n  ",
            styleUrls: ['./courses.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CoursesComponent);
    return CoursesComponent;
}());
export { CoursesComponent };
//# sourceMappingURL=courses.component.js.map