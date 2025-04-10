import Link from "next/link";

export function Card() {
  return (
    <div className="w-full ">
      <Link href="" className="flex flex-col items-center">
        <div className="w-full flex flex-col cursor-pointer rounded-lg bg-white transition-all duration-200 md:hover:scale-105 hover:shadow-lg">
          <div className="w-full h-[200px] text-center border-b border-gray-300 bg-black rounded-t-lg ">
            {/* <img
              src=""
              className="w-full h-full object-cover rounded-t-[0.5rem] "
              alt="bannner anime"
            /> */}
          </div>
          <div className="w-full h-full flex flex-col py-4 px-6  rounded-b-lg">
            <span className="block font-light py-2 px-0 text-gray-600 text-xs">
              Curso - 42h | 200 aulas
            </span>

            <div className="flex flex-col flex-1">
              <div>
                <h2 className="text-base font-bold text-gray-900 mb-1.5">
                  Nome do curso
                </h2>
                <p className="text-sm text-gray-700 ">Nome do Instrutor</p>
              </div>
              <div className="w-full mt-4 ">
                <div>
                  <div className="bg-green-400 text-xs h-1 font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" />
                  <p className="text-sm mt-1 ">100% concluído</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
