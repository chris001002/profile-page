import Profile from "./images/profileImage.png";

const STACK = "React \u00b7 React Native \u00b7 Django REST \u00b7 LangGraph / RAG \u00b7 PostgreSQL & SQL Server";

const SUMMARY =
	"Full-Stack Engineer building React and React Native front ends on Django REST and SQL Server backends. Cut enterprise ingestion time 50% at Kalbe International; GPA 3.91/4.00, Magna Cum Laude.";

const ctaClass =
	"font-bold rounded-full px-6 py-3 text-base drop-shadow-lg transition duration-200 inline-flex items-center justify-center";
const primaryCta = `${ctaClass} bg-lime-600 text-white dark:text-black hover:bg-lime-700`;
const secondaryCta = `${ctaClass} border-2 border-orange-500 text-orange-600 dark:text-orange-400 hover:bg-orange-500 hover:text-white`;

function Home() {
	return (
		<div className="flex lg:flex-row flex-col items-center h-full w-full">
			<div className="flex flex-col justify-center w-full lg:w-1/2 px-5 md:px-16 py-8">
				<h1 className="font-bold text-6xl">
					<span className="text-orange-500">Christian</span> — Full-Stack Engineer
				</h1>
				<h2 className="text-2xl font-semibold mt-3 text-black/70 dark:text-gray-300">{STACK}</h2>
				<p className="text-lg mt-5 leading-relaxed max-w-xl">{SUMMARY}</p>
				<div className="flex flex-wrap gap-3 mt-8">
					<a className={primaryCta} href={process.env.PUBLIC_URL.concat("/raw/CV%20Christian.pdf")}>
						Download CV
					</a>
					<a className={secondaryCta} href="https://github.com/chris001002">
						GitHub
					</a>
					<a className={secondaryCta} href="https://linkedin.com/in/christian001002">
						LinkedIn
					</a>
				</div>
			</div>
			<div className="flex justify-center w-auto lg:w-1/2 max-h-[60vh]">
				<img src={Profile} alt="Christian" className="max-h-[60vh] w-auto object-contain" />
			</div>
		</div>
	);
}

export default Home;
