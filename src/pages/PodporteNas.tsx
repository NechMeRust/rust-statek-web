import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Heart, HandHeart, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const PodporteNas = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-forest-900 to-forest-800 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/0d0d4125-41a5-4ed5-9cd0-94943f191a7f.png" 
                alt="Nech Mě Růst Logo" 
                className="h-40 md:h-48" 
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-amber-200 mb-6">
              Podpořte nás
            </h1>
            <p className="text-xl text-amber-100">
              Vaše podpora nám pomáhá vytvářet bezpečný prostor lásky a harmonie pro lidi, zvířata i přírodu.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 bg-forest-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Financial Support */}
              <div className="bg-forest-900 rounded-xl p-8 border border-amber-900/30 shadow-sm">
                <div className="flex items-center mb-6">
                  <DollarSign className="h-8 w-8 text-amber-300 mr-4" />
                  <h2 className="text-2xl font-serif text-amber-200">Finanční podpora</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-forest-800 p-6 rounded-lg border border-amber-900/20">
                    <h3 className="text-lg font-medium text-amber-200 mb-2">Platba na účet</h3>
                    <p className="text-amber-100 mb-3">
                      Můžete nás podpořit přímým převodem na náš transparentní účet:
                    </p>
                    <div className="bg-forest-900 p-4 rounded-md font-medium text-amber-300 text-center mb-2">
                      2002645872 / 2010
                    </div>
                    <p className="text-amber-100/80 text-sm">
                      Do zprávy pro příjemce uveďte "Dar" a případně svůj email pro zaslání potvrzení.
                    </p>
                  </div>

                  <div className="bg-forest-800 p-6 rounded-lg border border-amber-900/20">
                    <h3 className="text-lg font-medium text-amber-200 mb-2">Darujme.cz</h3>
                    <p className="text-amber-100 mb-4">
                      Preferujete-li platbu kartou, můžete využít portál Darujme.cz:
                    </p>
                    <a 
                      href="https://www.darujme.cz/projekt/1208852?fbclid=PAQ0xDSwKK5IxleHRuA2FlbQIxMAABp6KZVJRwFgj3id75hKKUyln4cqiZczaQT-QAzjMLZBC70rjJG22cAAvxa7vM_aem__y0BpXLz_7KZ3FS06RqChQ" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full bg-amber-300 hover:bg-amber-400 text-forest-900">
                        <Heart className="mr-2 h-5 w-5" />
                        Přispět přes Darujme.cz
                      </Button>
                    </a>
                    <div className="mt-4 flex justify-center">
                      <img 
                        src="/src/assets/darujme-logo.png" 
                        alt="Darujme.cz logo" 
                        className="h-10" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Ways to Help */}
              <div className="bg-forest-900 rounded-xl p-8 border border-amber-900/30 shadow-sm">
                <div className="flex items-center mb-6">
                  <HandHeart className="h-8 w-8 text-amber-300 mr-4" />
                  <h2 className="text-2xl font-serif text-amber-200">Další možnosti podpory</h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-forest-800 p-6 rounded-lg border border-amber-900/20">
                    <h3 className="text-lg font-medium text-amber-200 mb-2">Dobrovolnictví</h3>
                    <p className="text-amber-100 mb-4">
                      Pojďte nám pomoct s péčí o zvířata, stavebními projekty nebo organizací akcí.
                      Vaše ruce a srdce jsou pro nás nenahraditelné.
                    </p>
                    <Link to="/kontakt">
                      <Button className="w-full bg-amber-300 hover:bg-amber-400 text-forest-900">
                        Kontaktujte nás
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-forest-800 p-6 rounded-lg border border-amber-900/20">
                    <h3 className="text-lg font-medium text-amber-200 mb-2">Materiální dary</h3>
                    <p className="text-amber-100">
                      Potřebujeme krmivo pro zvířata, stavební materiály, nářadí a další. 
                      Napište nám, s čím byste mohli pomoci.
                    </p>
                    <p className="text-amber-200 font-medium mt-2">
                      Email: <a href="mailto:nechmerust@gmail.com" className="text-amber-300 hover:underline">nechmerust@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gratitude Section */}
            <div className="mt-16 text-center">
              <h2 className="text-3xl font-serif text-amber-200 mb-6">Děkujeme za vaši podporu</h2>
              <p className="text-xl text-amber-100 max-w-3xl mx-auto">
                Každý dar, ať finanční nebo v podobě vašeho času či dovedností, nám pomáhá budovat místo,
                kde může vše živé růst a vzkvétat v harmonii s přírodou i sebou samým.
              </p>
            </div>

            {/* Social Media */}
            <div className="mt-16 bg-forest-900 p-8 rounded-xl border border-amber-900/30">
              <h3 className="text-2xl font-serif text-amber-200 text-center mb-6">
                Sledujte naši cestu
              </h3>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <a 
                  href="https://www.instagram.com/nech_me_rust" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-forest-800 px-6 py-4 rounded-lg border border-amber-900/20 hover:bg-forest-700 transition-colors"
                >
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 text-white mr-4">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-amber-200 font-medium">Instagram</p>
                    <p className="text-amber-100/80 text-sm">@nech_me_rust</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.facebook.com/share/1ANYWPEwEz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-forest-800 px-6 py-4 rounded-lg border border-amber-900/20 hover:bg-forest-700 transition-colors"
                >
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-600 text-white mr-4">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-amber-200 font-medium">Facebook</p>
                    <p className="text-amber-100/80 text-sm">Nech Mě Růst</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:nechmerust@gmail.com" 
                  className="flex items-center bg-forest-800 px-6 py-4 rounded-lg border border-amber-900/20 hover:bg-forest-700 transition-colors"
                >
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-amber-300 text-forest-900 mr-4">
                    <svg 
                      className="h-5 w-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-amber-200 font-medium">Email</p>
                    <p className="text-amber-100/80 text-sm">nechmerust@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PodporteNas;
