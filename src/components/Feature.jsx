/** @format */
const Feature = () => {
  return (
    <div style={{ marginTop: "3rem" }}>
      <h2
        style={{
          textAlign: "left",
          marginLeft: "4rem",
          fontSize: "2rem",
          fontWeight: "lighter",
        }}>
        Featured
        <div
          style={{
            marginTop: "20px",
            display: "flex",
          }}>
          <section>
            <img src=".\public\Images\image.jpeg" alt="" width={"450px"} />
            <h3
              style={{
                fontSize: "30px",
                top: "-8.5rem",
                position: "relative",
                color: "white",
                marginLeft: "2rem",
              }}>
              Nothing Beats The CITY
            </h3>
            <button
              style={{
                backgroundColor: "white",
                color: "#111111",
                padding: "10px",
                borderRadius: "50px",
                top: "-8.5rem",
                position: "relative",
                marginLeft: "2rem",
              }}>
              Shop Now
            </button>
          </section>
          <section style={{ marginLeft: "20px" }}>
            <img src=".\public\Images\image (1).jpeg" alt="" width={"450px"} />
            <h3
              style={{
                fontSize: "30px",
                top: "-8.5rem",
                position: "relative",
                color: "white",
                marginLeft: "2rem",
              }}>
              Vomero Roam
            </h3>
            <button
              style={{
                backgroundColor: "white",
                color: "#111111",
                padding: "10px",
                borderRadius: "50px",
                top: "-8.5rem",
                position: "relative",
                marginLeft: "2rem",
              }}>
              Shop Now
            </button>
          </section>
          <section style={{ marginLeft: "20px" }}>
            <img src=".\public\Images\image.jpg" alt="" width={"450px"} />
            <h3
              style={{
                fontSize: "30px",
                top: "-8.5rem",
                position: "relative",
                color: "white",
                marginLeft: "2rem",
              }}>
              LeBron XXll 'Currency'
            </h3>
            <button
              style={{
                backgroundColor: "white",
                color: "#111111",
                padding: "10px",
                borderRadius: "50px",
                top: "-8.5rem",
                position: "relative",
                marginLeft: "2rem",
              }}>
              Shop Now
            </button>
          </section>
        </div>
      </h2>
    </div>
  );
};

export default Feature;
