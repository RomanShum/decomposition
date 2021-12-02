import News from "../components/news/News";
import TopBanner from "../components/topbanner/TopBanner";
import { PropTypes } from "prop-types";

function Top({ newsHref, newsText, trends, dataTopBanner }) {
  return (
    <div className="top">
      <News hrefs={newsHref} titles={newsText} trends={trends} />
      <TopBanner data={dataTopBanner} />
    </div>
  );
}

Top.defaultProps = {
  newsHref: [],
  newsText: [],
  trends: [],
  dataTopBanner: {},
};

Top.propTypes = {
  newsHref: PropTypes.arrayOf(PropTypes.object),
  newsText: PropTypes.arrayOf(PropTypes.object),
  trends: PropTypes.arrayOf(PropTypes.object),
  dataTopBanner: PropTypes.object,
};
export default Top;
