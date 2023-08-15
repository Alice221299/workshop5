import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/css/effect-coverflow";
import "./carrusel.scss";
import { getAllUsers } from "../../services/usersAll";
import { AppContext } from "../../routers/Router";
const Carrusel = () => {

  const {user: {userLogin}} = useContext(AppContext)
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    users();
  }, []);

  const users = async () => {
    try {
      const response = await getAllUsers();
      const filter = response.filter(user => user.id !== userLogin.id);
      setListUsers(filter);
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  return (
    <div className="container">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={false}
        slidesPerView={5}
        spaceBetween={15}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: "", clickable: true }}
        initialSlide={2}
        className="swiper_container"
      >
        <SwiperSlide className="swiper-slide" key={userLogin?.id}>
            <img className="carrusel-image" src={userLogin?.avatar} alt="" />
            <span>{userLogin?.name}</span>
          </SwiperSlide>
        {listUsers?.map((data) => (
          <SwiperSlide className="swiper-slide" key={data?.id}>
            <img className="carrusel-image" src={data?.avatar} alt="" />
            <span>{data?.name}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrusel;
