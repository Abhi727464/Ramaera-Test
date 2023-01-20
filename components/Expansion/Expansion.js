import React from "react";
import "./style.css";
import Vector from "../../images/Vector.png";
import Vector1 from "../../images/Vector1.png";
import Vector2 from "../../images/Vector2.png";
import Vector3 from "../../images/Vector3.png";
import Vector4 from "../../images/Vector4.png";
import Vector5 from "../../images/Vector5.png";
import tech from "../../images/tech.gif";
import tree from "../../images/tree.gif";
import pack from "../../images/package.gif";
import fruits from "../../images/fruits.gif";
import agro from "../../images/agro.gif";
import ecom from "../../images/ecom.gif";

const Expansion = () => {
  return (
    <>
      <div className="expansion">
        <div id="trapezium"></div>

        <div>
          <h2>The Ramaera Expansion</h2>
          <p>
            We are aiming to be a part of the major industrialisation drive in
            India and embarking our presence in every significant industrial
            domain including IT.
          </p>
        </div>
      </div>
      <div
        style={{
           height:'0.5px',background:'white',opacity:'0.1'
          
        }}
      ></div>
      <div className="d">
        <div className="technology">
          <div className="animated-img">
            <img src={tech} alt="" />
          </div>
          <div className="tech-info">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2>
                Unleashing the strength of <br /> <span>Technology</span>
              </h2>
              <div className="icon">
                <img src={Vector} alt="" />
              </div>
            </div>
            <div className="para">
              <p>
                We believe in innovation and excellence hence , our approach in
                the field of technology is focused to relish incredible customer
                experience and stabilising business models for tomorrow.
              </p>
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <button className="read-more">Read More</button>
            </div>
          </div>
        </div>
        <div
        style={{
          height:'0.5px',background:'white',opacity:'0.1'
          
        }}
      ></div>
        <div className="technology">
          <div className="tech-info">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="icon"
                style={{
                  left: "-10px",
                  background:
                    "linear-gradient(90deg, #FFE259 0%, #FFA751 100%)",
                  boxShadow: "0px 0px 30px #FFE259, inset 0px 0px 4px #FFFFFF",
                }}
              >
                <img src={Vector1} alt="" />
              </div>
              <h2 style={{ textAlign: "left" }}>
                Making <br />
                <span style={{ color: "#FFE259" }}>Accomodation Easier</span>
              </h2>
            </div>
            <div className="para">
              <p>
                Introducing capsule hotels in places of extreme need such as
                examination centres and hospitals to provide comfortable and
                convenient accommodation at pocket friendly prices .
              </p>
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <button className="read-more btn1">Read More</button>
            </div>
          </div>
          <div className="animated-img">
            <img src={tree} alt="" />
          </div>
        </div>
        <div
        style={{
          height:'0.5px',background:'white',opacity:'0.1'
          
        }}
      ></div>
        <div className="technology">
          <div className="animated-img">
            <img src={pack} alt="" />
          </div>
          <div className="tech-info">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2>
                Packaging Industry for
                <br /> Business <span style={{ color: "#EACDA3" }}>Growth</span>
              </h2>
              <div
                className="icon"
                style={{
                  background:
                    "linear-gradient(90deg, #EACDA3 0%, #D6AE7B 100%)",
                  boxShadow: "0px 0px 30px #EACDA3, inset 0px 0px 4px #FFFFFF",
                }}
              >
                <img src={Vector2} alt="" />
              </div>
            </div>
            <div className="para">
              <p>
                We provide packaging solutions to help your business flourish
                with boosted outreach. Ensuring the protection, containment, and
                communication of packaged projects is our foremost priority.
              </p>
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <button className="read-more btn2">Read More</button>
            </div>
          </div>
        </div>
        <div
        style={{
          height:'0.5px',background:'white',opacity:'0.1'
          
        }}
      ></div>
        <div className="technology">
          <div className="tech-info">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="icon"
                style={{
                  left: "-10px",
                  background:
                    "linear-gradient(90deg, #F2EFD3 0%, #358D82 100%)",
                  boxShadow: "0px 0px 30px #358D82, inset 0px 0px 4px #FFFFFF",
                }}
              >
                <img src={Vector3} alt="" />
              </div>
              <h2 style={{ textAlign: "left", color: "#358D80" }}>
                Offering the best with
                <br /> FMCG industry
              </h2>
            </div>
            <div className="para">
              <p>
                Ramaera FMCG industry has commenced an extensive range of FMCG
                to make your days more than ordinary. We plan to offer you
                nothing less than the best.
              </p>
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <button className="read-more btn3">Read More</button>
            </div>
          </div>
          <div className="animated-img">
            <img src={fruits} alt="" />
          </div>
        </div>
        <div
        style={{
          height:'0.5px',background:'white',opacity:'0.1'
          
        }}
      ></div>
        <div className="technology">
          <div className="animated-img">
            <img src={agro} alt="" />
          </div>
          <div className="tech-info">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2>
                Agri-business to bestow
                <br /> <span style={{ color: "#579181" }}> Nature's Love</span>
              </h2>
              <div
                className="icon"
                style={{
                  background: "#579181",
                  boxShadow: "0px 0px 30px #579181, inset 0px 0px 4px #FFFFFF",
                }}
              >
                <img src={Vector4} alt="" />
              </div>
            </div>
            <div className="para">
              <p>
                Our Agri-business industry is established to get you fresh and
                organic fruits and vegetables with the blessed with the touch of
                nature
              </p>
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <button className="read-more btn4">Read More</button>
            </div>
          </div>
        </div>
        <div
        style={{
          height:'0.5px',background:'white',opacity:'0.1'
          
        }}
      ></div>
        <div className="technology">
          <div className="tech-info">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="icon"
                style={{
                  left: "-10px",
                  background:
                    "linear-gradient(90deg, #9796F0 0%, #FBC7D4 100%)",
                  boxShadow: "0px 0px 30px #B6DEFA, inset 0px 0px 4px #FFFFFF",
                }}
              >
                <img src={Vector5} alt="" />
              </div>
              <h2 style={{ textAlign: "left", color: "#ffff" }}>
                Get all your essentials in
                <br /> <span style={{ color: "#9796F0" }}>one place</span>
              </h2>
            </div>
            <div className="para">
              <p>
                Ramaera FMCG industry has commenced an extensive range of FMCG
                to make your days more than ordinary. We plan to offer you
                nothing less than the best.
              </p>
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <button className="read-more btn5">Read More</button>
            </div>
          </div>
          <div className="animated-img">
            <img src={ecom} alt="" />
          </div>
        </div>
      </div>
      {/* <div id="trapezium" style={{left:'%', top:'10px'}}></div> */}
    </>
  );
};

export default Expansion;
