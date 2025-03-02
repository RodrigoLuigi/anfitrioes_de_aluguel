import { Search } from "lucide-react";

interface SearchProductInputProps {
	search: string;
	setSearch: (search: string) => void;
}

export function SearchAccommodationInput({
	search,
	setSearch,
}: SearchProductInputProps) {
	return (
		<div className="flex items-center rounded-lg bg-zinc-600 relative lg:w-2xl m-auto">
			<Search className="text-blue-400 absolute left-3" />
			<input
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Pesquisar acomodações por cidade"
				className="w-full h-14 p-3 pl-12 rounded-lg outline-none bg-transparent border-none placeholder-gray-400 focus:ring-blue-500 focus:ring-2"
			/>
		</div>
	);
}
