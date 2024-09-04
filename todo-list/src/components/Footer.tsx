import facebbok from "../assets/Facebook.svg";
import instagra from "../assets/Intagrem.png";
import linkedin from "../assets/skill-icons_linkedin.png";
import github from "../assets/Github Square.png";

export const Footer = () => {
  return (
    <>
      <footer className="bg-blue-950 px-10 py-3">
        <div className="text-center">
          <h2 className="text-7xl text-white font-bold my-3">
            Davi Sousa Alves
          </h2>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <div>
            <a href="https://www.instagram.com/daviiisousa18/" target="_blank">
              <img className="w-[75px] " src={instagra} />
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/profile.php?id=100031301692757&locale=pt_BR"
              target="_blank"
            >
              <img className="w-[75px] " src={facebbok} />
            </a>
          </div>
          <div>
            <a href="https://github.com/daviiisousa" target="_blank">
              <img className="w-[75px] bg-white rounded-[50%] " src={github} />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/davi-sousa-alves/" target="_blank">
              <img className="w-[75px] " src={linkedin} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
