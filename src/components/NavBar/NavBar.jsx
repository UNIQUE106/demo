import Logo from "./Logo"
import Menu from "./Menu"
import CartAndSignUp from "./CartAndSignUp"

function NavBar({ cartIsClicked, setCartIsClicked, openCart, cartLength }) {
  return (
    <header className="relative flex justify-between px-5 py-5 items-center md:fixed md:w-full backdrop-blur-lg bg-[rgba(255, 255, 255, 0.37)] border-b-[1px] border-[rgba(255, 255, 255, 0.83)] z-50">
      <Logo />
      <Menu />
      <CartAndSignUp cartIsClicked={cartIsClicked} setCartIsClicked={setCartIsClicked} openCart={openCart} cartLength={cartLength}/>
    </header>
  );
}

export default NavBar;
