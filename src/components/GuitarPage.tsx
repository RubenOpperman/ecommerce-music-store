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
export default function GuitarPage({ GuitarData }: HomeProps) {
  return (
    <>
      <div>
        <div>Search...</div>
        <div>Product categories</div>
        <div>Filter by price</div>
        <div>filter brand</div>
        <div>sorting</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cold-4">
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
        </div>
      </div>
    </>
  );
}
