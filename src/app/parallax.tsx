"use client";
import { ParallaxBanner } from "react-scroll-parallax";

const Banner = ({
  img,
  className = "",
  size = "aspect-[5/1]",
  speed = -20,
}: {
  img: string;
  className?: string;
  size?: string;
  speed?: number;
}) => {
  return (
    <ParallaxBanner
      layers={[{ image: img, speed: speed }]}
      className={`${size} ${className}`}
    />
  );
};

export default Banner;
