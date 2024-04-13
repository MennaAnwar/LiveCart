import Categories from "../../../img/categories.png";
import Home from "../../../img/Home.png";
import clothes from "../../../img/clothes.png";
import electronics from "../../../img/electronics.png";
import automotive from "../../../img/automotive.png";
import beautyandcare from "../../../img/beautyandhealth.png";
import groceries from "../../../img/groceries.png";

const Data = [
  {
    cat: "Home & Furniture",
    icon: Home,
    subcat: ["Decoration", "Furniture", "Lighting"],
  },
  {
    cat: "Fashion & Accessories",
    icon: clothes,
    subcat: [
      "tops",
      "womens-dresses",
      "womens-shoes",
      "mens-shirts",
      "mens-shoes",
      "mens-watches",
      "womens-watches",
      "womens-bags",
      "womens-jewellery",
      "sunglasses",
    ],
  },
  {
    cat: "Electonics & Mobiles",
    icon: electronics,
    subcat: ["smartphones", "laptops"],
  },
  {
    cat: "Beauty & Fragrance",
    icon: beautyandcare,
    subcat: ["fragrances", "skincare"],
  },
  { cat: "AutoMotive", icon: automotive, subcat: ["automotive", "motorcycle"] },
  { cat: "Groceries", icon: groceries, subcat: ["groceries"] },
];
export default Data;
