import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Factory, Shield, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import Backvideo from "@/assets/backrount.mp4";
import Partner1 from "@/assets/unnamed (1).png";
import Partner2 from "@/assets/unnamed (2).png";
import Partner3 from "@/assets/unnamed (3).png";
import Partner4 from "@/assets/unnamed (4).png";
import Partner5 from "@/assets/unnamed (5).png";
import Partner6 from "@/assets/unnamed (6).png";
import Sertifikat1 from "@/assets/sertifikat.jpg";
import Sertifikat2 from "@/assets/sertifikat2.jpg";
import { getImage } from "@/lib/getImage";

const Home = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const partners = [Partner1, Partner2, Partner3, Partner4, Partner5, Partner6];
  const productNubers = [1, 5, 13];

  const products = productNubers.map((i) => ({
    name: t(`products_data.product${i}.title`),
    description: t(`products_data.product${i}.desc`),
    image: getImage(`${i}.png`),
  }));

  const goldButtonStyle = {
    background:
      "linear-gradient(45deg,#d4af37,#f7e488,#fff6a9,#f1c40f,#d4af37)",
    color: "black",
    border: "none",
    boxShadow: "inset 0 0 5px #fff6a9, 0 0 10px rgba(212,175,55,0.6)",
  };

  const categories = [
    t("products.household"),
    t("products.industrial"),
    t("products.packaging"),
    t("products.household"),
    t("products.industrial"),
    t("products.packaging"),
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Xabaringiz yuborildi!",
      description: "Tez orada siz bilan bog'lanamiz.",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={Backvideo} type="video/mp4" />
          </video>

          {/* Updated bottom-to-top gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#015436]/80 via-[#015436]/40 to-transparent" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center text-primary-foreground animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span
              className="bg-[#FFD700] bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(45deg,#d4af37,#f7e488,#f1c40f,#fff6a9,#d4af37)",
              }}
            >
              Exclusive Invest Industry
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {t("hero.description")}
          </p>
          <Button
            onClick={() => navigate("/about")}
            size="lg"
            style={goldButtonStyle}
            className="bg-[#FFD700] text-accent-foreground hover:scale-105 transition-transform duration-300 shadow-glow"
          >
            {t("hero.learnMore")}
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-primary/20 hover:shadow-premium transition-shadow duration-300 animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#goldGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <defs>
                      <linearGradient
                        id="goldGradient"
                        gradientTransform="rotate(45)"
                      >
                        <stop offset="0%" stopColor="#d4af37" />
                        <stop offset="25%" stopColor="#f7e488" />
                        <stop offset="50%" stopColor="#fff6a9" />
                        <stop offset="75%" stopColor="#f1c40f" />
                        <stop offset="100%" stopColor="#d4af37" />
                      </linearGradient>
                    </defs>

                    <path d="M3 21V9l6 3 6-3v12" />
                    <path d="M18 21V7l3-2v16" />
                    <path d="M3 21h18" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold mb-3">200+ Mahsulotlar</h3>
                <p className="text-muted-foreground">
                  200 xildan ortiq plastik mahsulotlarni ishlab chiqaramiz
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-premium transition-shadow duration-300 animate-fade-in animation-delay-150">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#goldGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <defs>
                      <linearGradient
                        id="goldGradient"
                        gradientTransform="rotate(45)"
                      >
                        <stop offset="0%" stopColor="#d4af37" />
                        <stop offset="25%" stopColor="#f7e488" />
                        <stop offset="50%" stopColor="#fff6a9" />
                        <stop offset="75%" stopColor="#f1c40f" />
                        <stop offset="100%" stopColor="#d4af37" />
                      </linearGradient>
                    </defs>

                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold mb-3">Yuqori Sifat</h3>
                <p className="text-muted-foreground">
                  Zamonaviy uskunalar va sifat nazorati tizimi
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-premium transition-shadow duration-300 animate-fade-in animation-delay-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#goldGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <defs>
                      <linearGradient
                        id="goldGradient"
                        gradientTransform="rotate(45)"
                      >
                        <stop offset="0%" stopColor="#d4af37" />
                        <stop offset="25%" stopColor="#f7e488" />
                        <stop offset="50%" stopColor="#fff6a9" />
                        <stop offset="75%" stopColor="#f1c40f" />
                        <stop offset="100%" stopColor="#d4af37" />
                      </linearGradient>
                    </defs>

                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold mb-3">Tez Yetkazib Berish</h3>
                <p className="text-muted-foreground">
                  O'z vaqtida buyurtmalarni bajarish va yetkazib berish
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              {t("home.aboutCompany")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("home.aboutDesc")}
            </p>
            <Button
              onClick={() => navigate("/about")}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              style={goldButtonStyle}
            >
              {t("home.learnMore")}
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            {t("home.ourProducts")}
          </h2>

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
                    <h3 className="text-2xl font-bold">{product.name}</h3>
                  </div>
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={() => navigate("/products")}
              size="lg"
              className="bg-[#FFD700] text-accent-foreground hover:scale-105 transition-transform"
              style={goldButtonStyle}
            >
              {t("home.learnMore")}
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            {t("home.ourPartners")}
          </h2>

          <div className="relative">
            <div className="flex animate-[scroll_20s_linear_infinite] space-x-8">
              {[...partners, ...partners].map((img, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-32 bg-card rounded-lg shadow-lg flex items-center justify-center border border-primary/10"
                >
                  <img
                    src={img}
                    alt={`Partner ${index + 1}`}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            {t("home.certificates")}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Certificate 1 */}
            <Card className="overflow-hidden hover:shadow-premium transition-shadow duration-300">
              <CardContent className="p-4">
                <div className="h-100 rounded-lg overflow-hidden flex items-center justify-center bg-white">
                  <img
                    src={Sertifikat1}
                    alt="Certificate 1"
                    className="w-full h-full object-contain"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Certificate 2 */}
            <Card className="overflow-hidden hover:shadow-premium transition-shadow duration-300">
              <CardContent className="p-4">
                <div className="h-100 rounded-lg overflow-hidden flex items-center justify-center bg-white">
                  <img
                    src={Sertifikat2}
                    alt="Certificate 2"
                    className="w-full h-full object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            {t("home.contactUs")}
          </h2>

          <Card className="shadow-premium">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("home.name")}
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    placeholder={t("home.name")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("home.phone")}
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    placeholder="+998 XX XXX XX XX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("home.email")}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("home.message")}
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    placeholder={t("home.message")}
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#FFD700] text-accent-foreground hover:scale-105 transition-transform"
                  size="lg"
                  style={goldButtonStyle}
                >
                  {t("home.send")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animation-delay-150 {
          animation-delay: 150ms;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
};

export default Home;
