export interface IBooking {
  booker: {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
  };

  guests: number;
  message: string;
  seatingTime: string;
  seatingDate: Date;
}
