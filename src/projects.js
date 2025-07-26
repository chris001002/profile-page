import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {useState} from "react";
import "swiper/css/pagination";
import Project1 from "./images/Project1.png";
import Project2 from "./images/Project2.png";
import Project3 from "./images/Project3.png";
import Project4 from "./images/Project4.png";
import Project5 from "./images/Project5.png";
import Project6 from "./images/Project6.png";

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
				<div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 text-left">
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
							<Card title={"TempChat"} subtitle={"Using Laravel, Next.js, Docker"} img={Project1} link={"https://github.com/chris001002/TempChat"} />
						</SwiperSlide>
						<SwiperSlide>
							<Card
								title={"Defect detection and Root cause analysis"}
								subtitle={"Using Mask R-CNN, YOLO and Machine Learning"}
								img={Project2}
								link={"https://github.com/chris001002/Defect-Detection-and-Root-Cause-Analysis"}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Card title={"Glass Ordering Application"} subtitle={"Using tailwindcss, mysql and php"} img={Project3} link={"https://glassordering.free.nf"} />
						</SwiperSlide>
						<SwiperSlide>
							<Card
								title={"Covid Question Answering Chatbot"}
								subtitle={"Using transformers and vector indexing with angular embedding"}
								img={Project4}
								link={"https://github.com/chris001002/COVID-19-Question-Answering-Chatbot"}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Card
								title={"Whatsapp Clone"}
								subtitle={"A simple android app replicating whatsapp using Java and firebase"}
								img={Project5}
								link={"https://github.com/chris001002/Whatsapp-clone"}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Card title={"Nutrical"} subtitle={"App tracking nutritions using Flutter and Firebase"} img={Project6} link={"https://github.com/chris001002/nutrical"} />
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
