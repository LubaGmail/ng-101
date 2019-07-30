import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var FavoriteComponent = /** @class */ (function () {
    function FavoriteComponent() {
        this.isFav = false;
        this.title = '';
    }
    FavoriteComponent.prototype.ngOnInit = function () {
    };
    FavoriteComponent.prototype.onClick = function () {
        this.isFav = !this.isFav;
    };
    FavoriteComponent = tslib_1.__decorate([
        Component({
            selector: 'app-favorite',
            templateUrl: './favorite.component.html',
            styleUrls: ['./favorite.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FavoriteComponent);
    return FavoriteComponent;
}());
export { FavoriteComponent };
//# sourceMappingURL=favorite.component.js.map