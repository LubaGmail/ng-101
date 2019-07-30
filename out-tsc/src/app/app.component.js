import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthorsService } from './authors.service';
import { CoursesComponent } from './courses/courses.component';
var AppComponent = /** @class */ (function () {
    function AppComponent(authorsService) {
        this.authors = authorsService.getAuthors();
        var courses = new CoursesComponent();
        this.courses = courses.getCourses();
    }
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthorsService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map