
import React from "react";
import "./CorouselStyles.css";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.css';
// import Tat13 from "../asset/tat13.jpg";

const slides = [
  {
    image: './Images/tat1.jpg',
    text: {
      title: " Unleash Your Imagination !",
      description:
      "Elevate your inked expression with the expertise of our dedicated tattoo artist, turning moments into enduring works of art.",
    },
  },
  {
    image: './Images/mehendi1.jpg',
    text: {
      title: "The art of mehendi with a personal touch!",
      description:  "Let every stroke weave a tale of beauty, grace, and cultural richness, ensuring your special occasions are adorned with the artistry they deserve.",
    },
  },
  {
    image: './Images/salon1.jpg',
    text: {
      title: "Transform Your Look, Elevate Your Confidence",
      description: "Unveil Your Beauty Journey: Where Glamour Meets Grace Online.",
    },
  },
];


const cardData = [
  {
    name: "Sunny Bhanushali",
    frontImage: "https://static.wixstatic.com/media/ad257b_fb4c7c2752a54e4fa1940563d13fcc27~mv2.jpg/v1/crop/x_0,y_2,w_1080,h_1076/fill/w_422,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Sunny.jpg",
    backText: "Globally renowned for his outstanding work on conceptual and hyper-realism tattoos, Sunny has pioneered photo-realistic tattoos in India and is one of the highest award-winning tattoo artists in Asia. "
  },
  {
    name: "Binod Tamang",
    frontImage: "https://static.wixstatic.com/media/094c62_6d9c79acce6c416bac42ca86c65840f1~mv2.jpg/v1/crop/x_0,y_32,w_1080,h_1125/fill/w_404,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Binod%20Tamang%20copy.jpg",
    backText: "Binod was a bright student in academics but also inclined towards sketching as a child. After learning Tattooing from Aliens Tattoo Art School, he has been doing a great job as an artist, majorly expertising in Realism and Calligraphy."
  },
  {
    name: "Sumit Tank",
    frontImage: "https://static.wixstatic.com/media/9a1813_932dae40361a4db59cc3d68bacd0b26c~mv2.jpg/v1/crop/x_0,y_0,w_3614,h_3603/fill/w_422,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC00054.jpg",
    backText: "Sumit is one of our youngest and the most talented tattoo artists. At age nine, he got inspired by Tribal Tattoos and ever since then, he passionately practices and creates designs that are exceptional. Today with his unbeatable passion, he is unstoppable. ."
  },
  {
    name: "Sakshi Panwar",
    frontImage: "https://static.wixstatic.com/media/0c9507_f106eaa4809c47bb8b03f1d7b46955e8~mv2.jpg/v1/crop/x_0,y_0,w_720,h_717/fill/w_422,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC03576_edited.jpg",
    backText: "Sakshi is one of our finest Tattoo Artists. She has an expertise in the Fine Tattoo art genre and believes in crafting human connections by using her art and creativity. From a student of Aliens Tattoo Art School to being the youngest intermediate artist she keeps scaling up with her work!  "
  },
  
 
];
const cardData2 = [
  {
    name: "Mahesh",
    frontImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5fPwOvFM5XZxUQU80BHpR2nFl_3Y7qgs3CP3peJQUo3hPabv0N7ysBW08LZ0M4tmRXM&usqp=CAU",
    backText: "Globally renowned for his outstanding work on conceptual and hyper-realism tattoos, Sunny has pioneered photo-realistic tattoos in India and is one of the highest award-winning tattoo artists in Asia. "
  },
  {
    name: "Riya Tapadiya",
    frontImage: "https://media.istockphoto.com/id/1152188164/photo/young-girl-stock-images.jpg?s=612x612&w=0&k=20&c=YjZWkX5UGn0REG0IB8pWLLffTxAT0zoI7A5ZEacFC24=",
    backText: "Binod was a bright student in academics but also inclined towards sketching as a child. After learning Tattooing from Aliens Tattoo Art School, he has been doing a great job as an artist, majorly expertising in Realism and Calligraphy."
  },
  {
    name: "Shweta Bang",
    frontImage: "https://media.istockphoto.com/id/1189190647/photo/beautiful-young-girl-posing-in-traditional-saree.jpg?s=612x612&w=0&k=20&c=bdI2BCX6XtJFy1lgVft_UE27eFT26CH0noEZEwFc8Eo=",
    backText: "Sumit is one of our youngest and the most talented tattoo artists. At age nine, he got inspired by Tribal Tattoos and ever since then, he passionately practices and creates designs that are exceptional. Today with his unbeatable passion, he is unstoppable. ."
  },
  {
    name: "veena Nagda",
    frontImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwvcEtlHCGdv6RvVTl1zbRn0JSSCemkIUTA&usqp=CAU",
    backText: "Sakshi is one of our finest Tattoo Artists. She has an expertise in the Fine Tattoo art genre and believes in crafting human connections by using her art and creativity. From a student of Aliens Tattoo Art School to being the youngest intermediate artist she keeps scaling up with her work!  "
  },
  
 
];
const cardData3 = [
  {
    name: "Enlive Unisex Salon",
    frontImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCm2YONG249MgWPIBBJXRu_gVU--lTSU77hRA5fJdnNs1djvACdUQ5o5O5aZnfgwdaSVo&usqp=CAU",
    backText: "Globally renowned for his outstanding work on conceptual and hyper-realism tattoos, Sunny has pioneered photo-realistic tattoos in India and is one of the highest award-winning tattoo artists in Asia. "
  },
  {
    name: "Beauty Town Beauty Salon",
    frontImage: "https://media.istockphoto.com/id/1418109036/photo/mother-getting-her-daughter-ready-in-school-uniform-at-home.jpg?s=612x612&w=0&k=20&c=hFxm5uVYAA0FPsdkjgncMoZWyt-QMeSaonFj5rNAn4U=",
    backText: "Binod was a bright student in academics but also inclined towards sketching as a child. After learning Tattooing from Aliens Tattoo Art School, he has been doing a great job as an artist, majorly expertising in Realism and Calligraphy."
  },
  {
    name: "Aestetic Salon Services",
    frontImage: "https://media.istockphoto.com/id/164667814/photo/portrait-of-young-beautiful-indian-smiling-women.jpg?s=612x612&w=0&k=20&c=Fv3_npB6g5yVQ-Ac7_rRwvDedLQ4ZlQPZo5nEudIZk4=",
    backText: "Sumit is one of our youngest and the most talented tattoo artists. At age nine, he got inspired by Tribal Tattoos and ever since then, he passionately practices and creates designs that are exceptional. Today with his unbeatable passion, he is unstoppable. ."
  },
  {
    name: "Marvelous Family Salon",
    frontImage: "https://media.istockphoto.com/id/1323176525/photo/close-up-of-bearded-man-stock-photo.jpg?s=612x612&w=0&k=20&c=GhqhVmCMsVJnl-A75L4PYXpuGazcSuYgbJjXa9frqKk=",
    backText: "Sakshi is one of our finest Tattoo Artists. She has an expertise in the Fine Tattoo art genre and believes in crafting human connections by using her art and creativity. From a student of Aliens Tattoo Art School to being the youngest intermediate artist she keeps scaling up with her work!  "
  },
  
 
];
export default function Landing() {
  return (
    <div  >
      <div className="crsl">
        <Carousel className="carousel-inner transition1" controls={false}>
          {slides.map((slide, index) => (
            <Carousel.Item key={index} interval={4000}>
              <div style={{ height: "600px" }}>
                <img className="d-block w-100" src={slide.image} alt={`Slide ${index + 1}`} style={{ width: "100%", height: "100%" }} />
                <div className="cours"></div>
              </div>
              <div className="text">
                <h5>{slide.text.title}</h5>
                <p>{slide.text.description}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div >
    <div>
    <div class="wrapper">
      <h1>Top Tattoo Artist</h1>
      <div class="cols">
        {cardData.map((card, index) => (
          <div key={index} class="col" ontouchstart="this.classList.toggle('hover');">
            <div class="container">
              <div class="front" style={{ backgroundImage: `url(${card.frontImage})` }}>
                <div class="inner">
                  <p>{card.name}</p>
                </div>
              </div>
              <div style={{paddingTop:"30px"}}class="back">
                <div class="inner">
                  <p>{card.backText}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  <div>
  <div>
    <div class="wrapper">
      <h1>Top Mehendi Artist</h1>
      <div class="cols">
        {cardData2.map((card, index) => (
          <div key={index} class="col" ontouchstart="this.classList.toggle('hover');">
            <div class="container">
              <div class="front" style={{ backgroundImage: `url(${card.frontImage})` }}>
                <div class="inner">
                  <p>{card.name}</p>
                </div>
              </div>
              <div class="back">
                <div class="inner">
                  <p>{card.backText}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
    
  </div>
  <div>
  <div>
    <div class="wrapper">
      <h1>Top Salon Artist</h1>
      <div class="cols">
        {cardData3.map((card, index) => (
          <div key={index} class="col" ontouchstart="this.classList.toggle('hover');">
            <div class="container">
              <div class="front" style={{ backgroundImage: `url(${card.frontImage})` }}>
                <div class="inner">
                  <p>{card.name}</p>
                </div>
              </div>
              <div class="back">
                <div class="inner">
                  <p>{card.backText}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  </div>
  </div>
    </div>
  );
}

