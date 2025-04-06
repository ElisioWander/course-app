type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <div className="pl-3 items-center self-stretch">
      <h2 className="w-full text-md md:text-xl text-zinc-900 font-bold">
        {title}
      </h2>
    </div>
  );
}
