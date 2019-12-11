import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";

import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

class Layout extends React.Component {
  // navigate() {
  //   console.log(this.props.history);
  //   this.props.history.push("/");
  //   // this.props.history.replace("/");
  // }
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    }
    console.log("layout");
    return (
      <div>
        <Nav location={location} />
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>KillerNews.net</h1>
              {this.props.children}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    // <Link to="/archives/some-other-articles?date=yesterday&filter=none" class="btn btn-warning">archives (some other articles)</Link>
    // <Link to="/archives?date=today&filter=hot" class="btn btn-danger">archives</Link>
    // <NavLink to="/settings/main" className="btn btn-success">settings</NavLink>
    // <Link to="/settings/extra" class="btn btn-success">settings (extra)</Link>
    // <button class="btn btn-info" onClick={this.navigate.bind(this)}>featured</button>
    );
  }
}

export default withRouter(Layout);

