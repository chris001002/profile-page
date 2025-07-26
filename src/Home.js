import React from "react";
import Profile from "./images/profileImage.png";
import {TypeAnimation} from "react-type-animation";
function Home() {
	return (
		<div className="flex lg:flex-row flex-col items-center h-full">
			<div className="flex flex-col justify-center w-full lg:w-1/2 h-1/2 lg:h-full">
				<h1 className="font-bold text-6xl">
					Hello, I'm <span className="text-orange-500">Christian</span>
				</h1>
				<h2 className="text-3xl">
					I'm <TypeAnimation sequence={["a Web Developer", 2000, "an AI trainer", 2000]} speed={50} wrapper="span" repeat={Infinity} className="text-orange-500" />
				</h2>
			</div>
			<div className="flex justify-center w-auto lg:w-1/2 h-1/2 lg:h-auto">
				<img src={Profile} alt="profile" />
			</div>
		</div>
	);
}

export default Home;
