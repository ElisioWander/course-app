import Link from "next/link";

export function Card() {
  return (
    <div>
      <Link href="" className="flex flex-col items-center">
        <div className="w-full flex flex-col border border-gray-300 rounded-lg cursor-pointer bg-white transition-all duration-200 hover:scale-105 hover:shadow-lg">
          <div className="w-full h-[200px] text-center border-b border-gray-300 bg-zinc-300 ">
            {/* <img
              src=""
              className="w-full h-full object-cover rounded-t-[0.5rem] "
              alt="bannner anime"
            /> */}
          </div>
          <div className="w-full h-full flex flex-col py-4 px-6">
            <span className="block py-2 px-0 text-zinc-500 text-sm font-semibold">
              Curso - 42h
            </span>

            <div className="flex flex-col flex-1">
              <div>
                <h2 className="text-[1.3rem] font-bold text-zinc-900 mb-1.5">
                  Curso a distância de Design de Sombrancelhas
                </h2>
                <p className="text-sm text-zinc-500 ">Amanda Ferreira</p>
              </div>
              <div className="w-full pt-4 mt-4 ">
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
