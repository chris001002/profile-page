const EduAndWork = () => {
	return (
		<div className="w-full px-5 md:px-32 pt-6 md:pt-8 pb-6 md:pb-8">
			<h1 className="text-6xl font-bold mb-10">Education and Work</h1>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
				<div className="bg-orange-400 dark:bg-gray-700 rounded-lg drop-shadow-lg p-10 w-full text-black dark:text-white h-fit">
					<h1 className="text-4xl font-bold w-full border-solid border-b-2 border-amber-300 dark:border-gray-500 pb-3">Education</h1>
					<div className="text-2xl font-bold text-left border-solid border-l-4 border-amber-300 dark:border-gray-500 mt-4 ml-2 pl-3">
						<p className="text-xl text-red-800 dark:text-gray-300 font-normal text-left">2023 - 2026</p>
						<p className="text-left">President University — Bekasi, Indonesia</p>
						<p className="font-normal text-xl text-left">Bachelor of Computer Science — Magna Cum Laude</p>
						<p className="font-normal text-lg mt-1 text-left">GPA: 3.91 / 4.00</p>
						<div className="flex flex-wrap gap-2 mt-3">
							<span className="px-3 py-1 rounded-full bg-amber-300/90 dark:bg-gray-600 text-sm font-semibold text-black dark:text-white">Jababeka Scholarship 75% (2nd Rank)</span>
							<span className="px-3 py-1 rounded-full bg-white/80 dark:bg-gray-600 text-sm font-semibold text-black dark:text-white">2nd Place — App Category, Economic Survival Exhibition</span>
							<span className="px-3 py-1 rounded-full bg-white/80 dark:bg-gray-600 text-sm font-semibold text-black dark:text-white">PRESCOME — Learning Division Member</span>
						</div>
					</div>
				</div>
				<div className="bg-orange-400 dark:bg-gray-700 rounded-lg drop-shadow-lg p-10 w-full dark:text-white text-black">
					<h1 className="text-4xl font-bold w-full border-solid border-b-2 border-amber-300 dark:border-gray-500 pb-3">Work experience</h1>
					<div className="border-solid border-l-4 border-amber-300 dark:border-gray-500 mt-4 ml-2 pl-3 text-left">
						<p className="text-xl text-red-800 dark:text-gray-300 font-normal text-left">Dec 2025 - May 2026</p>
						<p className="text-2xl font-bold text-left">Kalbe International — Jakarta Timur</p>
						<p className="text-xl font-normal text-left">Full Stack Developer — <b className="font-bold">Intern</b></p>
						<p className="text-base font-normal text-black/70 dark:text-gray-300 mt-2 leading-relaxed text-left">Optimized MySQL dashboards to cut load time by 50% and integrated NetSuite SOAP APIs to centralize sales data, with Python automation for 1,000+ records.</p>
					</div>
					<div className="border-solid border-l-4 border-amber-300 dark:border-gray-500 mt-4 ml-2 pl-3 text-left">
						<p className="text-xl text-red-800 dark:text-gray-300 font-normal text-left">Aug 2025 - Dec 2025</p>
						<p className="text-2xl font-bold text-left">President University — Bekasi</p>
						<p className="text-xl font-normal text-left">Mobile Application Developer & AI Engineer — <b className="font-bold">Intern</b></p>
						<p className="text-base font-normal text-black/70 dark:text-gray-300 mt-2 leading-relaxed text-left">Enhanced RAG chatbot for 1,000+ students and built React Native app; deployed LangGraph + MongoDB agent for design-thinking workshops.</p>
					</div>
					<div className="border-solid border-l-4 border-amber-300 dark:border-gray-500 mt-4 ml-2 pl-3 text-left">
						<p className="text-xl text-red-800 dark:text-gray-300 font-normal text-left">Sep 2025 - Dec 2025</p>
						<p className="text-2xl font-bold text-left">President University — Bekasi</p>
						<p className="text-xl font-normal text-left">Programming Concept Lab Assistant — <b className="font-bold">Part-Time</b></p>
						<p className="text-base font-normal text-black/70 dark:text-gray-300 mt-2 leading-relaxed text-left">Mentored 40+ freshmen in programming fundamentals and data structures, graded 3 cohorts, and created hands-on lab exercises.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EduAndWork;
