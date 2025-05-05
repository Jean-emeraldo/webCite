import "./Residence.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";


interface ResidenceData {
  image: string;
  price: string;
  name: string;
  detail: string;
}

const data: ResidenceData[] = [
  {
    image: "./istockphoto-1279890592-612x612.jpg",
    price: "1,200",
    name: "Modern Villa",
    detail: "Spacious and well located",
  },
  {
    image: "./istockphoto-1296752873-612x612.jpg",
    price: "950",
    name: "Cozy Apartment",
    detail: "Perfect for singles",
  },
  {
    image: "./istockphoto-1772817327-612x612.jpg",
    price: "1,500",
    name: "Luxury Condo",
    detail: "City center with pool",
  },
  {
    image: "./istockphoto-1279890592-612x612.jpg",
    price: "1,200",
    name: "Modern Villa",
    detail: "Spacious and well located",
  },
];

const Residence = () => {
  return (
    <section>
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="r-card">
                <img src={card.image} alt="home" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residence;
