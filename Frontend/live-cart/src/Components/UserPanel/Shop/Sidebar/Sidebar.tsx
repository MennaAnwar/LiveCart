import { FC } from "react";
import "./Sidebar.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import items from "../../Categories/CategoriesData";

const Sidebar: FC = () => {
  return (
    <div className="sidebar col-lg-3 skeleton-body skel-shop-products pb-lg-3 undefined loaded  order-lg-first">
      <Accordion allowMultipleExpanded>
        {items.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>{item.cat}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul className="tree">
                {item.subcat.map((subitem, index) => (
                  <li>{subitem}</li>
                ))}
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Sidebar;
