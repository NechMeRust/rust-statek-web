
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
      <section className="bg-gradient-to-b from-forest-50 to-white py-20 md:py-28">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-forest-900 mb-6">Naše činnosti</h1>
            <p className="text-xl text-forest-700">
              Objevte aktivity spolku Nech Mě Růst a způsoby, jakými přispíváme k harmoničtějšímu světu.
            </p>
          </div>
        </div>
        <div className="wave-divider w-full absolute bottom-0 left-0"></div>
      </section>

      {/* Animal Care Section */}
      <section id="pece-o-zvirata" className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Heart className="h-8 w-8 text-terracotta-500" />
                <h2 className="text-3xl md:text-4xl font-serif text-forest-800">Péče o zvířata v nouzi</h2>
              </div>
              
              <div className="prose prose-forest text-forest-700 max-w-none">
                <p>
                  V našem spolku věříme, že každé zvíře si zaslouží život plný lásky a důstojnosti. Proto se věnujeme péči o zvířata v nouzi - od záchrany přes léčbu až po hledání nových domovů.
                </p>
                <p>
                  Náš přístup je založen na respektu a porozumění individuálním potřebám každého zvířete. Snažíme se nejen léčit jejich fyzická zranění, ale také jim pomáhat překonat psychická traumata, která si s sebou často nesou.
                </p>
                <h3 className="text-xl font-medium mt-6 mb-4 text-forest-800">Co v této oblasti děláme:</h3>
                <ul className="leaf-bullet">
                  <li>Záchrana zvířat v nouzi a poskytování bezpečného útočiště</li>
                  <li>Veterinární péče a rehabilitace</li>
                  <li>Hledání nových domovů a zodpovědných majitelů</li>
                  <li>Edukace veřejnosti o odpovědném přístupu ke zvířatům</li>
                  <li>Program virtuální adopce pro ty, kteří nemohou adoptovat fyzicky</li>
                </ul>
              </div>
              
              <div className="pt-4">
                <Link to="/kontakt">
                  <Button className="bg-terracotta-400 hover:bg-terracotta-500 text-white">
                    Chci pomoci zvířatům
                  </Button>
                </Link>
              </div>
            </div>
            
            <div>
              <div className="relative">
                {/* Placeholder for animal care image */}
                <div className="aspect-[4/3] bg-forest-100 natural-image overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-br from-terracotta-100 to-terracotta-200 flex items-center justify-center">
                    <p className="text-terracotta-500 text-lg">Obrázek péče o zvířata</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 right-8 h-24 w-24 bg-white rounded-full border-8 border-terracotta-100 flex items-center justify-center shadow-lg">
                  <Heart className="h-8 w-8 text-terracotta-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Natural Building Section */}
      <section id="prirodni-stavitelstvi" className="py-16 md:py-24 bg-forest-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Placeholder for natural building image */}
                <div className="aspect-[4/3] bg-forest-100 natural-image overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-br from-earth-100 to-earth-200 flex items-center justify-center">
                    <p className="text-earth-500 text-lg">Obrázek přírodní stavby</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-8 h-24 w-24 bg-white rounded-full border-8 border-earth-100 flex items-center justify-center shadow-lg">
                  <Home className="h-8 w-8 text-earth-500" />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Home className="h-8 w-8 text-earth-500" />
                <h2 className="text-3xl md:text-4xl font-serif text-forest-800">Přírodní stavitelství</h2>
              </div>
              
              <div className="prose prose-forest text-forest-700 max-w-none">
                <p>
                  Věříme, že způsob, jakým stavíme svá obydlí, má hluboký dopad na naše zdraví, pohodu i na stav naší planety. V našem spolku se proto věnujeme přírodnímu stavitelství - vytváříme stavby, které jsou v harmonii s okolní krajinou a využívají lokální, ekologické a udržitelné materiály.
                </p>
                <p>
                  Naše stavby jsou nejen ekologické, ale také estetické a zdravé pro své obyvatele. Snažíme se kombinovat tradiční techniky s moderními poznatky tak, abychom dosáhli optimálních výsledků.
                </p>
                <h3 className="text-xl font-medium mt-6 mb-4 text-forest-800">Naše stavební projekty a aktivity:</h3>
                <ul className="leaf-bullet">
                  <li>Výstavba budov z přírodních materiálů (dřevo, hlína, sláma, kámen)</li>
                  <li>Aplikace hliněných omítek a přírodních povrchových úprav</li>
                  <li>Workshopy přírodního stavitelství pro veřejnost</li>
                  <li>Poradenství v oblasti ekologických staveb</li>
                  <li>Propojování staveb s okolní krajinou a permakulturními principy</li>
                </ul>
              </div>
              
              <div className="pt-4">
                <Link to="/kontakt">
                  <Button className="bg-earth-400 hover:bg-earth-500 text-white">
                    Zajímá mě přírodní stavitelství
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Growth Section */}
      <section id="duchovni-prace" className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Leaf className="h-8 w-8 text-forest-600" />
                <h2 className="text-3xl md:text-4xl font-serif text-forest-800">Duchovní práce na sobě</h2>
              </div>
              
              <div className="prose prose-forest text-forest-700 max-w-none">
                <p>
                  Vědomá práce na sobě je základem pro vytváření harmonických vztahů - k sobě, k ostatním i k přírodě. V našem spolku podporujeme osobní a duchovní růst jako cestu k vědomému a naplněnému životu.
                </p>
                <p>
                  Vnímáme, že vnitřní transformace jde ruku v ruce s transformací vnějšího prostředí. Když pečujeme o svůj vnitřní prostor, můžeme lépe pečovat i o prostor kolem nás.
                </p>
                <h3 className="text-xl font-medium mt-6 mb-4 text-forest-800">Aktivity v oblasti duchovního růstu:</h3>
                <ul className="leaf-bullet">
                  <li>Pravidelná komunitní setkání a sdílecí kruhy</li>
                  <li>Meditační praxe a mindfulness v každodenním životě</li>
                  <li>Workshopy zaměřené na sebepoznání a osobní rozvoj</li>
                  <li>Propojení s přírodními cykly a rytmy</li>
                  <li>Vytváření bezpečného prostoru pro autenticitu a zranitelnost</li>
                </ul>
              </div>
              
              <div className="pt-4">
                <Link to="/kontakt">
                  <Button className="bg-forest-600 hover:bg-forest-700 text-white">
                    Chci se zapojit
                  </Button>
                </Link>
              </div>
            </div>
            
            <div>
              <div className="relative">
                {/* Placeholder for spiritual growth image */}
                <div className="aspect-[4/3] bg-forest-100 natural-image overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-br from-forest-100 to-forest-200 flex items-center justify-center">
                    <p className="text-forest-500 text-lg">Obrázek z komunitního setkání</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 right-8 h-24 w-24 bg-white rounded-full border-8 border-forest-100 flex items-center justify-center shadow-lg">
                  <Leaf className="h-8 w-8 text-forest-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteering Section */}
      <section id="dobrovolnictvi" className="py-16 md:py-24 bg-gradient-to-br from-forest-50 to-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title">Jak se můžete zapojit</h2>
            <p className="section-subtitle mx-auto">
              Existuje mnoho způsobů, jak se můžete stát součástí spolku Nech Mě Růst a přispět k naší společné vizi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Volunteering */}
            <div className={cn("pillar-card eco-card")}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-forest-50 rounded-full">
                  <Users className="h-8 w-8 text-forest-600" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-forest-800">Dobrovolnictví</h3>
                <p className="text-forest-600 mb-4">Pomozte nám s péčí o zvířata, stavbami, zahradou nebo organizací akcí. Vaše ruce i srdce jsou vítány!</p>
                <Link to="/kontakt">
                  <Button className="bg-forest-600 hover:bg-forest-700 text-white">Chci pomáhat</Button>
                </Link>
              </div>
            </div>

            {/* Donation */}
            <div className={cn("pillar-card eco-card")}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-forest-50 rounded-full">
                  <Heart className="h-8 w-8 text-forest-600" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-forest-800">Finanční podpora</h3>
                <p className="text-forest-600 mb-4">Podpořte naše projekty finančním darem. I malá částka může pomoci změnit životy zvířat i lidí.</p>
                <Link to="/kontakt">
                  <Button className="bg-forest-600 hover:bg-forest-700 text-white">Chci přispět</Button>
                </Link>
              </div>
            </div>

            {/* Workshops */}
            <div className={cn("pillar-card eco-card")}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-forest-50 rounded-full">
                  <Leaf className="h-8 w-8 text-forest-600" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-forest-800">Workshopy a akce</h3>
                <p className="text-forest-600 mb-4">Zúčastněte se našich workshopů, kurzů nebo komunitních setkání a rozšiřte své obzory.</p>
                <Link to="/kontakt">
                  <Button className="bg-forest-600 hover:bg-forest-700 text-white">Zjistit více</Button>
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
