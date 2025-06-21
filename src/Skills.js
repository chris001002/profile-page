const Skills = () => {
	let logos = [
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original-wordmark.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original-wordmark.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original-wordmark.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
	];
	return (
		<div className="h-full flex items-center justify-center flex-col lg:px-48 px-4 flex-grow">
			<h1 className="text-6xl font-bold mb-16">Skills</h1>
			<div className="flex md:gap-12 gap-4 flex-wrap flex-row justify-center">
				{logos.map((logo, index) => {
					return <img className="w-32 h-32 hover:scale-110" src={logo} alt="logo" key={index} />;
				})}
			</div>
		</div>
	);
};

export default Skills;
