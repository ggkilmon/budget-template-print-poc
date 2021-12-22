import { Component, Input, OnInit } from "@angular/core";
import { ItemModel } from "src/models/item.model";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.less"],
})
export class ItemComponent implements OnInit {
  @Input() item: ItemModel;

  constructor() {}

  ngOnInit() {}
}
