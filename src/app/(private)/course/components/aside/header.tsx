type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <div className="flex pl-3 items-center gap-2 self-stretch">
      <h2 className="w-full text-md md:text-xl text-zinc-900 font-bold">
        {title}
      </h2>
      <button className="hidden md:flex w-fit rounded text-2xl transition-colors ease-in-out duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:select-none cursor-pointer bg-transparent hover:enabled:bg-zinc-100 text-zinc-900 border-none p-[10px] [&_svg]:size-5">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="0"
          width="1em"
          height="1em"
          viewBox="0 0 25 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.8304 17.699L3.93778 17.699"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M21.0615 10.8495H3.93778"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M21.0615 4.42809H3.93778"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M18.6 20L21.0615 17.5384L18.6 15.0769"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
    </div>
  );
}
