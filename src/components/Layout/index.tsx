import { Toaster } from "react-hot-toast";
import { FC } from "react";
import { BiSolidPyramid } from "react-icons/bi";
import { IconContext } from "react-icons";

interface ILayoutProps {
  children: JSX.Element;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <section className="relative bg-gradient-to-b from-[#2a3958] to-[#041530]">
      <Toaster />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-[#041530] rounded-lg shadow border border-[#5c729f] md:mt-0 sm:max-w-md text-white  shadow-2xl">
          <div className="p-8 space-y-4 md:space-y-6">
            <div className="flex items-center justify-center">
              <div className="mr-4">
                <IconContext.Provider value={{ size: "2em" }}>
                  <BiSolidPyramid />
                </IconContext.Provider>
              </div>
              <h1 className="text-5xl font-bold leading-tight tracking-tight pl-4 border-l border-white">
                MLK
                <span className="font-light"> Kilimanjaro</span>
              </h1>
            </div>
            <div className="px-8">{children}</div>
          </div>
        </div>
      </div>
      <div className="text-xs absolute bottom-4 left-4 text-white font-light">
        &#169; {new Date().getFullYear()} My Life Kit
      </div>
    </section>
  );
};

export default Layout;
