import "../styles/button.css";

export default function Button({ title, Icon: icon, href, target, className, style }) {
  const cls = `button-default${className ? ` ${className}` : ""}`;

  if (href) {
    return (
      <a
        className={cls}
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        style={style}
      >
        {title} {icon}
      </a>
    );
  }

  return (
    <button className={cls} style={style}>
      {title} {icon}
    </button>
  );
}
