
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ONas = () => {
  const team = [
    {
      name: 'Tomáš Bahník',
      role: 'Zakladatel',
      description: 'Tom založil Nech Mě Růst z hluboké lásky k přírodě a zvířatům. Jeho vize vytváří směr a energii našeho společenství.',
    },
    {
      name: 'Petr Novák',
      role: 'Přírodní stavitel',
      description: 'Petr má více než 10 let zkušeností s přírodním stavitelstvím a vede všechny naše stavební projekty.',
    },
    {
      name: 'Jana Svobodová',
      role: 'Péče o zvířata',
      description: 'Jana se stará o všechna zvířata na našem statku. Její láska a péče pomáhá uzdravovat i ta nejtraumatizovanější zvířata.',
    },
  ];

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-forest-900 to-forest-800 py-20 md:py-28">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-amber-200 mb-6">O nás</h1>
            <p className="text-xl text-amber-100">
              Poznejte spolek Nech Mě Růst, naši vizi a poslání, i příběh, který nás přivedl až sem.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-forest-800">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 space-y-6">
              <h2 className="section-heading">Náš příběh</h2>
              <div className="text-amber-100/90 space-y-4">
                <p>
                  Spolek Nech Mě Růst vznikl z touhy vytvořit místo, kde by všechny živé bytosti mohly žít v harmonii a vzájemném respektu. Vše začalo před několika lety, když se skupina přátel rozhodla, že chtějí žít jinak - blíže k přírodě, blíže k sobě navzájem a v souladu s udržitelnými principy.
                </p>
                <p>
                  Postupně se tato vize začala formovat do konkrétní podoby rodového statku. Našli jsme kouzelné místo v srdci jižních Čech, kde jsme začali budovat náš sen. Začátky nebyly jednoduché, ale s každým dnem, s každou novou rostlinou, zvířetem i člověkem, který přišel, jsme rostli a učili se.
                </p>
                <p>
                  Dnes je Nech Mě Růst komunitou lidí různých věkových kategorií, profesí i životních příběhů, které spojuje společná vize: vytváření prostoru, kde se můžeme vzájemně podporovat na cestě osobního růstu, kde můžeme pečovat o zvířata v nouzi a kde stavíme v souladu s přírodou.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="relative">
                {/* Placeholder for story image */}
                <div className="aspect-square bg-forest-700 rounded-tr-3xl rounded-bl-3xl overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-br from-forest-800 to-forest-700 flex items-center justify-center">
                    <p className="text-amber-200/70 text-lg">Obrázek z historie spolku</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 md:py-24 bg-forest-900">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                {/* Placeholder for vision image */}
                <div className="aspect-[4/3] bg-forest-700 natural-image overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-br from-forest-700 to-forest-800 flex items-center justify-center">
                    <p className="text-amber-200/70 text-lg">Vizualizace rodového statku</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="section-heading">Naše vize a poslání</h2>
              <div className="space-y-4 text-amber-100/90">
                <p>
                  Naší vizí je vytvořit rodový statek jako živý organismus, kde všechny části - lidé, zvířata, rostliny i stavby - koexistují v harmonii a vzájemně se podporují ve svém růstu.
                </p>
                <p>
                  Věříme, že způsob, jakým žijeme a jak zacházíme se světem kolem nás, má hluboký dopad na naše blaho i na zdraví celé planety. Proto se snažíme žít vědomě, s úctou k tradičním hodnotám, ale i s otevřeností k novým, udržitelným přístupům.
                </p>
                <p>
                  Naším posláním je nejen vytvářet takové prostředí pro nás samotné, ale také inspirovat ostatní, sdílet naše zkušenosti a znalosti, a tím přispívat k širší společenské transformaci směrem k harmoničtějšímu vztahu s naším prostředím.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24 bg-forest-800">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-heading">Náš tým</h2>
            <p className="text-amber-100/90 text-xl mx-auto max-w-3xl">
              Poznejte lidi, kteří stojí za spolkem Nech Mě Růst a každý den přispívají k naší společné vizi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="content-inner-card">
                <div className="h-64 bg-forest-700 flex items-center justify-center">
                  <p className="text-amber-200/70">Fotografie člena týmu</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-1 text-amber-200">{member.name}</h3>
                  <p className="text-amber-100/80 font-medium mb-3">{member.role}</p>
                  <p className="text-amber-100/70">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rodovy Statek */}
      <section className="py-16 md:py-24 bg-forest-900">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-heading">Rodový statek</h2>
            <p className="text-amber-100/90 text-xl mx-auto max-w-3xl">
              Náš rodový statek je místem, kde se spojuje minulost s budoucností, tradice s inovacemi, a kde vytváříme odkaz pro další generace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-8 content-inner-card">
              <div className="h-16 w-16 rounded-full bg-amber-900/30 flex items-center justify-center mb-4">
                <p className="text-amber-200 text-xl">1</p>
              </div>
              <h3 className="text-xl font-medium mb-3 text-amber-200">Současný stav</h3>
              <p className="text-amber-100/70">
                V současnosti máme několik dokončených staveb postavených přírodními technikami, zahradu s permakulturními principy a útočiště pro zvířata v nouzi.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 content-inner-card">
              <div className="h-16 w-16 rounded-full bg-amber-900/30 flex items-center justify-center mb-4">
                <p className="text-amber-200 text-xl">2</p>
              </div>
              <h3 className="text-xl font-medium mb-3 text-amber-200">Filosofie statku</h3>
              <p className="text-amber-100/70">
                Náš statek chápeme jako živý organismus, kde má každý element svou roli a přispívá k celkové rovnováze. Snažíme se o maximální udržitelnost a soběstačnost.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 content-inner-card">
              <div className="h-16 w-16 rounded-full bg-amber-900/30 flex items-center justify-center mb-4">
                <p className="text-amber-200 text-xl">3</p>
              </div>
              <h3 className="text-xl font-medium mb-3 text-amber-200">Budoucí plány</h3>
              <p className="text-amber-100/70">
                Plánujeme rozšířit naše prostory, vybudovat komunitní centrum pro workshopy a vytvořit další útočiště pro zvířata s potřebou speciální péče.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-forest-900 via-forest-800 to-forest-900">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="section-heading">Staňte se součástí naší cesty</h2>
            <p className="text-xl text-amber-100/90">
              Pojďte s námi tvořit prostor, kde může vše živé růst a vzkvétat v harmonii a lásce. Existuje mnoho způsobů, jak se můžete zapojit.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Link to="/cinnosti">
                <Button size="lg" className="amber-button">
                  Prozkoumat naše činnosti
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/kontakt">
                <Button size="lg" variant="outline" className="border-amber-800/50 text-amber-100 hover:bg-forest-700">
                  Kontaktovat nás
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ONas;
