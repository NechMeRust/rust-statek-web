
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Home, Heart, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Kontakt = () => {
  const { toast } = useToast();

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="hero-section py-20 md:py-28">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-amber-100 mb-6">Kontaktujte nás</h1>
            <p className="text-xl text-amber-200">
              Ozvěte se nám s dotazy, náměty nebo pokud se chcete zapojit do činnosti spolku Nech Mě Růst.
            </p>
          </div>
        </div>
        <div className="wave-divider w-full absolute bottom-0 left-0"></div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif text-forest-800 mb-8 text-center">Spojte se s námi</h2>
            <p className="text-forest-700 mb-10 text-center">
              Rádi zodpovíme všechny Vaše dotazy a podělíme se o naše zkušenosti. Neváhejte nás kontaktovat ohledně spolupráce, dobrovolnictví nebo pokud se chcete o našem spolku dozvědět více.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-md border border-forest-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-forest-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-forest-800">Email</h3>
                      <p className="text-forest-700">nechmerust@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-forest-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-forest-800">Telefon</h3>
                      <p className="text-forest-700">+420 722 040 604</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Home className="h-6 w-6 text-forest-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-forest-800">Adresa</h3>
                      <p className="text-forest-700">
                        Nech Mě Růst z.s.<br />
                        Vlkaneč<br />
                        Česká republika
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Heart className="h-6 w-6 text-forest-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-forest-800">Bankovní spojení pro dary</h3>
                      <p className="text-forest-700">2002645872/2010</p>
                      <p className="text-forest-700 text-sm mt-1">IČO: 19 602 529</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-forest-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title">Kde nás najdete</h2>
            <p className="section-subtitle mx-auto">
              Náš rodový statek se nachází v krásné přírodě na pomezí Středních Čech a kraje Vysočina.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-[16/9] bg-forest-100 flex items-center justify-center">
              <p className="text-forest-600 text-lg">Interaktivní mapa bude zde</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 forest-bg-gradient">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-amber-100">Odebírejte naše novinky</h2>
            <p className="text-xl amber-text-light">
              Zůstaňte s námi v kontaktu a dozvíte se o nových projektech, akcích a možnostech, jak se zapojit.
            </p>
            
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto pt-4">
              <input
                type="email"
                placeholder="Váš email"
                className="flex-grow px-4 py-3 border border-forest-200 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                required
              />
              <Button className="amber-button">
                Přihlásit se k odběru
              </Button>
            </form>
            <p className="text-sm amber-text-light">
              Přihlášením souhlasíte se zpracováním údajů dle GDPR. Odhlásit se můžete kdykoli.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
