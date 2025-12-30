function Banner({ fshati }) {
  return (
    <>
      <div
        style={{
          backgroundColor: "#008000",
          color: "#FFD700",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          placeItems: "center",
        }}
      >
        <h3>{fshati}</h3>
      </div>
    </>
  );
}

export default Banner;
