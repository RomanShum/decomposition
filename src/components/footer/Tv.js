import { v1 as uuidv1 } from "uuid";

function Tv({ items }) {
  const content = items.map((item) => (
    <li key={uuidv1()}>
      {item.img} <a href={item.href}>{item.title}</a>
      <span style={{ color: "#ccc" }}>{item.subtitle}</span>
    </li>
  ));
  return <ul>{content}</ul>;
}

export default Tv;
