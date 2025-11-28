import { Card, CardContent } from "@/components/ui/card";
import customManufacturing from "@/assets/custom-manufacturing.jpg";
import heroImage from "@/assets/hero-image.jpg";
import { Cog, Truck, Headphones, ClipboardCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import Backvideo2 from "@/assets/backrount2.mp4";
import apparation1 from "@/assets/apparation1.jpg";
import apparation2 from "@/assets/apparation2.jpg";
import apparation3 from "@/assets/apparation3.jpg";

const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      title: t("apparations_words.model1"),
      image: apparation1,
    },
    {
      title: t("apparations_words.model2"),
      image: apparation2,
    },
    {
      title: t("apparations_words.model3"),
      image: apparation3,
    },
  ];

   const apparationData = Array.from({ length: 25 }, (_, i) => ({
      name: t(`apparations.apparation${i + 1}.name`),
      work: t(`apparations.apparation${i + 1}.work`),
    }));

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={Backvideo2} type="video/mp4" />
          </video>

          {/* Updated bottom-to-top gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#044e35]/100 via-[#044e35]/40 to-transparent" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            {t("services.title")}
          </h1>
          <p className="text-xl md:text-2xl">{t("services.subtitle")}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-x-4 gap-y-8">
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
                  <h3 className="text-2xl font-bold my-4">{service.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex flex-col rounded-xl max-md:mt-4 mt-16 font-medium max-w-5xl mx-auto overflow-hidden bg-slate-50">
            <div className="grid grid-cols-8 p-3 bg-[#F9C31F]">
              <div className="col-span-1 text-center">No</div>
              <div className="col-span-3 text-center">{t("apparations_words.name")}</div>
              <div className="col-span-4 text-center">{t("apparations_words.work")}</div>
            </div>
            {
              apparationData.map((apparation, index) => (
                <div className="grid grid-cols-8 p-3 border-b-[1px] border-slate-300">
                  <div className="col-span-1 text-center">{index + 1}</div>
                  <div className="col-span-3 text-center">{apparation.name}</div>
                  <div className="col-span-4 text-center">{apparation.work}</div>
                </div>
              ))
            }
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
