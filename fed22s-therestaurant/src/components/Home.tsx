import { Link } from "react-router-dom";
import { BookButton, HomeWrapper, RestaurantTitle } from "./styled/Home/Home";

export const Home = () => {
  return (
    <>
      <HomeWrapper>
        <RestaurantTitle>BOOKER</RestaurantTitle>
        <Link to="/booking">
          <BookButton>Boka bord</BookButton>
        </Link>
      </HomeWrapper>
    </>
  );
};
