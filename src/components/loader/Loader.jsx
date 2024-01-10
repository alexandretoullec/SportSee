import { Audio } from "react-loader-spinner";
import "./loader.scss";

const Loader = () => {
  return (
    <div className="loader_container">
      <Audio
        height="200"
        width="200"
        radius="9"
        color="red"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

export default Loader;
