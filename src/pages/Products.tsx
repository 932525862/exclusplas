import { Card, CardContent } from "@/components/ui/card";
import productContainers from "@/assets/product-containers.jpg";
import productBarrels from "@/assets/product-barrels.jpg";
import customManufacturing from "@/assets/custom-manufacturing.jpg";
import { Package, Box, Boxes } from "lucide-react";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();
  
  const products = [
    {
      name: t("products.containers"),
      description: t("products.containersDesc"),
      image: productContainers,
      icon: Package,
    },
    {
      name: t("products.barrels"),
      description: t("products.barrelsDesc"),
      image: productBarrels,
      icon: Box,
    },
    {
      name: t("products.custom"),
      description: t("products.customDesc"),
      image: customManufacturing,
      icon: Boxes,
    },
  ];

  const categories = [
    t("products.household"),
    t("products.industrial"),
    t("products.packaging"),
    t("products.household"),
    t("products.industrial"),
    t("products.packaging"),
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            {t("products.title")}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            {t("products.subtitle")}
          </p>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t("products.mainProducts")}</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-premium transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <product.icon className="w-8 h-8 text-accent mr-3" />
                    <h3 className="text-2xl font-bold">{product.name}</h3>
                  </div>
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t("products.categories")}</h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-premium transition-all duration-300 hover:scale-105 border-primary/20"
              >
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-accent rounded-full mr-3" />
                    <h3 className="text-lg font-semibold">{category}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            {t("products.advantages")}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {t("products.highQuality")}
                </h3>
                <p className="text-muted-foreground">
                  {t("products.highQualityDesc")}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {t("products.affordablePrice")}
                </h3>
                <p className="text-muted-foreground">
                  {t("products.affordablePriceDesc")}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {t("products.customOrder")}
                </h3>
                <p className="text-muted-foreground">
                  {t("products.customOrderDesc")}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {t("products.fastDelivery")}
                </h3>
                <p className="text-muted-foreground">
                  {t("products.fastDeliveryDesc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
