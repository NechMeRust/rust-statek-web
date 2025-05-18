
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const Eshop = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-forest-900 to-forest-800 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-amber-200 mb-6">
              E-shop
            </h1>
            <p className="text-xl text-amber-100">
              Produkty, kterými můžete podpořit naši činnost a zároveň potěšit sebe či své blízké.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-forest-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-forest-900 p-8 rounded-xl border border-amber-900/30 shadow-sm mb-12">
              <p className="text-lg text-amber-100 mb-4">
                Vítejte v našem e-shopu. Brzy zde najdete produkty, které podporují naši činnost a poslání.
              </p>
              <p className="text-amber-200">
                Připravujeme pro vás výběr ručně vyráběných předmětů, přírodní kosmetiky a dalších produktů v souladu s našimi hodnotami.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-forest-900 rounded-lg shadow-md p-6 border border-amber-900/20">
                <div className="h-40 bg-forest-800 rounded mb-4 flex items-center justify-center">
                  <ShoppingBag className="h-12 w-12 text-amber-300/50" />
                </div>
                <h3 className="text-xl font-medium text-amber-200">Produkty v přípravě</h3>
                <p className="text-amber-100/80 mt-2">Brzy zde budou k dispozici produkty podporující naši činnost.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Eshop;
