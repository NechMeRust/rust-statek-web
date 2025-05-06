
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Home, Leaf, Users } from 'lucide-react';
import Layout from '@/components/Layout';
import { cn } from '@/lib/utils';

const Index = () => {
  const pillars = [
    {
      icon: <Home className="h-8 w-8 text-forest-600" />,
      title: 'Vědomá tvorba rodového statku',
      description: 'Vytváříme soběstačný a regenerativní prostor v souladu s permakulturnímí principy udržitelnosti.',
    },
    {
      icon: <Users className="h-8 w-8 text-forest-600" />,
      title: 'Bezpečný prostor lásky',
      description: 'Budujeme komunitu založenou na respektu, důvěře a otevřené komunikaci, kde se každý může cítit přijatý.',
    },
    {
      icon: <Heart className="h-8 w-8 text-forest-600" />,
      title: 'Péče o zvířata v nouzi',
      description: 'Poskytujeme útočiště zvířatům v nouzi, pomáháme jim najít nové domovy a podporujeme soucitný vztah ke všem bytostem.',
    },
    {
      icon: <Leaf className="h-8 w-8 text-forest-600" />,
      title: 'Duchovní práce na sobě',
      description: 'Podporujeme osobní rozvoj, mindfulness a meditace jako cestu k vědomému životu a harmonii s přírodou.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-forest-50 to-white pt-24 md:pt-32 pb-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-forest-900">
                Tvoříme prostor pro růst duše, srdce i přírody
              </h1>
              <p className="text-xl text-forest-700 max-w-xl">
                Nech Mě Růst z.s. je nezisková organizace s vizí tvorby rodového statku, kde žijeme v harmonii s přírodou, zvířaty i sebou navzájem.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-forest-600 hover:bg-forest-700 text-white">
                  Zjistit více
                </Button>
                <Button size="lg" variant="outline" className="border-forest-300 text-forest-700 hover:bg-forest-50">
                  Podpořte nás
                </Button>
              </div>
            </div>
            <div className="hidden md:block relative animate-fade-in-slow">
              {/* Placeholder for hero image */}
              <div className="aspect-[4/3] bg-forest-100 rounded-tr-3xl rounded-bl-3xl overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-forest-100 to-forest-200 flex items-center justify-center">
                  <p className="text-forest-500 text-lg">Obrázek rodového statku</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 p-2 bg-white rounded-tr-xl rounded-bl-xl shadow-lg">
                <div className="bg-gradient-to-br from-terracotta-100 to-terracotta-200 p-4 rounded-tr-lg rounded-bl-lg">
                  <p className="font-serif text-terracotta-800">
                    "V souladu s přírodou, v lásce k životu."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="wave-divider w-full absolute bottom-0 left-0"></div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title">Naše vize</h2>
            <p className="section-subtitle mx-auto">
              Vytváříme rodový statek jako cestu k vědomému životu v lásce a harmonii s přírodou, zvířaty i sebou navzájem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className={cn("pillar-card eco-card", 
                  index % 2 === 0 ? "animate-fade-in" : "animate-fade-in-slow")}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-4 bg-forest-50 rounded-full">{pillar.icon}</div>
                  <h3 className="text-xl font-medium mb-3 text-forest-800">{pillar.title}</h3>
                  <p className="text-forest-600">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-24 bg-forest-50">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                {/* Placeholder for about image */}
                <div className="aspect-[4/3] bg-forest-100 natural-image overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-br from-forest-200 to-forest-300 flex items-center justify-center">
                    <p className="text-forest-500 text-lg">Obrázek z našeho statku</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 right-8 h-24 w-24 bg-terracotta-100 rounded-full flex items-center justify-center">
                  <span className="text-terracotta-800 font-serif text-lg">Harmonie</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif text-forest-800">O spolku Nech Mě Růst</h2>
              <p className="text-forest-700">
                Jsme společenství lidí, kteří věří v možnost harmonického života v souladu s přírodou a všemi bytostmi. Na našem rodovém statku vytváříme prostor, kde mohou lidé, zvířata i rostliny společně růst a vzkvétat.
              </p>
              <p className="text-forest-700">
                V našem spolku se soustředíme na několik klíčových oblastí: péči o zvířata v nouzi, přírodní stavitelství a podporu duchovního růstu jednotlivců i komunity. Usilujeme o vytvoření udržitelného a inspirujícího prostředí, které může být zdrojem inspirace i pro ostatní.
              </p>
              <div className="pt-4">
                <Link to="/o-nas">
                  <Button className="group bg-earth-300 hover:bg-earth-400 text-earth-900">
                    Poznejte náš příběh 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Activities Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title">Naše činnosti</h2>
            <p className="section-subtitle mx-auto">
              Ve spolku Nech Mě Růst se věnujeme několika klíčovým aktivitám, které společně vytvářejí harmonický celek.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Activity */}
            <div className="bg-gradient-to-b from-forest-50 to-white rounded-lg overflow-hidden shadow-md border border-forest-100">
              <div className="h-48 bg-forest-100 flex items-center justify-center">
                <p className="text-forest-500">Obrázek zvířat</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3 text-forest-800">Péče o zvířata v nouzi</h3>
                <p className="text-forest-600 mb-4">
                  Poskytujeme útočiště zvířatům v nouzi, léčíme jejich fyzická i psychická zranění a hledáme jim nové láskyplné domovy.
                </p>
                <Link to="/cinnosti" className="text-forest-600 font-medium hover:text-forest-800 flex items-center">
                  Více informací 
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Second Activity */}
            <div className="bg-gradient-to-b from-earth-50 to-white rounded-lg overflow-hidden shadow-md border border-earth-100">
              <div className="h-48 bg-earth-100 flex items-center justify-center">
                <p className="text-earth-500">Obrázek přírodního stavitelství</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3 text-forest-800">Přírodní stavitelství</h3>
                <p className="text-forest-600 mb-4">
                  Stavíme v souladu s přírodou za použití lokálních, ekologických materiálů jako dřevo, hlína a sláma.
                </p>
                <Link to="/cinnosti" className="text-forest-600 font-medium hover:text-forest-800 flex items-center">
                  Více informací 
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Third Activity */}
            <div className="bg-gradient-to-b from-terracotta-50 to-white rounded-lg overflow-hidden shadow-md border border-terracotta-100">
              <div className="h-48 bg-terracotta-100 flex items-center justify-center">
                <p className="text-terracotta-500">Obrázek duchovních aktivit</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3 text-forest-800">Duchovní práce na sobě</h3>
                <p className="text-forest-600 mb-4">
                  Podporujeme osobní rozvoj jednotlivců i komunity prostřednictvím workshopů, meditací a sdílení.
                </p>
                <Link to="/cinnosti" className="text-forest-600 font-medium hover:text-forest-800 flex items-center">
                  Více informací 
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-forest-50 via-forest-100 to-forest-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-forest-800">Připojte se k naší cestě</h2>
            <p className="text-xl text-forest-700">
              Staňte se součástí naší komunity a pomozte nám vytvářet prostor, kde může vše živé vzkvétat v harmonii a lásce.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Button size="lg" className="bg-forest-600 hover:bg-forest-700 text-white">
                Chci pomoci
              </Button>
              <Button size="lg" variant="outline" className="border-forest-300 text-forest-700 hover:bg-forest-50">
                Kontaktovat nás
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
