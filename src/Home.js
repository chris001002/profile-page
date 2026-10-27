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
			<div className="flex flex-col justify-center w-full lg:w-1/2 px-5 md:px-16 py-8 text-left">
				<h1 className="font-bold text-4xl lg:text-5xl 2xl:text-6xl leading-tight">
					<span className="block text-orange-500">Christian</span>{" "}
					<span className="block whitespace-nowrap">Full-Stack Engineer</span>
				</h1>
				<h2 className="text-2xl font-semibold mt-3 text-black/70 dark:text-gray-300">{STACK}</h2>
				<p className="text-lg mt-5 leading-relaxed max-w-xl">{SUMMARY}</p>
				<div className="flex flex-wrap gap-3 mt-8">
					<a className={primaryCta} href={process.env.PUBLIC_URL.concat("/raw/CV%20Christian.pdf")}>
						<svg className="w-6 h-6 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<mask id="cvPdfMask">
								<rect width="24" height="24" fill="black" />
								<path
									fill="white"
									d="M6 2h6.9c.53 0 1.04.21 1.41.59l5.1 5.1c.37.37.59.88.59 1.41v11.4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm7 7.4V4.6l4.8 4.8H13Z"
								/>
								<text
									x="11.55"
									y="18.2"
									textAnchor="middle"
									textLength="11.4"
									lengthAdjust="spacingAndGlyphs"
									fontFamily="Arial, Helvetica, sans-serif"
									fontSize="6.6"
									fontWeight="700"
									fill="black"
								>
									PDF
								</text>
							</mask>
							<rect width="24" height="24" fill="currentColor" mask="url(#cvPdfMask)" />
						</svg>
						Download CV
					</a>
					<a className={secondaryCta} href="https://github.com/chris001002">
						<svg className="w-5 h-5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
							<path
								fillRule="evenodd"
								d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
								clipRule="evenodd"
							/>
						</svg>
						GitHub
					</a>
					<a className={secondaryCta} href="https://linkedin.com/in/christian001002">
						<svg className="w-5 h-5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
							<path d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z" />
						</svg>
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
