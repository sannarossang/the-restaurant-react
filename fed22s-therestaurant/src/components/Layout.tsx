import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { ContentWrapper } from "./styled/Layout";
import { useEffect, useState } from "react";

export const Layout = () => {
  const [filter, setFilter] = useState("");
  const location = useLocation();

  useEffect(() => {
    const checkLocation = () => {
      if (location.pathname === "/") setFilter("grayscale(100%)");
      if (location.pathname === "/booking")
        setFilter(`grayscale(100%) brightness(20%)`);
    };

    checkLocation();
  }, [location]);

  console.log(filter);

  return (
    <>
      <ContentWrapper
        className={location.pathname === "/" || "/booking" ? "home" : ""}
        filter={filter}
      >
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
