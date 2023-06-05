import { BookButton, HomeWrapper, RestaurantTitle } from "./styled/Home/Home";

export const Home = () => {
  return (
    <>
      <HomeWrapper>
        <RestaurantTitle>BOOKER</RestaurantTitle>
        <BookButton>Boka bord</BookButton>
      </HomeWrapper>
    </>
  );
};
