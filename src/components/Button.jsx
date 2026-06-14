import React from "react";
import "../styles/button.css";

export default function Button({ title, Icon: icon, href, target }) {
  if (href) {
    return (
      <a
        className="button-default"
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {title} {icon}
      </a>
    );
  }

  return (
    <button className="button-default">
      {title} {icon}
    </button>
  );
}
