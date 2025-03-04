import { useState, useEffect } from "react";
import { Heart, MapPin, Star } from "lucide-react";
import type { AccommodationProps } from "..";

interface CardAccommodationProps {
	accommodation: AccommodationProps;
}

export function CardAccommodation({ accommodation }: CardAccommodationProps) {
	const [isFavorited, setIsFavorited] = useState(false);

	useEffect(() => {
		const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
		setIsFavorited(favorites.includes(accommodation.id));
	}, [accommodation.id]);

	function handleFavorite(event: React.MouseEvent<HTMLButtonElement>) {
		event.preventDefault();

		const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

		if (isFavorited) {
			const updatedFavorites = favorites.filter(
				(id: string) => id !== accommodation.id,
			);
			localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
			setIsFavorited(false);
		} else {
			favorites.push(accommodation.id);
			localStorage.setItem("favorites", JSON.stringify(favorites));
			setIsFavorited(true);
		}
	}

	return (
		<a
			href={`/details/${accommodation.id}`}
			className="flex flex-col w-full max-w-[350px] bg-white rounded-sm text-black shadow-md shadow-blue-50/25 hover:scale-[1.015] transition-all 2s ease-in-out outline-none focus:ring-blue-500 focus:ring-2"
		>
			<img
				src={accommodation.image_url}
				alt={`imagem ${accommodation.name}`}
				className="shadow-lg shadow-zinc-500/50 rounded-t-md w-full h-[200px]"
			/>

			<div className="p-6 flex flex-col gap-9 relative">
				<button
					type="button"
					className="absolute right-4 top-4 cursor-pointer z-10"
					onClick={handleFavorite}
				>
					<Heart
						className={`size-6 transition-all duration-300 ${
							isFavorited
								? "fill-red-500 text-red-500"
								: "text-gray-400 hover:text-red-500"
						}`}
					/>
				</button>
				<div className="flex flex-col items-center justify-center gap-2">
					<h2 className="text-xl font-bold text-blue-900 hover:bg-blue-700">
						{accommodation.name}
					</h2>
					<div className="flex items-center gap-1">
						<Star className="size-5 text-amber-500 fill-amber-400" />
						<Star className="size-5 text-amber-500 fill-amber-400" />
						<Star className="size-5 text-amber-500 fill-amber-400" />
						<Star className="size-5 text-amber-500 fill-amber-400" />
						<Star className="size-5" />
					</div>
				</div>

				<div className="flex gap-1 items-center justify-between text-blue-500">
					<span className="font-bold text-2xl">
						R$
						{Number(accommodation.price_per_night).toFixed(2).replace(".", ",")}
					</span>
					<div className="flex gap-1 items-center">
						<MapPin className="size-5" />
						<span className="">{accommodation.locale}</span>
					</div>
				</div>
			</div>
		</a>
	);
}
