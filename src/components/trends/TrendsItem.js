function TrendsItem({ item }) {
  return (
    <li style={{ display: "inline-block", marginLeft: 10 }}>
      {item.currency} {item.num} {item.diff}
    </li>
  );
}

export default TrendsItem;
