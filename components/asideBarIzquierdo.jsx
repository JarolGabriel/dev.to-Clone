import { list, list2 } from "../lib/array";

import ButtonAside from "./buttonAside";

export default function AsideBarIzquierdo({ isOpen, onClose }) {
  return (
    <aside
      className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-40 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } sm:hidden overflow-y-auto`}
      style={{ maxHeight: "100vh" }}
    >
      <nav>
        {/* Contenido del aside menu */}
        <div>
          <div className={` flex space-x-2 mt-5 flex-col sm:ml-20 m-auto`}>
            <div className="mt-10 p-2 flex justify-between mb-3">
              <p className="font-bold">DEV Community</p>
              <i class="bi bi-x-lg cursor-pointer" onClick={onClose}></i>
            </div>
            <div className="flex flex-col sm:ml-20 m-auto border bg-white rounded-lg px-4 py-4">
              <div className="">
                <h1 className="font-bold sm:text-xl text-lg mb-2">
                  DEV Community is a <br /> community of <br />
                  2,070,665 amazing <br />
                  developers
                </h1>
                <p className="text-gray-600 text-sm">
                  Were a place where coders
                  <br /> share, stay up-to-date and
                  <br /> grow their careers.
                </p>
              </div>
              <div className="">
                <ButtonAside
                  style={"flex-col "}
                  style2={"order-2 text-center mt-2"}
                  style3={"order-1 mt-2"}
                />
              </div>
            </div>
            <div>
              {list.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`py-2 px-4 rounded-lg hover:bg-morado-azulado-claro flex w-full hover:text-morado-azulado space-x-2`}
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span className="hover:underline">{item.text}</span>
                </button>
              ))}
            </div>
            <p className="font-bold">other</p>
            <div>
              {list2.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`py-2 px-4 rounded-lg hover:bg-morado-azulado-claro flex w-full hover:text-morado-azulado space-x-2`}
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span className="hover:underline">{item.text}</span>
                </button>
              ))}
            </div>
            <div className="sm:ml-20 m-auto flex text-xl  ">
              <i className="bi bi-twitter-x py-2 px-3 rounded-lg hover:bg-morado-azulado-claro flex hover:text-morado-azulado"></i>
              <i className="bi bi-facebook py-2 px-3 rounded-lg hover:bg-morado-azulado-claro flex hover:text-morado-azulado"></i>
              <i className="bi bi-github py-2 px-3 rounded-lg hover:bg-morado-azulado-claro flex hover:text-morado-azulado"></i>
              <i className="bi bi-instagram py-2 px-3 rounded-lg hover:bg-morado-azulado-claro flex hover:text-morado-azulado"></i>
              <i className="bi bi-twitch py-2 px-3 rounded-lg hover:bg-morado-azulado-claro flex hover:text-morado-azulado"></i>
              <i className="bi bi-mastodon py-2 px-3 rounded-lg hover:bg-morado-azulado-claro flex hover:text-morado-azulado"></i>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}
