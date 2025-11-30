import { Card, CardContent } from "@/components/ui/card";

import { Award, Users, Target, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import Backvideo from "@/assets/backrount.mp4";
import CompanyVideo from "@/assets/backrount.mp4";
const About = () => {
  const { t } = useTranslation();

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
                <Award className="w-16 h-16 text-[#FFD700] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{t("about.quality")}</h3>
                <p className="text-muted-foreground">
                  {t("about.qualityDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-premium transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Users className="w-16 h-16 text-[#FFD700] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{t("about.team")}</h3>
                <p className="text-muted-foreground">{t("about.teamDesc")}</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-premium transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Target className="w-16 h-16 text-[#FFD700] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{t("about.mission")}</h3>
                <p className="text-muted-foreground">
                  {t("about.missionDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-premium transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <TrendingUp className="w-16 h-16 text-[#FFD700] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{t("about.growth")}</h3>
                <p className="text-muted-foreground">{t("about.growthDesc")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold text-[#FFD700] mb-2">20+</div>
              <p className="text-xl">{t("about.yearsExperience")}</p>
            </div>

            <div className="animate-fade-in animation-delay-150">
              <div className="text-5xl font-bold text-[#FFD700] mb-2">200+</div>
              <p className="text-xl">{t("about.productTypes")}</p>
            </div>

            <div className="animate-fade-in animation-delay-300">
              <div className="text-5xl font-bold text-[#FFD700] mb-2">500+</div>
              <p className="text-xl">{t("about.happyClients")}</p>
            </div>

            <div className="animate-fade-in animation-delay-450">
              <div className="text-5xl font-bold text-[#FFD700] mb-2">100%</div>
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
