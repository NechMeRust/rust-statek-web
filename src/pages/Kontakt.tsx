
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Home, Heart, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Kontakt = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Zpráva odeslána!',
        description: 'Děkujeme za Vaši zprávu. Ozveme se Vám co nejdříve.',
        duration: 5000,
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-forest-50 to-white py-20 md:py-28">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-forest-900 mb-6">Kontaktujte nás</h1>
            <p className="text-xl text-forest-700">
              Ozvěte se nám s dotazy, náměty nebo pokud se chcete zapojit do činnosti spolku Nech Mě Růst.
            </p>
          </div>
        </div>
        <div className="wave-divider w-full absolute bottom-0 left-0"></div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-2xl md:text-3xl font-serif text-forest-800">Spojte se s námi</h2>
              <p className="text-forest-700">
                Rádi zodpovíme všechny Vaše dotazy a podělíme se o naše zkušenosti. Neváhejte nás kontaktovat ohledně spolupráce, dobrovolnictví nebo pokud se chcete o našem spolku dozvědět více.
              </p>

              <div className="space-y-6 pt-4">
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

                <div className="flex items-start space-x-4">
                  <Home className="h-6 w-6 text-forest-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-forest-800">Adresa</h3>
                    <p className="text-forest-700">
                      Nech Mě Růst<br />
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

            <div className="lg:col-span-3">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-forest-100">
                <h2 className="text-2xl md:text-3xl font-serif text-forest-800 mb-6">Napište nám</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-forest-700 font-medium">
                        Jméno
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-forest-200 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-forest-700 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-forest-200 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-forest-700 font-medium">
                      Předmět
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-forest-200 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                    >
                      <option value="">Prosím vyberte</option>
                      <option value="general">Obecný dotaz</option>
                      <option value="volunteering">Dobrovolnictví</option>
                      <option value="donation">Finanční podpora</option>
                      <option value="animals">Péče o zvířata</option>
                      <option value="building">Přírodní stavitelství</option>
                      <option value="workshops">Workshopy a akce</option>
                      <option value="other">Jiné</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-forest-700 font-medium">
                      Zpráva
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-forest-200 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="gdpr"
                      required
                      className="h-4 w-4 text-forest-600 rounded border-forest-300 focus:ring-forest-500"
                    />
                    <label htmlFor="gdpr" className="ml-2 block text-sm text-forest-700">
                      Souhlasím se zpracováním osobních údajů v souladu s GDPR.
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-forest-600 hover:bg-forest-700 text-white flex items-center justify-center py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Odesílám...</>
                    ) : (
                      <>
                        <Check className="mr-2 h-4 w-4" /> Odeslat zprávu
                      </>
                    )}
                  </Button>
                </form>
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
            {/* Placeholder for map - in real implementation this would be replaced by an actual map */}
            <div className="aspect-[16/9] bg-forest-100 flex items-center justify-center">
              <p className="text-forest-600 text-lg">Interaktivní mapa bude zde</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-forest-50 via-forest-100 to-forest-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-forest-800">Odebírejte naše novinky</h2>
            <p className="text-xl text-forest-700">
              Zůstaňte s námi v kontaktu a dozvíte se o nových projektech, akcích a možnostech, jak se zapojit.
            </p>
            
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto pt-4">
              <input
                type="email"
                placeholder="Váš email"
                className="flex-grow px-4 py-3 border border-forest-200 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                required
              />
              <Button className="bg-forest-600 hover:bg-forest-700 text-white">
                Přihlásit se k odběru
              </Button>
            </form>
            <p className="text-sm text-forest-600">
              Přihlášením souhlasíte se zpracováním údajů dle GDPR. Odhlásit se můžete kdykoli.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
