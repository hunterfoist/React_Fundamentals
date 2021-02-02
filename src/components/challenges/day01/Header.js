import { Navbar, NavbarBrand, Nav, NavItem, NavLink} from "reactstrap";

const Header = () => {
    return(
        <header>
            <Navbar className="header">
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="https://github.com/hunterfoist/react_fundamentals"></NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    )
}

export default Header;