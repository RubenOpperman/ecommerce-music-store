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
        <div className="grid grid-cols-4 p-2 ">
          {GuitarData.map((guitar: IGuitarData) => (
            <div key={guitar.id} className="">
              <img src={guitar.image} alt="" className="w-50 rounded-2xl" />
              <h3>{guitar.name}</h3>
              <p>R{guitar.cost}</p>
            </div>
          ))}
        </div>
        <div>
          <h1>search bar </h1>
        </div>
        <div>
          <h1>all brands</h1>
        </div>
      </div>
    </>
  );
}
