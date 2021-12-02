function TopBanner({ data }) {
  return (
    <div>
      <img alt={data.alt} src={data.img} style={{ height: 100 }} />
      <h3>
        <a href={data.href}>{data.title}</a>
      </h3>
      <p>{data.desc}</p>
    </div>
  );
}

export default TopBanner;
