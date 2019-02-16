import * as React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  state = {
    isDropdownOpen: false
  };

  toggleDropdown = () => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  };

  render() {
    return (
      <div>
        <div className="header-style">
          <div>
            <h1 className="name-size">
              <strong>
                <u>William S Bray</u>
              </strong>
            </h1>
            <h5 className="heading-size">
              <strong>Front End Developer, Blogger & Music Enthusiast.</strong>
            </h5>
          </div>
          <div className="mobile-only">
            <i onClick={this.toggleDropdown} className="fas fa-bars" />
          </div>
        </div>
        {this.state.isDropdownOpen && (
          <div id="dropdown">
            <Link onClick={() => this.setState({isDropdownOpen: false})} to="/">Home</Link>
            <Link onClick={() => this.setState({isDropdownOpen: false})} to="/projects">Project Page</Link>
          </div>
        )}
      </div>
    );
  }
}

export default Header;
