import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { ContentWrapper } from "./styled/Layout";
import { useEffect, useState } from "react";

export const Layout = () => {
  const [filter, setFilter] = useState("");
  const [filteredClass, setFilteredClass] = useState("");
  const location = useLocation();

  useEffect(() => {
    const checkLocation = () => {
      if (location.pathname != "/" || "/booking") setFilteredClass("");

      if (location.pathname === "/") {
        setFilter("grayscale(100%)");
        setFilteredClass("home");
      }

      if (location.pathname === "/booking") {
        setFilter(`grayscale(100%) brightness(20%)`);
        setFilteredClass("home");
      }
    };

    checkLocation();
    console.log(location.pathname);
  }, [location]);

  console.log(filter);

  return (
    <>
      <ContentWrapper
        className={filteredClass ? filteredClass : ""}
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
