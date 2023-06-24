"use client";

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	return (
		<div className="absolute top-0 z-50 flex h-full w-full flex-col justify-center space-y-3 bg-neutral-100 p-3 text-center">
			<h2 className="font-semibold">Něco se pokazilo!</h2>
			<button
				className="m-auto rounded-3xl bg-zelena px-4 py-2 text-neutral-100 hover:bg-neutral-800 md:px-5 md:py-3"
				onClick={() => reset()}
			>
				ZKUSIT ZNOVU
			</button>
			<p>
				Pokud tlačítko nepomáhá, tak se prosím vraťte na předchozí
				stránku.
			</p>
		</div>
	);
}
