
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Home, Leaf } from 'lucide-react';
import Users from '@/components/Users';
import { cn } from '@/lib/utils';

const Cinnosti = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-forest-900 to-forest-800 py-20 md:py-28">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-amber-200 mb-6">Naše činnosti</h1>
            <p className="text-xl text-amber-100">
              Objevte aktivity spolku Nech Mě Růst a způsoby, jakými přispíváme k harmoničtějšímu světu.
            </p>
          </div>
        </div>
      </section>

      {/* Animal Care Section */}
      <section id="pece-o-zvirata" className="py-16 md:py-24 bg-forest-800">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Heart className="h-8 w-8 text-amber-300" />
                <h2 className="section-heading">Péče o zvířata v nouzi</h2>
              </div>
              
              <div className="text-amber-100/90 space-y-4">
                <p>
                  V našem spolku věříme, že každé zvíře si zaslouží život plný lásky a důstojnosti. Proto se věnujeme péči o zvířata v nouzi - od záchrany přes léčbu až po hledání nových domovů.
                </p>
                <p>
                  Náš přístup je založen na respektu a porozumění individuálním potřebám každého zvířete. Snažíme se nejen léčit jejich fyzická zranění, ale také jim pomáhat překonat psychická traumata, která si s sebou často nesou.
                </p>
                <h3 className="text-xl font-medium mt-6 mb-4 text-amber-200">Co v této oblasti děláme:</h3>
                <ul className="leaf-bullet text-amber-100/80">
                  <li>Záchrana zvířat v nouzi a poskytování bezpečného útočiště</li>
                  <li>Veterinární péče a rehabilitace</li>
                  <li>Hledání nových domovů a zodpovědných majitelů</li>
                  <li>Edukace veřejnosti o odpovědném přístupu ke zvířatům</li>
                  <li>Program virtuální adopce pro ty, kteří nemohou adoptovat fyzicky</li>
                </ul>
              </div>
              
              <div className="pt-4">
                <Link to="/kontakt">
                  <Button className="amber-button">
                    Chci pomoci zvířatům
                  </Button>
                </Link>
              </div>
            </div>
            
            <div>
              <div className="relative">
                {/* Placeholder for animal care image */}
                <div className="aspect-[4/3] bg-forest-700 natural-image overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-br from-forest-700 to-forest-800 flex items-center justify-center">
                    <p className="text-amber-200/70 text-lg">Obrázek péče o zvířata</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 right-8 h-24 w-24 bg-forest-700 rounded-full border-8 border-amber-900/30 flex items-center justify-center shadow-lg">
                  <Heart className="h-8 w-8 text-amber-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Natural Building Section */}
      <section id="prirodni-stavitelstvi" className="py-16 md:py-24 bg-forest-900">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Placeholder for natural building image */}
                <div className="aspect-[4/3] bg-forest-700 natural-image overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-br from-forest-700 to-forest-800 flex items-center justify-center">
                    <p className="text-amber-200/70 text-lg">Obrázek přírodní stavby</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-8 h-24 w-24 bg-forest-700 rounded-full border-8 border-amber-900/30 flex items-center justify-center shadow-lg">
                  <Home className="h-8 w-8 text-amber-300" />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Home className="h-8 w-8 text-amber-300" />
                <h2 className="section-heading">Přírodní stavitelství</h2>
              </div>
              
              <div className="text-amber-100/90 space-y-4">
                <p>
                  Věříme, že způsob, jakým stavíme svá obydlí, má hluboký dopad na naše zdraví, pohodu i na stav naší planety. V našem spolku se proto věnujeme přírodnímu stavitelství - vytváříme stavby, které jsou v harmonii s okolní krajinou a využívají lokální, ekologické a udržitelné materiály.
                </p>
                <p>
                  Naše stavby jsou nejen ekologické, ale také estetické a zdravé pro své obyvatele. Snažíme se kombinovat tradiční techniky s moderními poznatky tak, abychom dosáhli optimálních výsledků.
                </p>
                <h3 className="text-xl font-medium mt-6 mb-4 text-amber-200">Naše stavební projekty a aktivity:</h3>
                <ul className="leaf-bullet text-amber-100/80">
                  <li>Výstavba budov z přírodních materiálů (dřevo, hlína, sláma, kámen)</li>
                  <li>Aplikace hliněných omítek a přírodních povrchových úprav</li>
                  <li>Workshopy přírodního stavitelství pro veřejnost</li>
                  <li>Poradenství v oblasti ekologických staveb</li>
                  <li>Propojování staveb s okolní krajinou a permakulturními principy</li>
                </ul>
              </div>
              
              <div className="pt-4">
                <Link to="/kontakt">
                  <Button className="amber-button">
                    Zajímá mě přírodní stavitelství
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Growth Section */}
      <section id="duchovni-prace" className="py-16 md:py-24 bg-forest-800">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Leaf className="h-8 w-8 text-amber-300" />
                <h2 className="section-heading">Duchovní práce na sobě</h2>
              </div>
              
              <div className="text-amber-100/90 space-y-4">
                <p>
                  Vědomá práce na sobě je základem pro vytváření harmonických vztahů - k sobě, k ostatním i k přírodě. V našem spolku podporujeme osobní a duchovní růst jako cestu k vědomému a naplněnému životu.
                </p>
                <p>
                  Vnímáme, že vnitřní transformace jde ruku v ruce s transformací vnějšího prostředí. Když pečujeme o svůj vnitřní prostor, můžeme lépe pečovat i o prostor kolem nás.
                </p>
                <h3 className="text-xl font-medium mt-6 mb-4 text-amber-200">Aktivity v oblasti duchovního růstu:</h3>
                <ul className="leaf-bullet text-amber-100/80">
                  <li>Pravidelná komunitní setkání a sdílecí kruhy</li>
                  <li>Meditační praxe a mindfulness v každodenním životě</li>
                  <li>Workshopy zaměřené na sebepoznání a osobní rozvoj</li>
                  <li>Propojení s přírodními cykly a rytmy</li>
                  <li>Vytváření bezpečného prostoru pro autenticitu a zranitelnost</li>
                </ul>
              </div>
              
              <div className="pt-4">
                <Link to="/kontakt">
                  <Button className="amber-button">
                    Chci se zapojit
                  </Button>
                </Link>
              </div>
            </div>
            
            <div>
              <div className="relative">
                {/* Placeholder for spiritual growth image */}
                <div className="aspect-[4/3] bg-forest-700 natural-image overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-br from-forest-700 to-forest-800 flex items-center justify-center">
                    <p className="text-amber-200/70 text-lg">Obrázek z komunitního setkání</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 right-8 h-24 w-24 bg-forest-700 rounded-full border-8 border-amber-900/30 flex items-center justify-center shadow-lg">
                  <Leaf className="h-8 w-8 text-amber-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteering Section */}
      <section id="dobrovolnictvi" className="py-16 md:py-24 bg-gradient-to-br from-forest-900 via-forest-800 to-forest-900">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-heading">Jak se můžete zapojit</h2>
            <p className="text-amber-100/90 text-xl mx-auto max-w-3xl">
              Existuje mnoho způsobů, jak se můžete stát součástí spolku Nech Mě Růst a přispět k naší společné vizi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Volunteering */}
            <div className="content-inner-card">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-forest-700/50 rounded-full">
                  <Users className="h-8 w-8 text-amber-300" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-amber-200">Dobrovolnictví</h3>
                <p className="text-amber-100/70 mb-4">Pomozte nám s péčí o zvířata, stavbami, zahradou nebo organizací akcí. Vaše ruce i srdce jsou vítány!</p>
                <Link to="/kontakt">
                  <Button className="amber-button">Chci pomáhat</Button>
                </Link>
              </div>
            </div>

            {/* Donation */}
            <div className="content-inner-card">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-forest-700/50 rounded-full">
                  <Heart className="h-8 w-8 text-amber-300" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-amber-200">Finanční podpora</h3>
                <p className="text-amber-100/70 mb-4">Podpořte naše projekty finančním darem. I malá částka může pomoci změnit životy zvířat i lidí.</p>
                <Link to="/kontakt">
                  <Button className="amber-button">Chci přispět</Button>
                </Link>
              </div>
            </div>

            {/* Workshops */}
            <div className="content-inner-card">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-forest-700/50 rounded-full">
                  <Leaf className="h-8 w-8 text-amber-300" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-amber-200">Workshopy a akce</h3>
                <p className="text-amber-100/70 mb-4">Zúčastněte se našich workshopů, kurzů nebo komunitních setkání a rozšiřte své obzory.</p>
                <Link to="/kontakt">
                  <Button className="amber-button">Zjistit více</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cinnosti;
