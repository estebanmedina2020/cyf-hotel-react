import React from "react";

const Footer = props => {
  return (
    <div>
      <ul>
        {props.AdreessFooter.map((Adreess, index) => {
          return <li key={index}>{Adreess}</li>;
        })}
      </ul>
    </div>
  );
};
export default Footer;
