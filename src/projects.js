import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import React, {useState} from "react";
import "swiper/css/pagination";
import {useSwiper} from "swiper/react";

function Card({title, subtitle, img, link}) {
	return (
		<div className="flex justify-center w-full">
			<div className="group relative m-0 flex aspect-[4/3] w-full rounded-xl shadow-xl ring-gray-900/5">
				<a
					className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70"
					href={link}
				>
					<img src={img} className=" animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
				</a>
				<div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
					<h1 className="font-serif text-2xl font-bold text-white shadow-xl">{title}</h1>
					<h1 className="text-sm font-light text-gray-200 shadow-xl">{subtitle}</h1>
				</div>
			</div>
		</div>
	);
}

function Carousel() {
	const [swiper, setSwiper] = useState(null);
	return (
		<div className="w-full max-w-[100vw] px-4 grid grid-cols-[auto_1fr_auto] items-center gap-4">
			<button className="w-4 md:w-9" onClick={() => swiper.slidePrev()}>
				<svg xmlns="http://www.w3.org/2000/svg" width="77.2" height="120.5" viewBox="293.6 261.7 77.2 120.5" preserveAspectRatio="xMidYMid meet" className="w-full">
					<path
						d="M 353.890625 382.261719 L 293.625 321.992188 L 353.890625 261.730469 L 370.863281 278.695312 L 327.566406 321.992188 L 370.863281 365.289062 L 353.890625 382.261719"
						fill="#f97316"
					/>
				</svg>
			</button>
			<div className="w-full overflow-hidden">
				<div className="w-full">
					<Swiper
						onSwiper={(swiper) => setSwiper(swiper)}
						modules={[Navigation]}
						spaceBetween={50}
						loop={true}
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							1024: {
								slidesPerView: 2.5, // laptops
							},
						}}
						autoHeight={true}
					>
						<SwiperSlide>
							<Card
								title={"Project 1"}
								subtitle={"Project 1 Description"}
								img={"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}
								link={"https://www.google.com"}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Card
								title={"Project 1"}
								subtitle={"Project 1 Description"}
								img={"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}
								link={"https://www.google.com"}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Card
								title={"Project 1"}
								subtitle={"Project 1 Description"}
								img={"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}
								link={"#"}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Card
								title={"Project 1"}
								subtitle={"Project 1 Description"}
								img={"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}
								link={"#"}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Card
								title={"Project 1"}
								subtitle={"Project 1 Description"}
								img={"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}
								link={"#"}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Card
								title={"Project 1"}
								subtitle={"Project 1 Description"}
								img={"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}
								link={"#"}
							/>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
			<button className="w-4 lg:w-9" onClick={() => swiper.slideNext()}>
				<svg xmlns="http://www.w3.org/2000/svg" width="77.2" height="120.5" viewBox="293.6 261.7 77.2 120.5" preserveAspectRatio="xMidYMid meet" className="rotate-180 w-full">
					<path
						d="M 353.890625 382.261719 L 293.625 321.992188 L 353.890625 261.730469 L 370.863281 278.695312 L 327.566406 321.992188 L 370.863281 365.289062 L 353.890625 382.261719"
						fill="#f97316"
					/>
				</svg>
			</button>
		</div>
	);
}

function Projects() {
	return (
		<div className="flex flex-col justify-center items-center w-full">
			<h1 className="text-6xl font-bold mb-16">Projects</h1>
			{Carousel()}
		</div>
	);
}

export default Projects;
