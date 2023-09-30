import { useEffect, useRef } from "react"
import { register } from "swiper/element/bundle"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"

// import players data
import players from "./players"

// import custom styles
import "./WCVersion.css"

export default function WCVersion() {
	const swiperRef = useRef(null)

	useEffect(() => {
		// Register Swiper web component
		register()

		// Object with parameters
		const params = {
			effect: "coverflow",
			grabCursor: true,
			centeredSlides: true,
			loop: true,
			slidesPerView: "auto",
			modules: [EffectCoverflow, Pagination, Autoplay],
			pagination: {
				clickable: true
			},
			autoplay: {
				delay: 2500,
				disableOnInteraction: false
			},
			coverflowEffect: {
				scale: 0.8,
				depth: 150,
				slideShadows: false
			}
		}

		// Assign it to swiper element
		Object.assign(swiperRef.current, params)

		// initialize swiper
		swiperRef.current.initialize()
	}, [])

	return (
		<div className="container">
			<swiper-container init="false" ref={swiperRef}>
				{/* using web components */}

				{players.map(({ name, img, team, logo }, index) => (
					<swiper-slide key={index}>
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
					</swiper-slide>
				))}
			</swiper-container>
		</div>
	)
}
