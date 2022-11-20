import { BookingType } from '../../../store/booking/actions';

const sortByDate = (arr: BookingType[]) => {
  // return arr.sort(
  //   (a, b) => new Date(a.date). - new Date(b.date).getTime(),
  // );
  console.log(new Date(arr[0].date).getTime());
};
export { sortByDate };
