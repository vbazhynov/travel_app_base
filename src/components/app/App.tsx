import { AppRoute } from '../../common/enums/app/app-route.enum';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../common/Layout/layout';
import { Main } from '../main/main';
import { SignIn } from '../sign-in/sign-in';
import { SignUp } from '../sign-up/sign-up';
import { Trip } from '../trip/trip';
import { Booking } from '../booking/booking';
import { ToastContainer } from 'react-toastify';

function App() {
  // const dispatch = useAppDispatch();

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path={AppRoute.ROOT} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={AppRoute.ANY} element={<Main />} />
          <Route path={AppRoute.SIGN_UP} element={<SignUp />} />
          <Route path={AppRoute.SIGN_IN} element={<SignIn />} />
          <Route path={AppRoute.MAIN} element={<Main />} />
          <Route path={AppRoute.TRIP_$ID} element={<Trip />} />
          <Route path={AppRoute.BOOKINGS} element={<Booking />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
