import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface IDrumData {
  id: number;
  category: string;
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

interface DrumPageProps {
  DrumData: IDrumData[];
}
export default function DrumPage({ DrumData }: DrumPageProps) {
  const ITEMS_PER_PAGE: number = 8;
  const [CURRENT_PAGE, setCURRENT_PAGE] = useState(1);
  const START_INDEX = (CURRENT_PAGE - 1) * ITEMS_PER_PAGE;
  const END_INDEX: number = CURRENT_PAGE * ITEMS_PER_PAGE;
  const ITEMS_FOR_CURRENT_PAGE: IDrumData[] = DrumData.slice(
    START_INDEX,
    END_INDEX
  );
  const TOTAL_PAGES: number = Math.ceil(DrumData.length / ITEMS_PER_PAGE);

  return (
    <>
      <div>
        <div className=" py-10 px-5 flex justify-around items-center">
          <div className="shadow-[0_4px_6px_-1px_rgba(0,0,0,0.6)] rounded-md w-[25vw] flex m-5">
            <input
              type="text"
              placeholder="Product"
              className="w-[25vw] py-2 px-4 rounded-md"
            />
            <button
              type="button"
              className="py-2 px-5 m-1 bg-black text-white rounded-md cursor-pointer"
            >
              <FaSearch />
            </button>
          </div>

          <div className="flex gap-3">
            <h3>Filter Price range:</h3>
            <input className="accent-red-500" min="0" max="100" type="range" />
          </div>

          <div className="flex gap-3">
            <label htmlFor="brands">Filter by brand</label>
            <select
              className=" border-2 border-red-500  rounded-sm"
              name="brands"
              id="brands"
            >
              <option value="">NONE</option>
              <option value="Pearl">Pearl</option>
              <option value="Tama">Tama</option>
              <option value="Ludwig">Ludwig</option>
              <option value="Roland">Roland</option>
              <option value="Mapex">Mapex</option>
              <option value="Yamaha">Yamaha</option>
              <option value="Gretsch">Gretsch</option>
            </select>
          </div>

          <div className="flex gap-3">
            <label htmlFor="filter">Sort</label>
            <select
              className=" border-2 border-red-500 rounded-sm"
              name="filter"
              id="filter"
            >
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg-grid-cols-4">
          {ITEMS_FOR_CURRENT_PAGE.map((drum: IDrumData) => (
            <div key={drum.id} className="  m-2 p-2 ">
              <img
                src={drum.image}
                alt=""
                className=" w-30 h-30 md:w-40 md:h-40 lg:w-50 lg:h-50 rounded-xl "
              />
              <h3 className="font-bold text-xl mt-3">{drum.name}</h3>
              <p className="font-medium text-lg">R{drum.cost}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-5">
          <button
            disabled={CURRENT_PAGE - 1 == 0}
            onClick={() => {
              setCURRENT_PAGE(CURRENT_PAGE - 1);
            }}
            className="border-2 border-black py-2 px-4 rounded-lg mx-5 "
          >
            Prev
          </button>

          <p>
            Page {CURRENT_PAGE} of Page {TOTAL_PAGES}
          </p>
          <button
            disabled={CURRENT_PAGE == TOTAL_PAGES}
            onClick={() => {
              setCURRENT_PAGE(CURRENT_PAGE + 1);
            }}
            className="border-2 border-black py-2 px-4 rounded-lg mx-5"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
