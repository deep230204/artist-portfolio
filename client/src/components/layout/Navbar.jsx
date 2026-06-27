import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Button from "../common/Button";
import Container from "../common/Container";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <Logo />

          <NavLinks />

          <Button>Book Show</Button>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;