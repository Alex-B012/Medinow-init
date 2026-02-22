import { error404 } from "../../data/error";
import ErrorText from "./ErrorText";

import MoreBtn from "../../components/Btns/MoreBtn";
import ErrorImg from "./ErrorImg";

function NotFound() {
  return (
    <div className="not-found flex flex-col justify-center items-center text-center min-h-[70vh]">
      <ErrorImg img={error404.img} />
      <ErrorText data={error404} />
      <MoreBtn
        text={error404.errorBtnHome.name}
        url={error404.errorBtnHome.url}
      />
    </div>
  );
}

export default NotFound;
