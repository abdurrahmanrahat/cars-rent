import { Card, CardHeader } from "@nextui-org/react";
import Image from "next/image";

const CarsPage = async () => {
  const res = await fetch(
    "https://26d62fae-d7ca-430f-bf63-35e2cb44772a.mock.pstmn.io/cars"
  );
  const { data } = await res.json();
  console.log(data);

  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      {data?.map((item) => (
        <Card
          key={item.id}
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              {item.model}
            </p>
            <h4 className="text-white/90 font-medium text-xl">{item.name}</h4>
          </CardHeader>
          <Image
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src={item.image}
            width={450}
            height={450}
          />
        </Card>
      ))}
    </div>
  );
};

export default CarsPage;
