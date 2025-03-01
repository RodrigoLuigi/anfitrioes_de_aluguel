import { Github, Instagram, Linkedin } from "lucide-react";
import anfitrioesLogo from "../../public/anfitrioes_de_aluguel_logo.png";

export function Header() {
	return (
		<header className="flex flex-col items-center gap-2 bg-white p-4 border-b border-solid border-indigo-950 lg:flex-row lg:p-0 lg:px-24 lg:justify-between">
			<img
				src={anfitrioesLogo}
				alt="logo anfitriões de aluguel"
				className="w-60"
			/>

			<div className="flex flex-col gap-2">
				<span className="text-blue-900 font-bold text-xs lg:text-base">
					Developed by: Rodrigo Luigi
				</span>

				<div className="flex justify-center gap-4">
					<a
						href="https://www.instagram.com/lrodrigo_luigi/"
						className="size-8 lg:size-12 bg-blue-900 rounded-md flex items-center justify-center text-[#ffffff] hover:text-blue-300"
						target="_blank"
						rel="noreferrer"
					>
						<Instagram className="size-5 lg:size-8" />
					</a>

					<a
						href="https://www.linkedin.com/in/rodrigo-luigi/"
						className="size-8 lg:size-12 bg-blue-900 rounded-md flex items-center justify-center text-[#ffffff] hover:text-blue-300"
						target="_blank"
						rel="noreferrer"
					>
						<Linkedin className="size-5 lg:size-8" />
					</a>

					<a
						href="https://github.com/RodrigoLuigi"
						className="size-8 lg:size-12 bg-blue-900 rounded-md flex items-center justify-center text-[#ffffff] hover:text-blue-300"
						target="_blank"
						rel="noreferrer"
					>
						<Github className="size-5 lg:size-8" />
					</a>
				</div>
			</div>
		</header>
	);
}
