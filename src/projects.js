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
import Project7 from "./images/Project7.png";
import Project8 from "./images/Project8.png";
import {createPortal} from "react-dom";
const allImages = {
	project_1: require.context("./images/project_1", true, /\.(png|jpe?g|gif)$/),
	project_2: require.context("./images/project_2", true, /\.(png|jpe?g|gif)$/),
	project_3: require.context("./images/project_3", true, /\.(png|jpe?g|gif)$/),
	project_4: require.context("./images/project_4", true, /\.(png|jpe?g|gif)$/),
	project_5: require.context("./images/project_5", true, /\.(png|jpe?g|gif)$/),
	project_6: require.context("./images/project_6", true, /\.(png|jpe?g|gif)$/),
	project_7: require.context("./images/project_7", true, /\.(png|jpe?g|gif)$/),
	project_8: require.context("./images/project_8", true, /\.(png|jpe?g|gif)$/),
};
class Project {
	constructor(title, subtitle, img, imageContexts = null, repoLink = null, webLink = null) {
		this.title = title;
		this.subtitle = subtitle;
		this.img = img;
		this.imageContexts = imageContexts;
		this.repoLink = repoLink;
		this.webLink = webLink;
	}
}

let projects = [
	new Project(
		"SmartChurch Chatbot",
		"LangGraph Text-to-SQL agent with Django REST + React and PostgreSQL, auto-generating Seaborn visual reports from natural language",
		Project8,
		allImages.project_8
	),
	new Project("PUIS Mobile", "A simple mobile app to view student information using React Native and Expo", Project7, allImages.project_7),
	new Project(
		"Defect detection and Root cause analysis",
		"Using Mask R-CNN, YOLO and Machine Learning",
		Project2,
		allImages.project_2,
		"https://github.com/chris001002/Defect-Detection-and-Root-Cause-Analysis",
		null
	),
	new Project("Nutrical", "App tracking nutritions using Flutter and Firebase", Project6, allImages.project_6, "https://github.com/chris001002/nutrical", null),
	new Project("TempChat", "Using Laravel, Next.js, Docker", Project1, allImages.project_1, "https://github.com/chris001002/TempChat", null),
	new Project(
		"Covid Question Answering Chatbot",
		"Using transformers and vector indexing with angular embedding",
		Project4,
		allImages.project_4,
		"https://github.com/chris001002/COVID-19-Question-Answering-Chatbot",
		null
	),
	new Project(
		"Glass Ordering Application",
		"Using tailwindcss, mysql and php",
		Project3,
		allImages.project_3,
		"https://github.com/chris001002/Glass-Ordering-Application",
		"https://glassordering.free.nf"
	),
	new Project(
		"Whatsapp Clone",
		"A simple android app replicating whatsapp using Java and firebase",
		Project5,
		allImages.project_5,
		"https://github.com/chris001002/Whatsapp-clone",
		null
	),
];
function Card({project, showModal, setProject}) {
	return (
		<div className="flex justify-center w-full">
			<div className="group relative m-0 flex aspect-[4/3] w-full rounded-xl shadow-xl ring-gray-900/5">
				<button
					className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70"
					onClick={() => {
						setProject(project);
						showModal(true);
					}}
				>
					<img
						src={project.img}
						className=" animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
						alt=""
					/>
				</button>
				<div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 text-left">
					<h1 className="font-serif text-2xl font-bold text-white shadow-xl">{project.title}</h1>
					<h1 className="text-sm font-light text-gray-200 shadow-xl">{project.subtitle}</h1>
				</div>
			</div>
		</div>
	);
}
function Modal({modalShown, showModal, project, setProject}) {
	const [swiper, setSwiper] = useState(null);
	if (project === null || showModal === false) return null;
	let imageList = [];
	if (project.imageContexts != null) {
		imageList = project.imageContexts.keys().map((key) => project.imageContexts(key));
	}
	const closeModal = () => {
		showModal(false);
		setProject(null);
	};
	let modal = (
		<div className={modalShown ? "fixed top-0 left-0 z-50 dark:text-white w-screen h-screen flex justify-center items-center bg-opacity-50 bg-black" : "hidden"}>
			<div className="w-11/12 h-fit font-bold max-h-screen">
				<div className="bg-orange-400 w-full h-10 rounded-t-2xl flex justify-between items-center p-4 text-white">
					<p className="flex-grow pr-2 truncate">{project.title}</p>
					<button className="h-6 w-6 bg-red-700 rounded-full" onClick={closeModal}>
						X
					</button>
				</div>
				<div className="grid grid-cols-[auto_1fr_auto] p-4 gap-2 dark:bg-gray-800 bg-white">
					<button className="w-4 md:w-9" onClick={() => swiper.slidePrev()}>
						<svg xmlns="http://www.w3.org/2000/svg" width="77.2" height="120.5" viewBox="293.6 261.7 77.2 120.5" preserveAspectRatio="xMidYMid meet" className="w-full">
							<path
								d="M 353.890625 382.261719 L 293.625 321.992188 L 353.890625 261.730469 L 370.863281 278.695312 L 327.566406 321.992188 L 370.863281 365.289062 L 353.890625 382.261719"
								fill="#f97316"
							/>
						</svg>
					</button>
					<div className="w-full overflow-hidden">
						<div className="w-full h-[50vh]">
							<Swiper onSwiper={(swiper) => setSwiper(swiper)} modules={[Navigation]} spaceBetween={5} loop={true} slidesPerView={1} className="h-full" centeredSlides centeredSlidesBounds>
								{imageList.map((image, index) => {
									return (
										<SwiperSlide key={index}>
											<div className="w-full h-full flex justify-center items-center">
												<a href={image} target="_blank" rel="noreferrer" className="h-full flex justify-center items-center">
													<img src={image} alt="" className="h-full object-contain" />
												</a>
											</div>
										</SwiperSlide>
									);
								})}
							</Swiper>
						</div>
					</div>
					<button className="w-4 md:w-9" onClick={() => swiper.slideNext()}>
						<svg xmlns="http://www.w3.org/2000/svg" width="77.2" height="120.5" viewBox="293.6 261.7 77.2 120.5" preserveAspectRatio="xMidYMid meet" className="rotate-180 w-full">
							<path
								d="M 353.890625 382.261719 L 293.625 321.992188 L 353.890625 261.730469 L 370.863281 278.695312 L 327.566406 321.992188 L 370.863281 365.289062 L 353.890625 382.261719"
								fill="#f97316"
							/>
						</svg>
					</button>
				</div>
				<div className="w-full h-fit border-t-4 border-double border-gray-600 dark:bg-gray-800 bg-white flex items-center p-2 justify-between flex-wrap">
					<div className="flex flex-row gap-2">
						{project.repoLink && (
							<a
								href={project.repoLink}
								className="dark:bg-white dark:text-black text-white  bg-[#24292F] dark:hover:bg-[#FFFFFF]/90 hover:bg-[#24292F]/90  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2 h-fit"
							>
								<svg className="w-4 h-4 me-2" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
										clipRule="evenodd"
									/>
								</svg>
								Repository
							</a>
						)}
						{project.webLink && (
							<a
								href={project.webLink}
								className="text-white bg-blue-600 hover:bg-[#2563eb]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 h-fit"
							>
								<svg className="w-4 h-4 me-2" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 22">
									<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
									<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
									<g id="SVGRepo_iconCarrier">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M9.83824 18.4467C10.0103 18.7692 10.1826 19.0598 10.3473 19.3173C8.59745 18.9238 7.07906 17.9187 6.02838 16.5383C6.72181 16.1478 7.60995 15.743 8.67766 15.4468C8.98112 16.637 9.40924 17.6423 9.83824 18.4467ZM11.1618 17.7408C10.7891 17.0421 10.4156 16.1695 10.1465 15.1356C10.7258 15.0496 11.3442 15 12.0001 15C12.6559 15 13.2743 15.0496 13.8535 15.1355C13.5844 16.1695 13.2109 17.0421 12.8382 17.7408C12.5394 18.3011 12.2417 18.7484 12 19.0757C11.7583 18.7484 11.4606 18.3011 11.1618 17.7408ZM9.75 12C9.75 12.5841 9.7893 13.1385 9.8586 13.6619C10.5269 13.5594 11.2414 13.5 12.0001 13.5C12.7587 13.5 13.4732 13.5593 14.1414 13.6619C14.2107 13.1384 14.25 12.5841 14.25 12C14.25 11.4159 14.2107 10.8616 14.1414 10.3381C13.4732 10.4406 12.7587 10.5 12.0001 10.5C11.2414 10.5 10.5269 10.4406 9.8586 10.3381C9.7893 10.8615 9.75 11.4159 9.75 12ZM8.38688 10.0288C8.29977 10.6478 8.25 11.3054 8.25 12C8.25 12.6946 8.29977 13.3522 8.38688 13.9712C7.11338 14.3131 6.05882 14.7952 5.24324 15.2591C4.76698 14.2736 4.5 13.168 4.5 12C4.5 10.832 4.76698 9.72644 5.24323 8.74088C6.05872 9.20472 7.1133 9.68686 8.38688 10.0288ZM10.1465 8.86445C10.7258 8.95042 11.3442 9 12.0001 9C12.6559 9 13.2743 8.95043 13.8535 8.86447C13.5844 7.83055 13.2109 6.95793 12.8382 6.2592C12.5394 5.69894 12.2417 5.25156 12 4.92432C11.7583 5.25156 11.4606 5.69894 11.1618 6.25918C10.7891 6.95791 10.4156 7.83053 10.1465 8.86445ZM15.6131 10.0289C15.7002 10.6479 15.75 11.3055 15.75 12C15.75 12.6946 15.7002 13.3521 15.6131 13.9711C16.8866 14.3131 17.9412 14.7952 18.7568 15.2591C19.233 14.2735 19.5 13.1679 19.5 12C19.5 10.8321 19.233 9.72647 18.7568 8.74093C17.9413 9.20477 16.8867 9.6869 15.6131 10.0289ZM17.9716 7.46178C17.2781 7.85231 16.39 8.25705 15.3224 8.55328C15.0189 7.36304 14.5908 6.35769 14.1618 5.55332C13.9897 5.23077 13.8174 4.94025 13.6527 4.6827C15.4026 5.07623 16.921 6.08136 17.9716 7.46178ZM8.67765 8.55325C7.61001 8.25701 6.7219 7.85227 6.02839 7.46173C7.07906 6.08134 8.59745 5.07623 10.3472 4.6827C10.1826 4.94025 10.0103 5.23076 9.83823 5.5533C9.40924 6.35767 8.98112 7.36301 8.67765 8.55325ZM15.3224 15.4467C15.0189 16.637 14.5908 17.6423 14.1618 18.4467C13.9897 18.7692 13.8174 19.0598 13.6527 19.3173C15.4026 18.9238 16.921 17.9186 17.9717 16.5382C17.2782 16.1477 16.3901 15.743 15.3224 15.4467ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
											fill="#FFFFFF"
										></path>
									</g>
								</svg>
								Web
							</a>
						)}
					</div>
					<button
						onClick={closeModal}
						className="dark:bg-red-500 dark:text-white text-white bg-red-700 dark:hover:bg-red-400 hover:bg-red-600 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 h-fit "
					>
						Close
					</button>
				</div>
			</div>
		</div>
	);
	return createPortal(modal, document.body);
}

function Carousel({setProject, showModal}) {
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
						{projects.map((project, index) => {
							return (
								<SwiperSlide key={index}>
									<Card project={project} setProject={setProject} showModal={showModal} />
								</SwiperSlide>
							);
						})}
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
	const [modalShown, showModal] = useState(false);
	const [project, setProject] = useState(null);
	return (
		<div className="flex flex-col justify-center items-center w-full">
			<h1 className="text-6xl font-bold mb-16">Projects</h1>
			<Carousel setProject={setProject} showModal={showModal} />
			<Modal modalShown={modalShown} showModal={showModal} project={project} setProject={setProject} />
		</div>
	);
}

export default Projects;
