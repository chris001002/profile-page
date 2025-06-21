import React, {useState} from "react";
function Navbar() {
	const [hiddenNav, setNav] = useState(true);
	const handleNav = () => {
		setNav(!hiddenNav);
		console.log(hiddenNav);
	};
	return (
		<header className={"border-double border-b-4 dark:border-gray-500 fixed top-0 w-full z-10 bg-white dark:bg-gray-800".concat(hiddenNav ? " h-20" : "")}>
			<div className="py-4 px-2 lg:mx-4 xl:mx-12">
				<nav className="flex items-center flex-wrap justify-between">
					<div className="mt-2 font-bold">Christian</div>
					<div className="block lg:hidden">
						<button className="navbar-burger flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white " onClick={handleNav}>
							<svg className="fill-current h-6 w-6 text-gray-700" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<title>Menu</title>
								<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
							</svg>
						</button>
					</div>
					<div id="main-nav" className={"w-full lg:flex items-center lg:w-auto lg:justify-end bg-white dark:bg-gray-800".concat(hiddenNav ? " hidden" : "")}>
						<div className="text-sm lg:flex-grow mt-2 animated jackinthebox xl:mx-8">
							<a
								href="#home"
								className="block lg:inline-block text-md font-bold  text-orange-500  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
								onClick={handleNav}
								key={0}
							>
								HOME
							</a>
							{["SKILLS", "PROJECTS", "EDUCATION & WORK", "CONTACT"].map((item, index) => {
								return (
									<a
										href={"#" + (item === "EDUCATION & WORK" ? "edu&work" : item.toLowerCase())}
										className="block lg:inline-block text-md font-bold  text-gray-900 dark:text-white sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
										onClick={handleNav}
										key={index + 1}
									>
										{item}
									</a>
								);
							})}
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
}

export default Navbar;
