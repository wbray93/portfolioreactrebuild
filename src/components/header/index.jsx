import * as React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header-style">
        <h1 className="name-size">
          <strong>
            <u>William S Bray</u>
          </strong>
        </h1>
        <i class="fas fa-bars header-grid-2" />
        <h5 className="heading-size">
          <strong>Front End Developer, Blogger & Music Enthusiast.</strong>
        </h5>
      </div>
    );
  }
}

export default Header;
