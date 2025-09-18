import { useState } from "react";

import { Filter } from "./filter";

interface IGuitarData {
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

interface GuitarPageProps {
  GuitarData: IGuitarData[];
}
export default function GuitarPage({ GuitarData }: GuitarPageProps) {
  const ITEMS_PER_PAGE: number = 8;
  const [CURRENT_PAGE, setCURRENT_PAGE] = useState(1);
  const START_INDEX = (CURRENT_PAGE - 1) * ITEMS_PER_PAGE;
  const END_INDEX: number = CURRENT_PAGE * ITEMS_PER_PAGE;
  const ITEMS_FOR_CURRENT_PAGE: IGuitarData[] = GuitarData.slice(
    START_INDEX,
    END_INDEX
  );
  const TOTAL_PAGES: number = Math.ceil(GuitarData.length / ITEMS_PER_PAGE);

  return (
    <>
      <div>
        <Filter />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg-grid-cols-4">
          {ITEMS_FOR_CURRENT_PAGE.map((guitar: IGuitarData) => (
            <div key={guitar.id} className="  m-2 p-2 ">
              <img
                src={guitar.image}
                alt=""
                className=" w-30 h-30 md:w-40 md:h-40 lg:w-50 lg:h-50 rounded-xl "
              />
              <h3 className="font-bold text-xl mt-3">{guitar.name}</h3>
              <p className="font-medium text-lg">R{guitar.cost}</p>
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
