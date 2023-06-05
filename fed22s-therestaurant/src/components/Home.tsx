import { Link } from "react-router-dom";
import {
  BookButton,
  HomeWrapper,
  RestaurantTitle,
  StyledLink,
} from "./styled/Home/Home";

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
