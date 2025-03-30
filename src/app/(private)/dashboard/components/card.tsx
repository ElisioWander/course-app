import Link from "next/link";

export function Card() {
  return (
    <div>
      <Link href="" className="flex flex-col items-center">
        <div className="w-full border border-gray-300 rounded-lg cursor-pointer bg-white transition-all duration-200 hover:scale-105">
          <div className="w-full h-[200px] text-center border-b border-gray-300 bg-zinc-300 ">
            <img
              src=""
              className="w-full h-full object-cover rounded-t-[0.5rem] "
              alt="bannner anime"
            />
          </div>
          <div className="w-full h-[300px] py-4 px-6">
            <span className="block py-2 px-0 text-zinc-500 text-sm font-semibold">
              Curso - 42h
            </span>

            <div className="flex flex-col items-center justify-between h-[80%] ">
              <h2 className="text-2xl text-zinc-700 ">
                Segunda temporada de Youkoso Jitsuryouku ganha teaser com OP e
                número de episódios
              </h2>
              <div className="w-full pt-4">
                <span className="text-[0.8rem] font-semibold text-zinc-500">
                  02/04/2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
