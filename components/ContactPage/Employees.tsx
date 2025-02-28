import { useTranslations } from "next-intl";

import Person from "./Person";

export default function Employees() {
  const t = useTranslations("ContactPage.Employees");

  return (
    <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <Person
        title={t("petr.title")}
        phone="+420 608 974 908"
        email="simecek@zelenestaveni.cz"
        name={t("petr.name")}
        img="https://utfs.io/f/e279f5dd-aeaa-46f8-abd9-6e17f52f35c3_petr.png"
      />
      <Person
        title={t("simona.title")}
        phone="+420 773 225 535"
        email="krausova@zelenestaveni.cz"
        name={t("simona.name")}
        img="https://utfs.io/f/1197a86b-3f7e-400d-a8a3-135f5cc29731_simona.png"
      />
      <Person
        title={t("jirka.title")}
        phone="+420 777 898 501"
        email="dotace@zelenestaveni.cz"
        name={t("jirka.name")}
        img="https://utfs.io/f/44fc68f8-9525-4ee2-b973-97adb6346b5f_jirka.png"
      />
    </div>
  );
}
