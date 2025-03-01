import { MapPin, Star } from "lucide-react";

export function CardAccommodation() {
	return (
		<div className="flex flex-col w-full max-w-[350px] bg-white rounded-sm text-black shadow-md shadow-blue-50/25">
			<img
				src="https://i.ytimg.com/vi/Nx7p4hUB-Qo/maxresdefault.jpg"
				alt="imagem apartamento beira-mar"
				className="shadow-lg shadow-zinc-500/50 rounded-t-md w-full"
			/>

			<div className="p-6 flex flex-col gap-9">
				<div className="flex flex-col items-center justify-center gap-2">
					<h2 className="text-xl font-bold text-blue-900">
						Apartamento Beira-Mar
					</h2>
					<div className="flex items-center gap-1">
						<Star className="size-5 text-amber-500 fill-amber-400" />
						<Star className="size-5 text-amber-500 fill-amber-400" />
						<Star className="size-5 text-amber-500 fill-amber-400" />
						<Star className="size-5 text-amber-500 fill-amber-400" />
						<Star className="size-5" />
					</div>
				</div>

				<div className="flex gap-1 items-center justify-between  text-blue-500">
					<span className="font-bold text-2xl">R$300,00</span>
					<div className="flex gap-1 items-center">
						<MapPin className="size-5" />
						<span className="">Florianópolis, SC</span>
					</div>
				</div>
			</div>
		</div>
	);
}
