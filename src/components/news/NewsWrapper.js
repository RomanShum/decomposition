import moment from "moment";
import "moment/locale/ru";
import { v1 as uuidv1 } from "uuid";

function NewsWrapper(props) {
  const { data } = props;
  const hrefs = data.map((item) => (
    <a className="news_a" key={uuidv1()} href={item.href}>
      {item.title}
    </a>
  ));

  const now = moment();
  hrefs.push(
    <p style={{ display: "inline" }}>{now.format("DD MMMM, dddd h:mm")}</p>
  );
  return (
    <div className="top_news">
      {hrefs}
      <ul>{props.children}</ul>
    </div>
  );
}

export default NewsWrapper;
