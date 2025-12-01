import { Instagram, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import Logo from "@/assets/лого.png";

const Footer = () => {
  const { t } = useTranslation();


  const goldButtonStyle = {
    background:
      "linear-gradient(45deg,#d4af37,#f7e488,#fff6a9,#f1c40f,#d4af37)",
    color: "black",
    border: "none",
    boxShadow: "inset 0 0 5px #fff6a9, 0 0 10px rgba(212,175,55,0.6)",
  };

  return (
    <footer className="bg-[#015436] text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* Logo + Company Name */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={Logo} alt="Exclusive Plast Logo" className="h-12 w-auto" />
              <h3 className="text-2xl font-bold bg-[#FFD700] bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(45deg,#d4af37,#f7e488,#f1c40f,#fff6a9,#d4af37)",
              }}
              >
                EXCLUSIVE PLAST
              </h3>
            </div>

            <p className="text-primary-foreground/80">
              {t("footer.about")}
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">{t("footer.contact")}</h4>
            <p className="text-primary-foreground/80">
              {t("footer.address")}
            </p>
            <a href="tel:+998987170808" className="">
              <p className="text-primary-foreground/80 mt-2">
              Tel: +998 98 717 08 08
            </p>
            </a>
            
            <p className="text-primary-foreground/80">
              Email: exinvest@inbox.ru
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">{t("footer.followUs")}</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/exclusiveplast?igsh=YTA5cXo5ODFzczVo&utm_source=ig_contact_invite"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-accent rounded-full hover:scale-110 transition-transform duration-300"
                aria-label="Instagram"
                style={goldButtonStyle}
              >
                <Instagram size={24} className="text-accent-foreground" />
              </a>
              <a
                href="https://t.me/exclusiveplastuz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-accent rounded-full hover:scale-110 transition-transform duration-300"
                aria-label="Telegram"
                style={goldButtonStyle}
              >
                <Send size={24} className="text-accent-foreground" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 EXCLUSIVE PLAST. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
