const Header = (props) => {
  const name = props.name || "App";
  const links = props.links || [{ link: "/", label: "Link" }];

  return (
    <header>
      <h1>{name}</h1>
      <nav>
        <ul>
          {links.map((item, index) => (
            <li>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
