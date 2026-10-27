const skillLines = [
	["Languages", "Python, JavaScript, TypeScript, SQL"],
	["Frontend & Backend", "React, React Native, Django REST, REST APIs, Tailwind CSS"],
	["Data & Tooling", "PostgreSQL, Microsoft SQL Server, MongoDB (Vector DB), Docker, Git"],
	["AI & LLM", "LangGraph, LangChain, RAG, vector search, Text-to-SQL, PyTorch, OpenCV, YOLO"],
];

const Skills = () => {
	let logos = [
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-plain-wordmark.svg",
		// "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
		// "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original-wordmark.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original-wordmark.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original-wordmark.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original-wordmark.svg",
		"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
	];
	return (
		<div className="h-full flex items-center justify-center flex-col lg:px-48 px-4 flex-grow">
			<h1 className="text-6xl font-bold mb-10">Skills</h1>
			<div className="w-full max-w-3xl flex flex-col gap-2 mb-12">
				{skillLines.map(([label, value], index) => {
					return (
						<p key={index} className="text-base md:text-lg text-left">
							<span className="font-bold">{label}</span>: {value}
						</p>
					);
				})}
			</div>
			<div className="flex md:gap-12 gap-4 flex-wrap flex-row justify-center">
				{logos.map((logo, index) => {
					return <img className="size-32 hover:scale-110" src={logo} alt="logo" key={index} />;
				})}
			</div>
		</div>
	);
};

export default Skills;
