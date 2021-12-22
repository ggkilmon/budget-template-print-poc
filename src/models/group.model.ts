import { FooterModel } from "./footer.model";
import { HeaderModel } from "./header.model";
import { ItemModel } from "./item.model";

export interface GroupModel {
  Header: HeaderModel;
  Items: ItemModel[];
  Footer: FooterModel;
}
