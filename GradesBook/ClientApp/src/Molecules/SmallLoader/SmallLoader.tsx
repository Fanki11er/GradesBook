import { SmallLoaderImg, SmallLoaderWrapper } from "./SmallLoader.styles";
import EarthSvg from "../../Assets/Images/Earth.svg";

const SmallLoader = () => {
  return (
    <SmallLoaderWrapper>
      <SmallLoaderImg src={EarthSvg} alt={"Obrazek łądowania"} />
    </SmallLoaderWrapper>
  );
};

export default SmallLoader;
