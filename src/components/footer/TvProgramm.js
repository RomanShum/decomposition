import { v1 as uuidv1 } from "uuid";
function TvProgramm({ items }) {
  const content = items.map((item) => (
    <li key={uuidv1()}>
      {item.time} {item.title}
      <span style={{ color: "#ccc" }}>{item.subtitle}</span>
    </li>
  ));
  return <ul>{content}</ul>;
}
export default TvProgramm;
