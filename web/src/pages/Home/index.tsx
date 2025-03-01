import { Header } from "../../components/Header";
import { SearchAccommodationInput } from "./components/search-accommodation-input";
import { CardAccommodation } from "./components/card-accommodation";

export function Home() {
	return (
		<>
			<Header />

			<main className="w-full p-6 lg:px-24">
				<SearchAccommodationInput />

				<div className="flex flex-col mt-20 gap-12 md:flex-row flex-wrap items-center justify-center lg:justify-normal lg:gap-8">
					<CardAccommodation />
					<CardAccommodation />
					<CardAccommodation />
					<CardAccommodation />
					<CardAccommodation />
				</div>
			</main>
		</>
	);
}
