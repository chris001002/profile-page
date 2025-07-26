const Contact = () => {
	return (
		<div className="flex-grow w-full justify-center items-center lg:flex-row flex-col flex p-5">
			<div className="text-5xl lg:text-9xl lg:w-7/12 font-bold flex-grow grid justify-center items-center">
				<p>
					Let's Work <span className="text-orange-500">Together!</span>
				</p>
			</div>
			<div className="flex-grow text-2xl">
				<h1 className="font-bold pb-3 border-solid border-b-2 border-gray-500">Contact</h1>
				<div className="2xl:grid inline-flex flex-col gap-x-2 gap-y-4 p-5 text-base 2xl:w-full 2xl:grid-cols-2">
					<a className="flex items-center font-bold 2xl:col-span-2 2xl:justify-center" href="https://maps.app.goo.gl/UNr6FVGm53XbrVVX6">
						<img src="https://www.svgrepo.com/download/375444/google-maps-platform.svg" alt="" className="w-8 h-8" />
						<p className="ml-2">Depok, West Java, Indonesia</p>
					</a>
					<a className="flex items-center font-bold" href="https://wa.me/628979690206">
						<img src="https://www.svgrepo.com/download/475692/whatsapp-color.svg" alt="" className="w-8 h-8" />
						<p className="ml-2">+62 8979690206</p>
					</a>
					<a className="flex items-center font-bold" href="https://github.com/chris001002">
						<img src="https://www.svgrepo.com/download/512317/github-142.svg" alt="" className="w-8 h-8" />
						<p className="ml-2">github.com/chris001002</p>
					</a>
					<a className="flex items-center font-bold" href="https://linkedin.com/in/christian001002/">
						<img src="https://www.svgrepo.com/download/448234/linkedin.svg" alt="" className="w-8 h-8" />
						<p className="ml-2">linkedin.com/in/christian001002</p>
					</a>
					<a className="flex items-center font-bold" href="mailto:christian001002@gmail.com">
						<img src="https://www.svgrepo.com/download/381000/new-logo-gmail.svg" alt="" className="w-8 h-8" />
						<p className="ml-2">christian001002@gmail.com</p>
					</a>
					<a
						className="flex items-center font-bold 2xl:col-span-2 2xl:justify-center w-full justify-center bg-lime-600 rounded-full drop-shadow-lg p-2 text-xl"
						href={process.env.PUBLIC_URL.concat("/raw/CV%20Christian.pdf")}
					>
						<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
							<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
							<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
							<g id="SVGRepo_iconCarrier">
								<path
									d="M20 14V17.5C20 20.5577 16 20.5 12 20.5C8 20.5 4 20.5577 4 17.5V14M12 15L12 3M12 15L8 11M12 15L16 11"
									stroke="#f97316"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
							</g>
						</svg>
						<p className="ml-2 dark:text-black text-white">Download CV</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
