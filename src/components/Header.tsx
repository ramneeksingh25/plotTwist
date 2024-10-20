import { PiFilmReelFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import { useAccount } from "wagmi";
import ConnectBtn from "./ConnectBtn";

const Header = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<>
			<nav
				className="fixed z-40 w-full grid grid-cols-8 items-center h-20 px-[4vw] bg-gradient-to-l from-gray-800/20
			dark:from-red-400/5 to-zinc-800/20 dark:to-red-800/10 backdrop-blur-sm">
				<Logo />
				<Menu />
				<div className="col-span-2"></div>
				<ButtonMenu
					toggleTheme={toggleTheme}
					theme={theme}
				/>
			</nav>
		</>
	);
};

const Logo = () => (
	<>
		<div className="relative hidden items-center justify-center col-span-1 md:flex lg:flex">
			<Link to={"/"}>
				<span className="flex items-center justify-center rounded-xl text-[19px] hover:text-[21px] text-white bg-gray-800/50 dark:bg-gray-200/20 px-[20px] py-[15px] transition-all duration-150 font-PW before:ease relative h-12 w-40 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-zinc-900/90 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180 ">
					<span className="relative z-10">
						Pl
						<PiFilmReelFill className="inline text-red-500" />t
						<span className="text-red-500 font-[1100]">Twist</span>
					</span>
				</span>
			</Link>
		</div>
		<div className="relative col-span-1 block md:hidden lg:hidden">
			<Link to={"/"}>
				<span className="flex items-center justify-center rounded-xl text-[19px] hover:text-[21px] text-white bg-gray-800/50 dark:bg-gray-200/20 px-[20px] py-[15px] transition-all duration-150 font-PW before:ease relative h-12 w-40 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-zinc-900/90 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180 ">
					<span className="relative z-10">
						<PiFilmReelFill className="inline text-red-500" />
					</span>
				</span>
			</Link>
		</div>
	</>
);
const Menu = () => (
	<>
		<ul className="lg:flex items-center justify-around col-span-3 hidden sm:hidden md:hidden">
			{["Home", "Explore Ideas", "Pricing", "How It Works","Dashboard"].map((menu) => {
				return (
					<li key={menu}>
						<Link
							to={
								menu == "Home"
									? "/"
									: `/${menu.toLowerCase().replace(/\s/g, "")}`
							}
							className="font-medium group">
							<p className="text-lg m-6 group relative w-max text-black dark:text-white hover:text-red-500 dark:hover:text-yellow-400 transition-colors duration-150">
								<span>{menu}</span>
								<span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-500 dark:bg-yellow-400 group-hover:w-full"></span>
							</p>
						</Link>
					</li>
				);
			})}
		</ul>
		<div className="col-span-2 block lg:hidden"></div>
	</>
);
const ButtonMenu = ({
	toggleTheme,
	theme,
}: {
	toggleTheme: () => void;
	theme: string;
}) => {
	const { isConnected } = useAccount();

	return (
		<div className="flex items-center justify-end gap-[2vw] col-span-3 md:col-span-2 lg:col-span-2">
			{isConnected ? (
				<Link to={"/signin"}>
					<button className="before:ease relative px-5 py-2 overflow-hidden border border-red-600 bg-red-600 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-red-600 hover:before:-translate-x-40 font-QS font-extrabold">
						<span className="relative z-10">Sign In</span>
					</button>
				</Link>
			) : (
				<ConnectBtn connectMessage="Connect Wallet" />
			)}
			<div
				className="w-fit rounded-full cursor-pointer hover:underline hover:text-white hover:dark:bg-indigo-500 dark:text-indigo-500 hover:bg-orange-400 text-orange-400 bg-zinc-900 transition-colors duration-150 p-2 border border-orange-400 dark:border-indigo-500"
				onClick={toggleTheme}>
				{theme == "dark" ? <FaMoon /> : <FaSun />}
			</div>
		</div>
	);
};
export default Header;
