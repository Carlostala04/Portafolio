import React from "react";
import "../styles/button.css";
export default function Button({ title, Icon:icon }) {
  return <a className="button-default">{title} {icon}</a>;
}
