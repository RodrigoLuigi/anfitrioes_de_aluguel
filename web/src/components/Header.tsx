import { Github, Instagram, Linkedin } from "lucide-react";
import anfitrioesLogo from "../assets/anfitrioes_de_aluguel_logo.png";
import vooTrajetoria from "../assets/voo-trajetoria.png";
export function Header() {
	return (
		<header className="flex flex-col items-center gap-2 bg-white p-4 border-b border-solid border-indigo-950 relative overflow-hidden sm:flex-row lg:p-0 lg:px-24 sm:justify-between">
			<img
				src={anfitrioesLogo}
				alt="logo anfitriões de aluguel"
				className="w-60"
			/>

			<img
				src={vooTrajetoria}
				alt="trajetória voo de avião"
				className="w-96 h-28 absolute top-12 -rotate-[25deg] opacity-25 sm:relative sm:rotate-0 sm:top-0 sm:opacity-100"
			/>

			<div className="flex flex-col gap-2">
				<span className="text-blue-900 font-normal text-xs lg:text-sm">
					Developed by: Rodrigo Luigi
				</span>

				<div className="flex justify-center gap-4">
					<a
						href="https://www.instagram.com/lrodrigo_luigi/"
						className="size-6 lg:size-10 bg-blue-900 rounded-md flex items-center justify-center text-[#ffffff] outline-none hover:text-blue-300 focus:ring-blue-500 focus:ring-2"
						target="_blank"
						rel="noreferrer"
					>
						<Instagram className="size-3 lg:size-6" />
					</a>

					<a
						href="https://www.linkedin.com/in/rodrigo-luigi/"
						className="size-6 lg:size-10 bg-blue-900 rounded-md flex items-center justify-center text-[#ffffff] outline-none hover:text-blue-300 focus:ring-blue-500 focus:ring-2"
						target="_blank"
						rel="noreferrer"
					>
						<Linkedin className="size-3 lg:size-6" />
					</a>

					<a
						href="https://github.com/RodrigoLuigi"
						className="size-6 lg:size-10 bg-blue-900 rounded-md flex items-center justify-center text-[#ffffff] outline-none hover:text-blue-400 focus:ring-blue-400 focus:ring-2"
						target="_blank"
						rel="noreferrer"
					>
						<Github className="size-3 lg:size-6" />
					</a>
				</div>
			</div>
		</header>
	);
}
