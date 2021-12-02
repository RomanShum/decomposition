function SearchSubTitle({ subtitle }) {
  return (
    <p style={{ marginLeft: 50 }}>
      Найдется всё. Например, <a href={subtitle.href}>{subtitle.title}</a>
    </p>
  );
}
export default SearchSubTitle;
