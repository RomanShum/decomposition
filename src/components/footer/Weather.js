function Weather({ data }) {
  return (
    <div style={{ display: "flex" }}>
      <h1>{data.now}</h1>
      <div>
        <h3>Утром {data.morning}</h3>
        <h3>Днем {data.mid}</h3>
      </div>
    </div>
  );
}

export default Weather;
