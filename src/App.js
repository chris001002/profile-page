import "./App.css";
import Navbar from "./navbar";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./projects";
import EduAndWork from "./EduAndWork";
import Contact from "./Contact";

function App() {
	return (
		<div className="App bg-white dark:bg-gray-800 dark:text-white font-poppins scroll-smooth">
			<Navbar />
			<div className="min-h-screen pt-20 flex justify-center items-center snap-start" id="home">
				<Home />
			</div>
			<div className="min-h-screen pt-20 font-poppins snap-start flex justify-center items-center" id="skills">
				<Skills />
			</div>
			<div className="min-h-screen pt-20 font-poppins snap-start flex justify-center items-center flex-col" id="projects">
				<Projects />
			</div>
			<div className="min-h-screen pt-20 font-poppins snap-start flex justify-center items-center flex-col" id="edu&work">
				<EduAndWork />
			</div>
			<div className="min-h-screen pt-20 font-poppins snap-start flex justify-center items-center flex-col" id="contact">
				<Contact />
			</div>
		</div>
	);
}

export default App;
