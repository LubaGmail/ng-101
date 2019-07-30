import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var TitleCasePipe = /** @class */ (function () {
    function TitleCasePipe() {
    }
    TitleCasePipe.prototype.transform = function (value) {
        if (!value)
            return;
        var words = value.split(' ');
        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            if (i > 0 && this.isPrepos(word)) {
                words[i] = words[i].toLowerCase();
            }
            else {
                words[i] = this.toTitleCase(word);
            }
        }
        return words.join(' ');
    };
    TitleCasePipe.prototype.toTitleCase = function (word) {
        return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
    };
    TitleCasePipe.prototype.isPrepos = function (word) {
        var prepos = ['of', 'the'];
        return prepos.includes(word.toLowerCase());
    };
    TitleCasePipe = tslib_1.__decorate([
        Pipe({
            name: 'titleCase'
        })
    ], TitleCasePipe);
    return TitleCasePipe;
}());
export { TitleCasePipe };
//# sourceMappingURL=title-case.pipe.js.map