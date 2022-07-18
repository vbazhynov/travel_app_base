import { AppRoute } from "../../enums/routes/route-enum";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../common/Layout/layout";
import { Main } from "../main/main";
import { SignIn } from "../sign-in/sign-in";
import { SignUp } from "../sign-up/sign-up";
import { Trip } from "../trip/trip";
function App() {
  return (
    <>
      <Routes>
        <Route path={AppRoute.ROOT} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={AppRoute.SIGN_IN} element={<SignIn />} />
          <Route path={AppRoute.SIGN_UP} element={<SignUp />} />
          <Route path={AppRoute.TRIP_$ID} element={<Trip />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
