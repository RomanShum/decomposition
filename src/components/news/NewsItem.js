function NewsItem({ data }) {
  return (
    <li>
      <a href={data.href}>&#128202; {data.title}</a>
    </li>
  );
}

export default NewsItem;
