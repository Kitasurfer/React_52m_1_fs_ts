import {
  LayoutComponent,
  Header,
  NavContainer,
  LogoContainer,
  Main,
  Footer,
  StyledNavLink,
} from "./styles";

import { useNavigate } from "react-router-dom";
import { LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  return (
    <LayoutComponent>
      <Header>
        <LogoContainer onClick={() => navigate("/")}></LogoContainer>
        <NavContainer>
          <StyledNavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            to="/about"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            About
          </StyledNavLink>
          <StyledNavLink
            to="/users"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Users
          </StyledNavLink>
          <StyledNavLink
            to="/clients"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Clients
          </StyledNavLink>
					<StyledNavLink
            to="/Lesson14"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Lesson14
          </StyledNavLink>
					<StyledNavLink
            to="/Homework14"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Homework14
          </StyledNavLink>
					
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <LogoContainer onClick={() => navigate("/")}></LogoContainer>
      </Footer>
    </LayoutComponent>
  );
}

export default Layout;
