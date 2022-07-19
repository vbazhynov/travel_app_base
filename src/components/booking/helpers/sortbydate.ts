export type helpersCardType = {
  id: string;
  userId: string;
  tripId: string;
  guests: number;
  date: string;
  trip: {
    title: string;
    duration: number;
    price: number;
  };
  totalPrice: number;
  createdAt: string;
};

const sortByDate = (arr: helpersCardType[]) => {
  return arr.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
};
export { sortByDate };
