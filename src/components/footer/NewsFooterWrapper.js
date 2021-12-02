function NewsFooterWrapper(props) {
  const { data } = props.children.props;
  return (
    <div className="news_footer">
      <a href={data.href}>
        <h3>{data.title}</h3>
      </a>
      {props.children}
    </div>
  );
}
export default NewsFooterWrapper;
