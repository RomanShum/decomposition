import TrendsItem from "./TrendsItem";
import TrendsWrapper from "./TrendsWrapper";
import { v1 as uuidv1 } from "uuid";

function Trends({ data }) {
  const items = data.map((item) => <TrendsItem key={uuidv1()} item={item} />);
  return <TrendsWrapper>{items}</TrendsWrapper>;
}

export default Trends;
