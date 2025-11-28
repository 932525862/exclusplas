import { Card, CardContent } from "@/components/ui/card";
import customManufacturing from "@/assets/custom-manufacturing.jpg";
import heroImage from "@/assets/hero-image.jpg";
import { Cog, Truck, Headphones, ClipboardCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      title: t("services.customProduction"),
      description: t("services.customProductionDesc"),
      icon: Cog,
      image: customManufacturing,
    },
    {
      title: t("services.delivery"),
      description: t("services.deliveryDesc"),
      icon: Truck,
      image: heroImage,
    },
    {
      title: t("services.consultation"),
      description: t("services.consultationDesc"),
      icon: Headphones,
      image: customManufacturing,
    },
    {
      title: t("services.qualityControl"),
      description: t("services.qualityControlDesc"),
      icon: ClipboardCheck,
      image: heroImage,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            {t("services.title")}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-x-4 gap-y-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden group">      
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 overflow-hidden object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>                
                <CardContent>
                  <service.icon className="w-16 h-16 text-accent mb-6" />
                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            {t("services.modernEquipment")}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src={customManufacturing}
                alt="Zamonaviy uskunalar"
                className="rounded-lg shadow-premium w-full"
              />
            </div>
            
            <div className="animate-fade-in animation-delay-150">
              <h3 className="text-3xl font-bold mb-6">
                Yuqori texnologiyali ishlab chiqarish
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                Bizning korxonamiz eng zamonaviy uskunalar bilan jihozlangan. Bu bizga yuqori sifatli mahsulotlarni tez va samarali ishlab chiqarish imkonini beradi.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Barcha uskunalar muntazam ravishda texnik xizmat ko'rsatiladi va yangilanadi, bu esa ishlab chiqarish jarayonining uzluksizligini ta'minlaydi.
              </p>
              <div className="space-y-3 mt-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  <span className="text-lg">Avtomatlashtirilgan ishlab chiqarish liniyalari</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  <span className="text-lg">Zamonaviy qoliplash uskunalari</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  <span className="text-lg">Sifat nazorati tizimlari</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  <span className="text-lg">Ekologik xavfsiz texnologiyalar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Biz bilan hamkorlik qiling
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Bizning xizmatlarimiz haqida ko'proq ma'lumot olish uchun biz bilan bog'laning
          </p>
          <a
            href="/#contact"
            className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold text-lg hover:scale-105 transition-transform shadow-glow"
          >
            Bog'lanish
          </a>
        </div>
      </section>

      <style>{`
        .animation-delay-150 {
          animation-delay: 150ms;
        }
      `}</style>
    </div>
  );
};

export default Services;
