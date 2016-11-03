import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ItemService} from './item_services';
import { viewItem } from './view_item';

@Component({
    templateUrl: 'build/pages/contact/navigation-details.html',
})
class NavigationDetailsPage {
    item;
    constructor(params: NavParams) {
        this.item = params.data.item;
        console.log(NavParams);
    }
} 


@Component({
    templateUrl: 'build/pages/contact/contact.html',
    providers: [ItemService]
})
export class ContactPage {
    private items;
    myIcon: string = "ios-arrow-forward";

    constructor(public nav: NavController, private itemService: ItemService) {
        this.itemService.getItems().then(cItems => this.items = cItems);
    }

    openNavDetailsPage(viewItem) {
        this.nav.push(NavigationDetailsPage, { item: viewItem });
    } 
}
