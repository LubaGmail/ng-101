import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var SummaryPipe = /** @class */ (function () {
    function SummaryPipe() {
    }
    SummaryPipe.prototype.transform = function (value, args) {
        if (!value)
            return null;
        return value.substr(0, 30) + '...';
    };
    SummaryPipe = tslib_1.__decorate([
        Pipe({
            name: 'summary'
        })
    ], SummaryPipe);
    return SummaryPipe;
}());
export { SummaryPipe };
//# sourceMappingURL=summary.pipe.js.map