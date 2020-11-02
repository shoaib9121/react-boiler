import * as React from "react";
import "./Header.scss";

export interface Header {
  title?: string;
}

const Header = (props: Header) => {
  return (
    <header className="Header">
      <div>Your html here</div>
    </header>
  );
};

export default Header;
