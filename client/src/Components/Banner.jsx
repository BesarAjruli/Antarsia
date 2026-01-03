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
          position: "sticky",
          placeItems: "center",
          top: "0",
          zIndex: '99'
        }}
      >
        <h3>{fshati}</h3>
      </div>
    </>
  );
}

export default Banner;
