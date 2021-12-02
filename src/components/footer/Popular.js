import { v1 as uuidv1 } from "uuid";

function Popular({ items }) {
  const content = items.map((item) => (
    <li key={uuidv1()}>
      <b>{item.title}</b> - {item.subtitle}
    </li>
  ));
  return <ul>{content}</ul>;
}
export default Popular;
