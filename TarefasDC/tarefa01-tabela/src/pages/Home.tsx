import { BadgePercent, BookHeart, FlaskRound, Package2 } from "lucide-react";
import { Carrossel } from "../components/CarroseuBootstrap";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { NavLink } from "react-router-dom";

export const Home = () => {
    const {remedios} = useContext(FormContext)
  const images = [
    "/src/assets/carroseul/image1.jpg",
    "/src/assets/carroseul/image2.jpg",
    "/src/assets/carroseul/image3.jpg",
  ];
  return (
    <div className="m-5">
        <div>
            <h2 className="bg-red-700 px-5 py-3 rounded-md w-[500px] text-3xl text-red-100">{`Temos ${remedios.length} remedios disponiveis`}</h2>
            <NavLink to={'/remedios'}>
                <button className="bg-blue-500 px-5 py-3 rounded-md text-xl my-3 text-white">Adicionar remedio</button>
            </NavLink>
        </div>
      <div className=" grid grid-cols-2">
        <div>
          <h2 className="m-3 text-4xl font-bold text-red-600">
            Caps novidades
          </h2>
          <Carrossel images={images} />
        </div>
        <div>
          <h2 className="m-3 text-4xl font-bold text-red-600">Seus planos</h2>
          <div className="flex justify-around">
            <div className="space-y-2 border-gray-200 border-2 p-2 rounded-md">
                <BookHeart className="text-green-600" />
              <h1 className="text-green-600 font-bold">Plano de saude</h1>
              <p className="text-slate-500">ative e receba</p>
              <p className="text-slate-500">descontos exclusivos</p>
              <div className="col-span-1 bg-green-500 w-30 h-1"></div>
            </div>
            <div className="space-y-2 border-gray-200 border-2 p-2 rounded-md">
                <BadgePercent  className="text-orange-600" />
              <h1 className="text-orange-600 font-bold">Desconto</h1>
              <p className="text-slate-500">ative e receba</p>
              <p className="text-slate-500">descontos exclusivos</p>
              <div className="col-span-1 bg-orange-500 w-30 h-1"></div>
            </div>
            <div className="space-y-2 border-gray-200 border-2 p-2 rounded-md">
                <FlaskRound  className="text-amber-800" />
              <h1 className="text-amber-800 font-bold">Laboratoio</h1>
              <p className="text-slate-500">ative e receba</p>
              <p className="text-slate-500">descontos exclusivos</p>
              <div className="col-span-1 bg-amber-800 w-30 h-1"></div>
            </div>
            <div className="space-y-2 border-gray-200 border-2 p-2 rounded-md">
                <Package2  className="text-purple-600" />
              <h1 className="text-purple-600 font-bold">Espaço sua saude</h1>
              <p className="text-slate-500">ative e receba</p>
              <p className="text-slate-500">descontos exclusivos</p>
              <div className="col-span-1 bg-purple-500 w-30 h-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
