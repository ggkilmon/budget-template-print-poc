import { Component, OnInit } from "@angular/core";
import { FooterModel } from "src/models/footer.model";
import { GroupModel } from "src/models/group.model";
import { HeaderModel } from "src/models/header.model";
import { ItemModel } from "src/models/item.model";
import { PageModel } from "src/models/page.model";
import _ from "lodash";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent implements OnInit {
  title = "budget-template-print-poc";
  groups: GroupModel[] = [];
  items: ItemModel[] = [];
  headers: HeaderModel[] = [];
  footers: FooterModel[] = [];

  pages: PageModel[] = [];

  async ngOnInit() {
    for (let g = 0; g < 5; g++) {
      const header = {
        Name: "Group " + g,
        LogoUrl: "/assets/herman miller.svg",
      };

      const footer = {
        Date: new Date(),
        Page: 1,
        Name: "Group " + g,
      };

      let groupItems = [];
      for (let i = 0; i < 27; i++) {
        groupItems.push({
          Name: "Item " + i,
          Price: 123.45,
          Description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed neque sed lacus porta malesuada a a risus. Duis lobortis laoreet ex semper consequat. Suspendisse pulvinar magna lacinia pellentesque vestibulum. Duis nulla justo, bibendum vitae ex sed, blandit varius risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id arcu vel quam ullamcorper condimentum vitae at enim. Vivamus sit amet accumsan justo. Nunc nec sem porttitor diam viverra rutrum. Nulla sollicitudin augue quis pharetra fermentum. Proin tincidunt dolor nec justo scelerisque, a venenatis quam maximus. Ut sit amet suscipit erat. Nam justo erat, aliquam eget feugiat sit amet, consequat ut lacus. Ut posuere posuere nunc. Donec in justo in eros sollicitudin gravida quis et ex. Curabitur malesuada ligula ac dui gravida vehicula id vel justo. Quisque dignissim, est in volutpat pulvinar, mauris lacus volutpat elit, cursus laoreet est quam a massa.",
          ImageUrl: "/assets/cosm.jpg",
        });
      }

      this.groups.push({ Header: header, Items: groupItems, Footer: footer });
      await new Promise((f) => setTimeout(f, 100));
    }

    const MAX_ITEMS_PER_PAGE = 6;
    let pageNumber = 0;
    for (let i = 0; i < this.groups.length; i++) {
      const group = this.groups[i];
      let page = this.getNewPage(group, ++pageNumber);
      for (let j = 0; j < group.Items.length; j++) {
        const item = group.Items[j];
        if (j > 0 && j % MAX_ITEMS_PER_PAGE === 0) {
          //create new page
          this.pushPage(page);
          page = this.getNewPage(group, ++pageNumber);
        }
        page.Items.push(item);
      }
      this.pushPage(page);
    }
  }

  getNewPage(group: GroupModel, page: number): PageModel {
    const footer = _.clone(group.Footer);
    footer.Page = page;
    return {
      Header: _.clone(group.Header),
      Footer: footer,
      Items: [],
      HasBeenPushed: false,
    } as PageModel;
  }

  pushPage(page: PageModel) {
    if (!page.HasBeenPushed) {
      page.HasBeenPushed = true;
      this.pages.push(page);
    }
  }

  async print() {
    window.print();
  }
}
