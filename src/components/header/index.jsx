import * as React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 className="name-size">
          <strong>
            <u>William S Bray</u>
          </strong>
        </h1>
        <h5 className="heading-size">
          <strong>Front End Developer, Blogger & Music Enthusiast.</strong>
        </h5>
        <i class="fas fa-bars header-grid-2" />
      </header>
    );
  }
}

export default Header;
