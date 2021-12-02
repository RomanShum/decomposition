import NewsFooterWrapper from "../components/footer/NewsFooterWrapper";
import Weather from "../components/footer/Weather";
import Schedule from "../components/footer/Schedule";
import Tv from "../components/footer/Tv";
import Popular from "../components/footer/Popular";
import TvProgramm from "../components/footer/TvProgramm";
import { PropTypes } from "prop-types";

const f_news1 = {
  title: "Погода",
  href: "#",
  now: "+17",
  morning: "+17",
  mid: "+20",
};

const f_news2 = {
  title: "Карта",
  href: "#",
  subtitle: "Расписание",
};

const f_news3 = {
  title: "Эфир",
  href: "#",
};

const f_news3_list = [
  {
    title: "Lorem Ipsum",
    subtitle: "Lorem Ipsum",
    img: "&#128202;",
    href: "#",
  },
  {
    title: "Lorem Ipsum",
    subtitle: "Lorem Ipsum",
    img: "&#128202;",
    href: "#",
  },
  {
    title: "Lorem Ipsum",
    subtitle: "Lorem Ipsum",
    img: "&#128202;",
    href: "#",
  },
];

const f_news4 = {
  title: "Посещаемое",
  href: "#",
};

const f_news4_list = [
  {
    title: "Lorem Ipsum",
    subtitle: "Lorem Ipsum",
  },
  {
    title: "Lorem Ipsum",
    subtitle: "Lorem Ipsum",
  },
  {
    title: "Lorem Ipsum",
    subtitle: "Lorem Ipsum",
  },
];

const f_news5 = {
  title: "Телепрограмма",
  href: "#",
  img: "https://yoza.ru/upload/resize_cache/iblock/4a8/50_50_0/4a881ab9819d57b1c5da9a276658fad9.jpg",
};

const f_news5_list = [
  {
    title: "Lorem Ipsum",
    subtitle: "Lorem Ipsum",
    time: "09:00",
  },
  {
    title: "Lorem Ipsum",
    subtitle: "Lorem Ipsum",
    time: "09:00",
  },
  {
    title: "Lorem Ipsum",
    subtitle: "Lorem Ipsum",
    time: "09:00",
  },
];

function Footer() {
  return (
    <div className="footer">
      <NewsFooterWrapper>
        <Weather data={f_news1} />
      </NewsFooterWrapper>
      <NewsFooterWrapper>
        <Schedule data={f_news2} />
      </NewsFooterWrapper>
      <NewsFooterWrapper>
        <Tv data={f_news3} items={f_news3_list} />
      </NewsFooterWrapper>
      <NewsFooterWrapper>
        <Popular data={f_news4} items={f_news4_list} />
      </NewsFooterWrapper>
      <NewsFooterWrapper>
        <TvProgramm data={f_news5} items={f_news5_list} />
      </NewsFooterWrapper>
    </div>
  );
}

Footer.defaultProps = {
  f_news1: {},
  f_news2: {},
  f_news3: {},
  f_news4: {},
  f_news5: {},
  f_news3_list: [],
  f_news4_list: [],
  f_news5_list: [],
};

Footer.propTypes = {
  f_news1: PropTypes.object,
  f_news2: PropTypes.object,
  f_news3: PropTypes.object,
  f_news4: PropTypes.object,
  f_news5: PropTypes.object,
  f_news3_list: PropTypes.arrayOf(PropTypes.object),
  f_news4_list: PropTypes.arrayOf(PropTypes.object),
  f_news5_list: PropTypes.arrayOf(PropTypes.object),
};

export default Footer;
