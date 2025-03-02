import { Header } from "../../components/Header";
import { SearchAccommodationInput } from "./components/search-accommodation-input";
import { CardAccommodation } from "./components/card-accommodation";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
export interface AccommodationProps {
	id: string;
	name: string;
	image_url: string;
	price_per_night: number;
	locale: string;
}

export function Home() {
	const [accommodations, setAccommodations] = useState<AccommodationProps[]>(
		[],
	);
	const [search, setSearch] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchAccommodations() {
			try {
				setIsLoading(true);
				const response = await api.get(`/acomodacoes/busca?locale=${search}`);
				setAccommodations(response.data as AccommodationProps[]);
			} catch (error) {
				alert("Não foi possível carregar as acomodações.");
				setIsLoading(false);
			} finally {
				setTimeout(() => {
					setIsLoading(false);
				}, 500);
			}
		}

		fetchAccommodations();
	}, [search]);

	return (
		<>
			<Header />

			<main className="w-full px-6 py-12 lg:px-24">
				<SearchAccommodationInput search={search} setSearch={setSearch} />

				<div className="flex flex-col mt-14 gap-12 md:flex-row flex-wrap items-center justify-center lg:gap-8">
					{isLoading ? (
						<div className="h-[200px] w-full flex items-center justify-center">
							<div className="w-16 h-16 border-4 border-t-transparent border-solid rounded-full animate-spin border-customGreen" />
						</div>
					) : accommodations.length > 0 ? (
						accommodations.map((accommodation) => (
							<CardAccommodation
								key={accommodation.id}
								accommodation={accommodation}
							/>
						))
					) : (
						<p className="text-gray-500 text-lg">
							Nenhuma acomodação encontrada.
						</p>
					)}
				</div>
			</main>
		</>
	);
}
