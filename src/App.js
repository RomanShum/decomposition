import "./App.css";
import Top from "./composition/Top";
import Search from "./composition/Search";
import Banner from "./composition/Banner";
import Footer from "./composition/Footer";

const newsHref = [
  {
    title: "Категория1",
    href: "#",
  },
  {
    title: "Категория2",
    href: "#",
  },
  {
    title: "Категория3",
    href: "#",
  },
];

const newsText = [
  {
    title: "Lorem ipsum dolor sit amet",
    href: "#",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    href: "#",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    href: "#",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    href: "#",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    href: "#",
  },
];

const dataTopBanner = {
  img: "https://alphabetonline.ru/images/letters/m/morozhenoe.png",
  alt: "Lorem ipsum",
  title: "Lorem ipsum dolor sit amet",
  href: "#",
  desc: "Lorem ipsum dolor sit amet",
};

const trends = [
  {
    currency: "USD",
    num: 30.0,
    diff: "-1.00",
  },
  {
    currency: "USD",
    num: 30.0,
    diff: "-1.00",
  },
  {
    currency: "USD",
    num: 30.0,
    diff: "-1.00",
  },
];

const logo = {
  img: "http://gaby.lebars.free.fr/Faire-un-zoom-sur-les-images/479/gallery/frame-01.jpg",
  alt: "logo",
};

const menu = [
  { title: "Видео", href: "#" },
  { title: "Картинки", href: "#" },
  { title: "Новости", href: "#" },
  { title: "Карты", href: "#" },
  { title: "Маркет", href: "#" },
  { title: "Переводчик", href: "#" },
  { title: "Эфир", href: "#" },
  { title: "Ещё", href: "#" },
];

const subtitle = {
  title: "фаза Луны",
  href: "#",
};

const banner = {
  img: "https://coinsforsale.com/media/avatar/banner-image.png",
  href: "#",
  alt: "Lorem ipsum",
};

function App() {
  return (
    <div className="wrap">
      <Top
        newsHref={newsHref}
        newsText={newsText}
        trends={trends}
        dataTopBanner={dataTopBanner}
      />
      <Search logo={logo} menu={menu} subtitle={subtitle} />
      <Banner banner={banner} />
      <Footer />
    </div>
  );
}

export default App;
