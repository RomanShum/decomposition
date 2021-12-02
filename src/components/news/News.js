import NewsWrapper from "./NewsWrapper";
import NewsItem from "./NewsItem";
import Trends from "../trends/Trends";
import { v1 as uuidv1 } from "uuid";

function News({ hrefs, titles, trends }) {
  if (hrefs === undefined) {
    return <></>;
  }
  const items = titles.map((item) => <NewsItem key={uuidv1()} data={item} />);
  return (
    <div className="news">
      <NewsWrapper data={hrefs}>{items}</NewsWrapper>
      <Trends data={trends} />
    </div>
  );
}

export default News;
