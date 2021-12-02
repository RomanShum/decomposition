import { PropTypes } from "prop-types";

function Banner({ banner }) {
  return (
    <a href={banner.href}>
      <img alt={banner.alt} src={banner.img} />
    </a>
  );
}

Banner.defaultProps = {
  banner: {},
};

Banner.propTypes = {
  banner: PropTypes.object,
};

export default Banner;
