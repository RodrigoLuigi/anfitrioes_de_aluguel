import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { api } from "../../services/api";
import { Header } from "../../components/Header";

interface AccommodationDetailsProps {
	id: string;
	name: string;
	image_url: string;
	price_per_night: number;
	locale: string;
}

export function Details() {
	const { id } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [accommodationData, setAccommodationData] =
		useState<AccommodationDetailsProps | null>(null);

	const navigate = useNavigate();

	function handleBack() {
		navigate(-1);
	}

	useEffect(() => {
		async function fetchAccommodation() {
			try {
				setIsLoading(true);
				const response = await api.get(`/acomodacoes/${id}`);
				setAccommodationData(response.data as AccommodationDetailsProps);
			} catch (error) {
				alert("Não foi possível carregar os dados da acomodação.");
				setIsLoading(false);
			} finally {
				setTimeout(() => {
					setIsLoading(false);
				}, 500);
			}
		}

		fetchAccommodation();
	}, [id]);

	return (
		<>
			<Header />

			<div>
				{isLoading ? (
					<div className="h-[522px] w-full flex items-center justify-center">
						<div className="w-16 h-16 border-4 border-t-transparent border-solid rounded-full animate-spin border-blue-100" />
					</div>
				) : (
					<div className="flex flex-col gap-16 py-16  max-w-[550px] mx-auto px-6 md:px-0">
						<button
							type="button"
							onClick={handleBack}
							className="self-end flex gap-1 text-blue-100 cursor-pointer hover:text-blue-300 hover:gap-2 transition-all duration-300"
						>
							<ArrowLeft /> Voltar
						</button>

						<div className="space-y-8">
							<img
								src={accommodationData?.image_url}
								alt={`imagem ${accommodationData?.name}`}
								className="shadow-lg shadow-zinc-500/50 rounded-t-md w-full h-[300px]"
							/>
							<div className="space-y-4">
								<h2 className="text-4xl">{accommodationData?.name}</h2>
								<div className="h-px w-full bg-blue-500" />
							</div>

							<p className="text-green-200">{accommodationData?.locale}</p>

							<div className="flex items-center justify-between">
								<span className="p-3 rounded-md bg-zinc-900 ring-2 ring-blue-500 font-bold text-sm">
									R${" "}
									{Number(accommodationData?.price_per_night)
										.toFixed(2)
										.replace(".", ",")}
								</span>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
}
