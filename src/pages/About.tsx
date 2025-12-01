import { Card, CardContent } from "@/components/ui/card";

import { Award, Users, Target, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import Backvideo from "@/assets/backrount.mp4";
import CompanyVideo from "@/assets/invest.mp4";
import { Button } from "@/components/ui/button";
import magnaCompany from "@/assets/magna-company.png";
const About = () => {
  const { t } = useTranslation();

  const goldButtonStyle = {
    background: "linear-gradient(45deg,#d4af37,#f7e488,#fff6a9,#f1c40f,#d4af37)",
    color: "black",
    border: "none",
    boxShadow: "inset 0 0 5px #fff6a9, 0 0 10px rgba(212,175,55,0.6)",
  };
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
            <source src={Backvideo} type="video/mp4" />
          </video>

          {/* Updated bottom-to-top gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#015436]/100 via-[#015436]/40 to-transparent" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            {t("about.title")}
          </h1>
          <p className="text-xl md:text-2xl">{t("about.subtitle")}</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in">
              {/* Video placeholder - user will add their video */}
              <div className="relative rounded-lg overflow-hidden shadow-premium aspect-video bg-muted">
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  loop
                  poster={Backvideo} // video boshlanishida ko‘rinadigan rasm
                >
                  <source src={CompanyVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="animate-fade-in animation-delay-150">
              <h2 className="text-4xl font-bold mb-6">{t("about.history")}</h2>
              <p className="text-lg text-muted-foreground mb-4">
                {t("about.historyText1")}
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                {t("about.historyText2")}
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                {t("about.historyText3")}
              </p>
              <p className="text-lg text-muted-foreground">
                {t("about.historyText4")}
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="border-primary/20 hover:shadow-premium transition-all duration-300 hover:scale-105">
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

                    {/* Award Icon Path (lucide-react SVG) */}
                    <circle cx="12" cy="8" r="7"></circle>
                    <path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.11"></path>
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-2">{t("about.quality")}</h3>
                <p className="text-muted-foreground">
                  {t("about.qualityDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-premium transition-all duration-300 hover:scale-105">
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

                    <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M7 21v-2a4 4 0 0 1 3-3.87" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-2">{t("about.team")}</h3>
                <p className="text-muted-foreground">{t("about.teamDesc")}</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-premium transition-all duration-300 hover:scale-105">
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
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-2">{t("about.mission")}</h3>
                <p className="text-muted-foreground">
                  {t("about.missionDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-premium transition-all duration-300 hover:scale-105">
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

                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-2">{t("about.growth")}</h3>
                <p className="text-muted-foreground">{t("about.growthDesc")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="pb-20 max-md:py-10 max-md:pt-10!">
        <div className="container mx-auto px-4 grid grid-cols-2 gap-10 max-md:grid-cols-1">
          <div className="flex items-center justify-center p-10 max-md:p-0">
            <img 
              src={magnaCompany}
              alt="magna logo"
              className="rounded-2xl" 
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">{t("about.history")}</h2>
            {/* <h3 className="text-[18px] leading-[160%] tracking-[0.5px] text-muted-foreground mt-6">
                  {t("magna.magnaCompany")}
            </h3> */}
            <p className="text-[18px] leading-[160%] tracking-[0.5px] text-muted-foreground mt-6">
              {t("magna.magnaCompany")}
            </p>
            <Button
              asChild
              className="hover:opacity-80 px-8 mt-4 max-md:w-full"
              style={goldButtonStyle}
            >
              <a href="https://uz.magna.uz/about" target="_blank">
                {t("magna.magnaMoreButton")}
              </a>
            </Button>
          </div>
        </div>
      </section>
      {/* Statistics */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div
                className="text-5xl font-bold text-transparent bg-clip-text mb-2"
                style={{
                  backgroundImage:
                    "linear-gradient(45deg,#d4af37,#f7e488,#fff6a9,#f1c40f,#d4af37)",
                }}
              >
                20+
              </div>
              <p className="text-xl">{t("about.yearsExperience")}</p>
            </div>

            <div className="animate-fade-in animation-delay-150">
              <div
                className="text-5xl font-bold text-transparent bg-clip-text mb-2"
                style={{
                  backgroundImage:
                    "linear-gradient(45deg,#d4af37,#f7e488,#fff6a9,#f1c40f,#d4af37)",
                }}
              >
                200+
              </div>
              <p className="text-xl">{t("about.productTypes")}</p>
            </div>

            <div className="animate-fade-in animation-delay-300">
              <div
                className="text-5xl font-bold text-transparent bg-clip-text mb-2"
                style={{
                  backgroundImage:
                    "linear-gradient(45deg,#d4af37,#f7e488,#fff6a9,#f1c40f,#d4af37)",
                }}
              >
                500+
              </div>
              <p className="text-xl">{t("about.happyClients")}</p>
            </div>

            <div className="animate-fade-in animation-delay-450">
              <div
                className="text-5xl font-bold text-transparent bg-clip-text mb-2"
                style={{
                  backgroundImage:
                    "linear-gradient(45deg,#d4af37,#f7e488,#fff6a9,#f1c40f,#d4af37)",
                }}
              >
                100%
              </div>
              <p className="text-xl">{t("about.qualityGuarantee")}</p>
            </div>
          </div>
        </div>
      </section>
      

      <style>{`
        .animation-delay-150 {
          animation-delay: 150ms;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .animation-delay-450 {
          animation-delay: 450ms;
        }
      `}</style>
    </div>
  );
};

export default About;
