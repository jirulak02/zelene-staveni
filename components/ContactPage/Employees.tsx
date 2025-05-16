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
        title={t("jan.title")}
        phone="+420 724 442 994"
        email="simecekjan@zelenestaveni.cz"
        name={t("jan.name")}
        img="https://umrf3yo50m.ufs.sh/f/HIQYggzyOZqjlqZqvkiLpIQyiwG3SboUgJ7tBPxeDk2fqEn6"
      />
      <Person
        title={t("simona.title")}
        phone="+420 773 225 535"
        email="krausova@zelenestaveni.cz"
        name={t("simona.name")}
        img="https://utfs.io/f/1197a86b-3f7e-400d-a8a3-135f5cc29731_simona.png"
      />
    </div>
  );
}
