import Image from "next/image";

const CarDetailsPage = async (props: any) => {
  const res = await fetch(
    `https://0915ef4e-862d-4055-943f-303ac199da3d.mock.pstmn.io/cars/${props.params.carId}`
  );
  const { data } = await res.json();
  console.log(data);

  return (
    <div>
      <h2>CarDetailsPage</h2>
      <Image
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={data[0].image}
        width={450}
        height={450}
      />
    </div>
  );
};

export async function generateStaticParams() {
  const res = await fetch(
    "https://0915ef4e-862d-4055-943f-303ac199da3d.mock.pstmn.io/cars"
  );
  const { data } = await res.json();

  return data?.map((item: any) => ({
    carId: item.id.toString(),
  }));
}

export default CarDetailsPage;
