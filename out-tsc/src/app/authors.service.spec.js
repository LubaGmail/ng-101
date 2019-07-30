import { TestBed } from '@angular/core/testing';
import { AuthorsService } from './authors.service';
describe('AuthorsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(AuthorsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=authors.service.spec.js.map