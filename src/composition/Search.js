import SearchWrapper from "../components/search/SearchWrapper";
import { PropTypes } from "prop-types";

function Search({ logo, menu, subtitle }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={logo.img} alt={logo.alt} style={{ height: 50 }} />
      <SearchWrapper menu={menu} subtitle={subtitle}></SearchWrapper>
    </div>
  );
}

Search.defaultProps = {
  logo: {},
  menu: [],
  subtitle: {},
};

Search.propTypes = {
  logo: PropTypes.object,
  menu: PropTypes.arrayOf(PropTypes.object),
  subtitle: PropTypes.object,
};

export default Search;
