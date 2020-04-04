import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../../shared/service/item.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  ItemList: any = [];
  constructor(private itemService: ItemService,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.loadItem();
  }
  loadItem() {
    const id = +this.route.snapshot.params['id'];

    return this.itemService.GetItem(id).subscribe((data: {}) => {
      this.ItemList = data;
    });
  }
}
