import { AppRoute } from '../../common/enums/app/app-route.enum';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../common/Layout/layout';
import { Main } from '../main/main';
import { SignIn } from '../sign-in/sign-in';
import { SignUp } from '../sign-up/sign-up';
import { Trip } from '../trip/trip';
import { Booking } from '../booking/booking';
import { StorageKey } from '../../common/enums/enums';
import { ToastContainer } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../common/hooks/hooks';
import { useEffect } from 'react';
import { profileActionCreator } from '../../store/actions';
function App() {
  const dispatch = useAppDispatch();

  const hasToken = Boolean(localStorage.getItem(StorageKey.TOKEN));
  const user = useAppSelector(state => state.user);
  const hasUser = Boolean(user);
  console.log('token ' + hasToken);
  console.log('user ' + hasUser);

  useEffect(() => {
    if (hasToken && !hasUser) {
      dispatch(profileActionCreator.loadCurrentUser());
    }
  }, [hasToken, hasUser, dispatch]);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path={AppRoute.ROOT} element={<Layout />}>
          <Route index element={hasToken ? <Main /> : <SignIn />} />
          <Route
            path={AppRoute.ANY}
            element={hasToken ? <Main /> : <SignIn />}
          />
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
