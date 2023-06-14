import { styled } from "styled-components";
import { DeviceQuery } from "../../styles/breakpoints";

export const CalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .react-calendar {
    @media ${DeviceQuery.DESKTOP} {
      scale: 1.2;
    }
    border: none;

    &__navigation {
      display: flex;

      button:enabled:hover,
      .react-calendar__navigation button:enabled:focus,
      button:disabled {
        background-color: transparent;
      }

      &__label {
        font-weight: bold;
        text-transform: uppercase;
      }
    }

    &__month-view__days {
      border: 0.5px solid lightgrey;

      &__day {
        &--weekend {
          color: black;
        }
      }
    }

    abbr[title] {
      text-decoration: none;
    }

    &__tile {
      border: 0.5px solid lightgrey;

      &:disabled {
        background-color: #f7f7f7;
      }

      &--active {
        background-color: transparent;
        color: black;
        border: 2px solid #ff1c6f;
        padding: 8px;
      }

      &:enabled {
        &:hover {
          background-color: transparent;
          border: 2px solid #ff1c6f;
          padding: 8px;
        }
      }
    }
  }
`;
