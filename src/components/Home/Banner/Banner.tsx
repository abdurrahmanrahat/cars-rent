import img from "@/asserts/hero-car.svg";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import BannerButton from "./BannerButton";

const Banner = () => {
  return (
    <Card className="py-4 flex" shadow="none">
      <CardBody className="overflow-visible py-2 ">
        <div className="flex items-center justify-between">
          {/* content */}
          <div className="w-2/5">
            <h1 className="text-6xl font-bold mb-2 text-default-900">
              Explore the Finest <span className="text-red-500">Global</span>{" "}
              Offers
            </h1>
            <h4 className=" text-xl text-gray-500 my-4">
              Find your ideal ride for any adventure with our diverse range of
              affordable and dependable car rentals
            </h4>
            <BannerButton />
          </div>

          {/* car photo with animation */}
          {/* <MotionCar /> */}
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={img}
            width={750}
            height={750}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default Banner;
