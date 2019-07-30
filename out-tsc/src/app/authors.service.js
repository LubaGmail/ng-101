import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var AuthorsService = /** @class */ (function () {
    function AuthorsService() {
        var _this = this;
        this.authors = ['Author 1', 'Author2', 'Author3'];
        this.getAuthors = function () {
            return _this.authors;
        };
    }
    AuthorsService.ngInjectableDef = i0.defineInjectable({ factory: function AuthorsService_Factory() { return new AuthorsService(); }, token: AuthorsService, providedIn: "root" });
    AuthorsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AuthorsService);
    return AuthorsService;
}());
export { AuthorsService };
//# sourceMappingURL=authors.service.js.map