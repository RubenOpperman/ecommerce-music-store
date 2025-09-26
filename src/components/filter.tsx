import { FaSearch } from "react-icons/fa";

export function Filter({
  setSearchFilter,
}: {
  setSearchFilter: (value: string) => void;
}) {
  return (
    <>
      <div className=" py-10 px-5 flex justify-around items-center">
        <div className="shadow-[0_4px_6px_-1px_rgba(0,0,0,0.6)] rounded-md w-[25vw] flex m-5">
          <input
            type="text"
            placeholder="Product"
            className="w-[25vw] py-2 px-4 rounded-md"
            onChange={(e) => {
              setSearchFilter(e.target.value);
            }}
          />
          <button
            type="button"
            className="py-2 px-5 m-1 bg-black text-white rounded-md cursor-pointer"
          >
            <FaSearch />
          </button>
        </div>

        <div className=" gap-3">
          <h3>Filter Price range:</h3>
        </div>

        <div className="flex gap-3">
          <label htmlFor="brands">Filter by brand</label>
          <select
            className=" border-2 border-red-500 rounded-sm"
            name="brands"
            id="brands"
          >
            <option value="">NONE</option>
            <option value="Fender">Fender</option>
            <option value="Gibson">Gibson</option>
            <option value="Epiphone">Epiphone</option>
            <option value="PRS">PRS</option>
            <option value="Taylor">Taylor</option>
            <option value="Yamaha">Yamaha</option>
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
    </>
  );
}
