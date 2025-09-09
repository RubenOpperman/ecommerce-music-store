import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface IGuitarData {
  id: number;
  name: string;
  image: string;
  cost: number;
  availability: boolean;
  amountInStock: number;
  amountBought: number;
  dateAdded: string;
  brand: string;
}
[];

interface HomeProps {
  GuitarData: IGuitarData;
}

export default function Home({ GuitarData }: HomeProps) {
  return (
    <>
      <div>
        <div className="">
          <img
            className="h-100 w-full  object-cover object-middle"
            src="/StockCake-Guitar store display_1756638830.jpg"
            alt="wall of guitars background"
          />
        </div>
        <div className=" p-2 ">
          <h1 className="flex justify-center my-5 text-4xl font-medium">
            Just Arrived
          </h1>
          <Carousel
            responsive={responsive}
            showDots={true}
            infinite={true}
            transitionDuration={500}
            arrows={true}
          >
            {GuitarData.slice(0, 8).map((guitar: IGuitarData) => (
              <div key={guitar.id} className=" place-items-center m-2 p-2 ">
                <img
                  src={guitar.image}
                  alt=""
                  className=" w-30 h-30 md:w-40 md:h-40 lg:w-50 lg:h-50 rounded-xl "
                />
                <h3 className="font-bold text-xl mt-3">{guitar.name}</h3>
                <p className="font-medium text-lg">R{guitar.cost}</p>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="flex justify-center my-10  ">
          <div className="shadow-[0_4px_6px_-1px_rgba(0,0,0,0.6)] rounded-md">
            <input
              type="text"
              placeholder="Product"
              className="w-[25vw] py-2 px-4 rounded-md"
            />
            <button
              type="button"
              className="py-2 px-5 m-1 bg-black text-white rounded-md cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>
        <div>
          <h1>all brands</h1>
        </div>
      </div>
    </>
  );
}
