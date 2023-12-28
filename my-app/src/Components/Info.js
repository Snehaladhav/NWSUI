import React from "react";
import "./InfoStyles.css";
import Img10 from "../asset/img10.jpg";
import Ganesha from "../asset/ganesha.jpg";
import Img2 from "../asset/img2.jpg";
import Img3 from "../asset/img3.jpg";
import Img4 from "../asset/img4.jpg";
import Img1 from "../asset/img1.jpg";
import Tat5 from "../asset/tat5.jpg";
// import Img8 from "../asset/img8.jpg";
// import Img9 from "../asset/img9.jpg";
// import Img8 from "../asset/img8.jpg";
const Img8="https://ik.imagekit.io/zrh3rssb6/geometric/img8.jpg?updatedAt=1700810000547"
const Img9="https://ik.imagekit.io/zrh3rssb6/geometric/img6.webp?updatedAt=1700810000553"
const img = [Img2, Img3, Img4, Ganesha, Tat5,Img8,Img9];

const Info = () => {
  return (
    <div className="container">
      <div
        className="mask"
        style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
          zIndex: "-1",
        }}
      >
        <img
          className="background"
          style={{
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
          }}
          src="https://ik.imagekit.io/zrh3rssb6/geometric/img6.webp?updatedAt=1700810000553"
          alt="Img9"
        />
      </div>

      <div style={{ display: "flex", padding: "40px" }} className="content">
        <div className="details">
          <img
            style={{ margin: "5px", borderRadius: "50%" }}
            className="arist-img "
            src={Img10}
            alt="Img10"
          />
        </div>
        <div style={{ color: "white", padding: "50px" }}>
          <h1 style={{ textAlign: "center" }}>Manohar Koli </h1>

          <h4 style={{ textAlign: "center" }}>
            {" "}
            Tattoo artist • Tattoo Designer{" "}
          </h4>

          <p>
            Manohar Koli is one of our most ambitious Tattoo Makers, he started
            his tattooing journey in 2010. Before this, Manohar was into Diesel
            Mechanics but midway through the course, he realised that he was not
            satisfied. He was always inclined towards art and after much
            consideration, he decided to learn Tattoo Making
          </p>
        </div>
      </div>
      <div
        
        style={{
          display: "flex",
          flexWrap: "wrap",
          //   justifyContent: "space-between",
          gap: "10px",
          marginTop:"40px",
          marginBottom: "10px",
          marginLeft: "5px",
          borderRadius: "5%",
        }}
      >
      {
        img.map((ele) =>{
          return(
            <div className="demo" style={{ borderRadius: "5%", width:"400px",
         height:"400px",overflow:'hidden' }}>
            <img
         
        
         
         style={{  width:"100%",
         height:"100%",transition:'all .3s ease-in-out' }}
         className="artist-img2"
         src={ele}
         alt="Img2"
       ></img>
            </div>);
        })
      }
       
        

       
      </div>
    </div>
  );
};

export default Info;
