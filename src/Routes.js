import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Pick from "./pages/Pick/Pick";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Reservation from "./pages/Reservation/Reservation";
import BookingDetail from "./pages/BookingDetail/BookingDetail";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/pick" component={Pick} />
          <Route exact path="/bookingDetail" component={BookingDetail} />
          <Route exact path="/bookingDetail/:id" component={BookingDetail} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
