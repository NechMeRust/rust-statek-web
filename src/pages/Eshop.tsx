
import Layout from "@/components/Layout";

const Eshop = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold text-forest-800 mb-8">Náš e-shop</h1>
        
        <div className="bg-forest-50 p-8 rounded-lg shadow-sm mb-12">
          <p className="text-lg text-forest-700 mb-4">
            Vítejte v našem e-shopu. Brzy zde najdete produkty, které podporují naši činnost a poslání.
          </p>
          <p className="text-forest-600">
            Připravujeme pro vás výběr ručně vyráběných předmětů, přírodní kosmetiky a dalších produktů v souladu s našimi hodnotami.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 border border-forest-100">
            <div className="h-40 bg-forest-100 rounded mb-4 flex items-center justify-center text-forest-400">
              Produkt brzy k dispozici
            </div>
            <h3 className="text-xl font-medium text-forest-700">Připravujeme produkty</h3>
            <p className="text-forest-600 mt-2">Brzy zde budou k dispozici produkty podporující naši činnost.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Eshop;
