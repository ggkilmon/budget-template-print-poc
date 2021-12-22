import { Component, Input, OnInit } from "@angular/core";
import { HeaderModel } from "src/models/header.model";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.less"],
})
export class HeaderComponent implements OnInit {
  @Input() header: HeaderModel;

  constructor() {}

  ngOnInit() {}
}
