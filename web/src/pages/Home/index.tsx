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

	useEffect(() => {
		async function fetchAccommodations() {
			const response = await api.get("/acomodacoes");
			setAccommodations(response.data as AccommodationProps[]);
		}

		fetchAccommodations();
	}, []);

	return (
		<>
			<Header />

			<main className="w-full px-6 py-12 lg:px-24">
				<SearchAccommodationInput />

				<div className="flex flex-col mt-14 gap-12 md:flex-row flex-wrap items-center justify-center lg:gap-8">
					{accommodations.length > 0 &&
						accommodations.map((accommodation) => (
							<CardAccommodation
								key={accommodation.id}
								accommodation={accommodation}
							/>
						))}
				</div>
			</main>
		</>
	);
}
