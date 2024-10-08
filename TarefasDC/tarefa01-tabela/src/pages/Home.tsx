import { BadgePercent, BookHeart, FlaskRound, Package2 } from "lucide-react";
import { Carrossel } from "../components/CarroseuBootstrap";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { NavLink } from "react-router-dom";
import umificador from "../assets/produtos/umificador.webp";
import protetor from "../assets/produtos/protetor.webp";
import creme from "../assets/produtos/creme.webp";
import desodorante from "../assets/produtos/desodorante.webp";
import anuncio1 from '../assets/anuncios/anuncio1.jpeg'
import anuncio2 from '../assets/anuncios/anuncio2.png'
import anuncio3 from '../assets/anuncios/anuncio3.png'

export const Home = () => {
  const { remedios } = useContext(FormContext);

  const images = [
    "/src/assets/carroseul/image1.jpg",
    "/src/assets/carroseul/image2.jpg",
    "/src/assets/carroseul/image3.jpg",
  ];
  return (
    <div className="m-5">
      <div>
        <h2 className="bg-red-700 px-5 py-3 rounded-md w-[500px] text-3xl text-red-100">{`Temos ${remedios.length} remédios disponiveis`}</h2>
        <NavLink to={"/remedios"}>
          <button className="bg-blue-500 px-5 py-3 rounded-md text-xl my-3 text-white">
            Adicionar remedio
          </button>
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
              <BadgePercent className="text-orange-600" />
              <h1 className="text-orange-600 font-bold">Desconto</h1>
              <p className="text-slate-500">ative e receba</p>
              <p className="text-slate-500">descontos exclusivos</p>
              <div className="col-span-1 bg-orange-500 w-30 h-1"></div>
            </div>
            <div className="space-y-2 border-gray-200 border-2 p-2 rounded-md">
              <FlaskRound className="text-amber-800" />
              <h1 className="text-amber-800 font-bold">Laboratório</h1>
              <p className="text-slate-500">ative e receba</p>
              <p className="text-slate-500">descontos exclusivos</p>
              <div className="col-span-1 bg-amber-800 w-30 h-1"></div>
            </div>
            <div className="space-y-2 border-gray-200 border-2 p-2 rounded-md">
              <Package2 className="text-purple-600" />
              <h1 className="text-purple-600 font-bold">Espaço sua saude</h1>
              <p className="text-slate-500">ative e receba</p>
              <p className="text-slate-500">descontos exclusivos</p>
              <div className="col-span-1 bg-purple-500 w-30 h-1"></div>
            </div>
          </div>

          <div className="mx-2">
            <h2 className="text-4xl text-red-600 my-3 font-bold">
              nossos produtos
            </h2>
            <div className="flex justify-around gap-3">
              <div className="border-gray-200 border-2 rounded-md p-2">
                <img src={desodorante} alt="desodorante" />
                <h2 className="text-center font-semibold">Desodorante DOVE</h2>
                <div className="border-slate-600 border-2 h-[1px] w-[100%]"></div>
                <p className="p-2 font-bold">R$14,99</p>
                <button className="px-3 py-2 border-2 text-blue-500 border-blue-400 w-[100%] hover:bg-blue-400 hover:text-white transition-all">
                  Consultar
                </button>
              </div>
              <div className="border-gray-200 border-2 rounded-md p-2">
                <img src={umificador} alt="umificador" />
                <h2 className="text-center font-semibold">Humificador</h2>
                <div className="border-slate-600 border-2 h-[1px] w-[100%]"></div>
                <p className="p-2 font-bold">R$170,00</p>
                <button className="px-3 py-2 border-2 text-blue-500 border-blue-400 w-[100%]  hover:bg-blue-400 hover:text-white transition-all">
                  Consultar
                </button>
              </div>
              <div className="border-gray-200 border-2 rounded-md p-2">
                <img src={protetor} alt="protetor" />
                <h2 className="text-center font-semibold">
                  Kit Protetor Solar
                </h2>
                <div className="border-slate-600 border-2 h-[1px] w-[100%]"></div>
                <p className="p-2 font-bold">R$110,00</p>
                <button className="px-3 py-2 border-2 text-blue-500 border-blue-400 w-[100%]  hover:bg-blue-400 hover:text-white transition-all">
                  Consultar
                </button>
              </div>
              <div className="border-gray-200 border-2 rounded-md p-2">
                <img src={creme} alt="creme" />
                <h2 className="text-center font-semibold">Creme Hidratante</h2>
                <div className="border-slate-600 border-2 h-[1px] w-[100%]"></div>
                <p className="p-2 font-bold">R$50,00</p>
                <button className="px-3 py-2 border-2 text-blue-500 border-blue-400 w-[100%]  hover:bg-blue-400 hover:text-white transition-all">
                  Consultar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex my-4 gap-5 col-span-2  justify-evenly">
          <div><img src={anuncio1} alt="" /></div>
          <div><img src={anuncio2} alt="" /></div>
          <div><img src={anuncio3} alt="" /></div>
        </div>
      </div>
    </div>
  );
};
