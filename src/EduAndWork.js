const EduAndWork = () => {
	return (
		<div className="w-full px-5 md:px-32">
			<h1 className="text-6xl font-bold mb-10">Education and Work</h1>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
				<div className="bg-orange-400 dark:bg-gray-700 rounded-lg drop-shadow-lg p-10 w-full text-black dark:text-white">
					<h1 className="text-4xl font-bold w-full border-solid border-b-2 border-amber-300 dark:border-gray-500 pb-3">Education</h1>
					<div className="text-2xl font-bold text-justify border-solid border-l-4 border-amber-300 dark:border-gray-500 mt-3 ml-2 pl-2">
						<p className="text-xl text-red-800 dark:text-gray-300 font-normal">2023 - Present</p>
						<p>President University</p>
						<p className="font-normal text-xl">Bachelor's degree in Computer Science</p>
						<p className="font-normal text-xl">GPA: 3.96/4.00</p>
					</div>
					<div className="text-2xl font-bold text-left border-solid border-l-4 border-amber-300 dark:border-gray-500 mt-3 ml-2 pl-2">
						<p className="text-xl text-red-800 dark:text-gray-300 font-normal">2020 - 2023</p>
						<p>Mardi Yuana High School Depok</p>
						<p className="font-normal text-xl">Natural Science Concentration</p>
					</div>
				</div>
				<div className="bg-orange-400 dark:bg-gray-700 rounded-lg drop-shadow-lg p-10 w-full dark:text-white text-black">
					<h1 className="text-4xl font-bold w-full border-solid border-b-2 border-amber-300 dark:border-gray-500 pb-3">Work experience</h1>
					<div className="text-2xl font-bold  text-justify border-solid border-l-4 border-amber-300 dark:border-gray-500 mt-3 ml-2 pl-2 ">
						<p className="text-xl text-red-800 dark:text-gray-300 font-normal">Oct 2023 - Dec 2023</p>
						<p>President Research Center (President University)</p>
						<p className="font-normal text-xl">
							Research Assistant for Virtual Reality Development - <b className="font-bold">Internship</b>
						</p>
						<p className="font-normal text-xl text-black opacity-60 dark:text-gray-300">
							Developed VR therapy experiences in SimLab based on therapeutic scripts, including interactive scenes and post-session animations to enhance engagement and outcomes.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EduAndWork;
