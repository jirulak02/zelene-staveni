import { mailOptions, transporter } from "@/lib/nodemailer";

type FieldsType = {
  [key: string]: string;
};

type Data = {
  name: string;
  email: string;
  tel: string;
  town: string;
  address: string;
  postal: string;
  select: string;
  message: string;
  checkbox?: boolean;
};

const ContactMessageFields: FieldsType = {
  name: "Jméno a příjmení:",
  email: "Email:",
  tel: "Telefon:",
  town: "Obec:",
  address: "Adresa:",
  postal: "PSČ:",
  select: "Téma:",
  message: "Zpráva:",
};

function generateEmailContent(data: Data) {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) => (str += `${ContactMessageFields[key]}: \n${val} \n \n`),
    ""
  );
  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<h3 class="form-heading" align="left">${ContactMessageFields[key]}</h3><p class="form-answer" align="left">${val}</p>`);
  }, "");
  const mailTitle = "Nová zpráva z formuláře na webu.";

  return {
    text: stringData,
    html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > <h2>${mailTitle}</h2> <div class="form-container">${htmlData}</div></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`,
  };
}

export async function POST(req: Request) {
  const data: Data = await req.json();
  if (!data.name || !data.email || !data.tel || !data.select || !data.checkbox) {
    return new Response("Invalid form", {
      status: 400,
    });
  }
  delete data.checkbox;

  const escapedData = escapeData(data);
  try {
    await transporter.sendMail({
      ...mailOptions,
      ...generateEmailContent(escapedData),
      subject: "Zelenestaveni.cz formulář",
    });
    return new Response("Form sent successfully", {
      status: 200,
    });
  } catch (error) {
    return new Response("Error while sending form", {
      status: 500,
    });
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeData(data: Data): Data {
  return Object.entries(data).reduce((obj, [key, val]) => {
    return { ...obj, [key]: escapeHtml(val.toString()) };
  }, {} as Data);
}
