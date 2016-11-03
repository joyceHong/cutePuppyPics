import { viewItem } from './view_item';
import {Injectable} from '@angular/core';

@Injectable()
export class ItemService {
    getItems() {
        var viewItems: viewItem[]=[
            { title: "kitty", image: "a1.jpg", name: "sample kitty. 1991" },
            { title: "monkey", image: "a2.jpg", name: "monkey wang. 2001" },
            { title: "oneDay", image: "a3.jpg", name: "example td 2002" },
            { title: "ted", image: "a1.jpg", name: "nana hung 2012" },
            { title: "ted", image: "a4.jpg", name: "xxx hung 2012" },
            { title: "ted", image: "a2.jpg", name: "yyy hung 2012" },
            { title: "ted", image: "a3.jpg", name: "zzz hung 2012" },
            { title: "ted", image: "a4.jpg", name: "ffff hung 2012" },
            { title: "ted", image: "a1.jpg", name: "gg hung 2012" },
            { title: "ted", image: "a4.jpg", name: "hhh hung 2012" },
            { title: "ted", image: "a2.jpg", name: "ii hung 2012" },
            { title: "ted", image: "a3.jpg", name: "jj hung 2012" },
            { title: "ted", image: "a4.jpg", name: "mmm hung 2012" },
            { title: "ted", image: "a1.jpg", name: "nn hung 2012" }
        ];
        return Promise.resolve(viewItems);
    }
}