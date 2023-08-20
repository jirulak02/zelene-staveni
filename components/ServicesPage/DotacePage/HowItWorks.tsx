import ContainerBezova from "@/components/layout/ContainerBezova";

export default function HowItWorks() {
  return (
    <ContainerBezova>
      <h3 className="text-center text-hneda">Jak to funguje</h3>
      <div className="mx-auto mt-4 max-w-xl space-y-4 md:mt-8 md:space-y-4">
        <p>
          Náš tým odborníků v oblasti stavebnictví a dotací se postará o kompletní technickou
          dokumentaci, kterou budete potřebovat k vyřízení dotace.
        </p>
        <p>Podání dotace Vám vyřídí firma, která Vám zařizuje hlavní oblast podpory.</p>
        <p>My ale celý proces dobře známe, takže Vám rádi s čímkoli pomůžeme.</p>
        <p>
          V případě dotazů ohledně dotací pište na email{" "}
          <a
            className="border-b border-bezova text-zelena hover:border-zelena"
            href="mailto:dotace@zelenestaveni.cz"
            target="_blank"
            rel="noopener noreferrer"
          >
            dotace@zelenestaveni.cz
          </a>{" "}
          nebo volejte na{" "}
          <a
            className="border-b border-bezova text-zelena hover:border-zelena"
            href="tel:+420777898501"
            target="_blank"
            rel="noopener noreferrer"
          >
            777 898 501
          </a>
          .
        </p>
      </div>
    </ContainerBezova>
  );
}
