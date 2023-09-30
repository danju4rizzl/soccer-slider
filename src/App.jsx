import { Swiper, SwiperSlide } from "swiper/react"

// import swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"

// import payers data
import players from "./players"

import "./App.css"

function App() {
	return (
		<div className="container">
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				loop={true}
				slidesPerView={"auto"}
				coverflowEffect={{
					scale: 0.8,
					depth: 150,
					slideShadows: false
				}}
				pagination={{
					clickable: true
				}}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false
				}}
				modules={[EffectCoverflow, Pagination, Autoplay]}
			>
				{players.map(({ name, img, team, logo }, index) => (
					<SwiperSlide key={index}>
						<div className="image-container">
							<img src={img} alt={name} />
						</div>
						<div className="info-container">
							<div className="info-text-container">
								<h3>{name}</h3>
								<p>{team}</p>
							</div>
							<img src={logo} alt={`Logo of ${team}`} />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default App
