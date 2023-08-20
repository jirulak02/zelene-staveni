export type Data = {
	name: string;
	email: string;
	tel: string;
	town: string;
	address: string;
	postal: string;
	select: string;
	message: string;
};

export async function sendContactForm(data: Data): Promise<number> {
	const res = await fetch("/api/form", {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	});
	return res.status;
}
