import {beforeEachProviders, it, describe, expect, inject} from '@angular/core/testing';
import {ItemService} from "./pages/contact/item_services";

describe('1 test ItemService return', () => {
    beforeEachProviders(()  => [ItemService]);
    it('should return kitty', inject([ItemService], (mockItem) => {
        let result = mockItem.getItems();
        expect(result.__zone_symbol__value[0].title).toEqual("kitty");
    }
    ));
});
