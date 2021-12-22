import { Component, Input, OnInit } from "@angular/core";
import { FooterModel } from "src/models/footer.model";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.less"],
})
export class FooterComponent implements OnInit {
  @Input() footer: FooterModel;
  @Input() page: number;

  constructor() {}

  ngOnInit() {
    //this.footer.Page = this.page;
    console.log(this.page);
  }
}
