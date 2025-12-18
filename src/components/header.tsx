import Navbar from "./navbar";

type HeaderProps = {
  logo: {
    image: string;
    name: string;
  };
  links: string[];
};

function Header({ logo, links }: HeaderProps) {
  const { image, name } = logo;
  return (
    <div className="bg-[#6f6f6f26] rounded-2xl px-6 py-2 flex justify-between items-center my-4">
      <div className="flex items-center gap-1">
        <img src={image} className="w-[60px]" alt="logo" />
        <p className="text-white font-bold text-[20px] uppercase">{name}</p>
      </div>
      <Navbar links={links} />
    </div>
  );
}

export default Header;
