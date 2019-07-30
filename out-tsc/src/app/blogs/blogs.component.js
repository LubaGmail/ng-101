import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var BlogsComponent = /** @class */ (function () {
    function BlogsComponent() {
        this.text = 'aaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddd';
    }
    BlogsComponent.prototype.ngOnInit = function () {
    };
    BlogsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-blogs',
            template: "\n    <hr>\n    <h3>Blogs</h3> \n    <div>\n      {{text | summary}}\n    </div>\n  ",
            styleUrls: ['./blogs.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], BlogsComponent);
    return BlogsComponent;
}());
export { BlogsComponent };
//# sourceMappingURL=blogs.component.js.map