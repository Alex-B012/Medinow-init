import { not_found_image } from "../assets/assets";
import { navbar_links } from "./links";

export const error404 = {
  title: "Error 404",
  subtitle: "Page not found",
  message: "The address is incorrect or the page does not exist",
  errorBtnHome: {
    url: navbar_links[0].path,
    name: navbar_links[0].name,
  },
  img: not_found_image,
};
