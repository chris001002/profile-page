import "./App.css";
import Navbar from "./navbar";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./projects";
import EduAndWork from "./EduAndWork";
import Contact from "./Contact";
import {useEffect} from "react";

function App() {
	useEffect(() => {
		const els = document.querySelectorAll('[data-animate="slide-up"]');
		if (!els.length) return;

		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("animate-slide-up");
						io.unobserve(entry.target);
					}
				});
			},
			{threshold: 0.12}
		);

		els.forEach((el, i) => {
			const delay = el.dataset.delay || `${i * 120}ms`;
			el.style.animationDelay = delay;
			io.observe(el);
		});

		return () => io.disconnect();
	}, []);

	return (
		<div className="App bg-white dark:bg-gray-800 dark:text-white font-poppins scroll-smooth">
			<Navbar />
			<div data-animate="slide-up" className="min-h-screen pt-20 flex justify-center items-center snap-start opacity-0" id="home">
				<Home />
			</div>
			<div data-animate="slide-up" className="min-h-screen pt-20 font-poppins snap-start flex justify-center items-center opacity-0" id="skills">
				<Skills />
			</div>
			<div data-animate="slide-up" className="min-h-screen pt-20 font-poppins snap-start flex justify-center items-center flex-col opacity-0" id="projects">
				<Projects />
			</div>
			<div data-animate="slide-up" className="min-h-screen pt-20 font-poppins snap-start flex justify-center items-center flex-col opacity-0" id="edu&work">
				<EduAndWork />
			</div>
			<div data-animate="slide-up" className="min-h-screen pt-20 font-poppins snap-start flex justify-center items-center flex-col opacity-0" id="contact">
				<Contact />
			</div>
		</div>
	);
}

export default App;
