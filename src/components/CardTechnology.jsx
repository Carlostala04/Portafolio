import React from "react";
import "../styles/cardTechnology.css";

function getTechName(child) {
  return child.props["data-tech-name"] ?? "";
}

export default function CardTechnology({ title, children }) {
  return (
    <article className="card-technology">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-elements">
        {React.Children.map(children, (child, i) => (
          <div className="tech-icon" key={i} data-name={getTechName(child)}>
            {child}
          </div>
        ))}
      </div>
    </article>
  );
}
