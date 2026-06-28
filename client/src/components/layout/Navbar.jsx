import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Button from "../common/Button";
import Container from "../common/Container";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <Container>
        <nav className="flex h-24 items-center justify-between">

          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <NavLinks />

          {/* CTA */}
          <div className="hidden lg:block">
            <Button>Book Show</Button>
          </div>

        </nav>
      </Container>
    </header>
  );
};

export default Navbar;