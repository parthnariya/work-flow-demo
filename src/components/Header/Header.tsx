import { Auth } from "./Auth";
import { Logo } from "./Logo";

const Header = () => {
  return (
    <header className="py-3 px-4 flex justify-between items-center w-full shrink-0 border-b border-b-primary-dark border-solid">
      <Logo />
      <div>Work Flow</div>
      <Auth />
    </header>
  );
};

export { Header };
