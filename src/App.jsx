/** @format */

import Classic from "./components/Classic";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Members from "./components/Members";
import Nav from "./components/nav";
import Nav1 from "./components/Nav1";
import Navbar from "./components/Navbar";
import Sport from "./components/Sport";

function App() {
  return (
    <>
      <Nav />
      <br />
      <Navbar />
      <Nav1 />
      <img
        className="main"
        src=".\public\Images\nike-just-do-it.jpeg"
        alt=""
        width={"1400px"}
        style={{ marginLeft: "4.2rem" }}
      />
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2
          style={{ color: "#111111", fontSize: "4rem", fontWeight: "bolder" }}>
          MERCURIAL DREAM SPEED
        </h2>
        <br />
        <p style={{ fontSize: "2rem" }}>Speed beyond your wildest dreams.</p>
        <button
          style={{
            backgroundColor: "#111111",
            padding: "10px",
            color: "white",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
            marginTop: "20px",
          }}>
          Shop MDS009
        </button>
        <Feature />
        <Classic />
        <main style={{ marginTop: "3rem" }}>
          <h2
            style={{
              textAlign: "left",
              marginLeft: "4rem",
              fontSize: "2rem",
              fontWeight: "lighter",
            }}>
            Don't Miss
          </h2>
          <img
            className="center"
            src=".\public\Images\nike-just-do-it (1).jpg"
            alt=""
            width={"1400px"}
            style={{ marginTop: "1.5rem" }}
          />
          <div style={{ marginTop: "1rem" }}>
            <h2>Jorda Heir</h2>
            <h1
              style={{
                color: "#111111",
                fontSize: "4rem",
                fontWeight: "bolder",
              }}>
              Hold Court
            </h1>
            <p style={{ fontSize: "2rem" }}>
              Inspired by women's game, and built for anyone ready to take the
              throne
            </p>
            <button
              style={{
                backgroundColor: "#111111",
                padding: "20px",
                color: "white",
                borderRadius: "20px",
                fontWeight: "bold",
                cursor: "pointer",
                marginTop: "20px",
              }}>
              Shop
            </button>
          </div>
        </main>
      </div>
      <Sport />
      <Members />
      <Footer />
    </>
  );
}

export default App;
