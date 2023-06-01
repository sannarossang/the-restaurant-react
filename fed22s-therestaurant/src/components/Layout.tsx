import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { ContentWrapper } from "./styled/Layout";

export const Layout = () => {
  return (
    <>
      <ContentWrapper>
        <header>
          <Navbar></Navbar>
        </header>
        <main>
          <Outlet></Outlet>
        </main>
        <footer></footer>
      </ContentWrapper>
    </>
  );
};
