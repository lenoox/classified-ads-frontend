import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../../shared/service/item.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ItemsList: any = [];
  constructor(
    private itemService: ItemService
  ) {

  }

  ngOnInit() {
    this.loadItems();
  }
  loadItems() {
    return this.itemService.GetItems().subscribe((data: {}) => {
      this.ItemsList = data;
    })
  }
}
