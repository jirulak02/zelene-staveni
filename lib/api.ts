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
	return await fetch("/api/form", {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	}).then(async (res) => {
		if (res.status !== 200) {
			return 400;
		}
		return 200;
	});
}
