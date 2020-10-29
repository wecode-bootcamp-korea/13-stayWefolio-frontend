import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Pick from "./pages/Pick/Pick";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Booking from "./pages/Booking/Booking";
// import Reservation from "./pages/Reservation/Reservation";
// import CheckPage from "./pages/CheckPage/CheckPage";
import Reservation from "./pages/Reservation/Reservation";
import CheckPage from "./pages/CheckPage/CheckPage";
import BookingDetail from "./pages/BookingDetail/BookingDetail";
import ReservationInfo from "./pages/Reservation/ReservationInfo/ReservationInfo";
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Route component={Nav} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/picks" component={Pick} />
          <Route exact path="/booking" component={Booking} />
          <Route exact path="/reservation/:id" component={Reservation} />
          <Route exact path="/checkPage" component={CheckPage} />
          <Route exact path="/bookingDetail/:id" component={BookingDetail} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
