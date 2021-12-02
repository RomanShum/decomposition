function MenuItem({ data }) {
  return (
    <li style={{ display: "inline", marginLeft: 10 }}>
      <a href={data.href}>{data.title}</a>
    </li>
  );
}

export default MenuItem;
