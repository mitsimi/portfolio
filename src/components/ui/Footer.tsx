import { AtSign, MapPin } from "lucide-react";
import type { PortfolioData } from "../../data/portfolio";
import { BoldLabel } from "./Typography";

interface FooterProps {
  data: PortfolioData;
}

export const Footer = ({ data }: FooterProps) => {
  return (
    <footer className="relative px-6 md:px-12 py-12 bg-bg border-t-4 border-black/10">
      <div className="max-w-450 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
          <BoldLabel className="text-black/50 flex gap-2">
            <MapPin size={14} /> {data.location.toUpperCase()}
          </BoldLabel>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <BoldLabel className="text-black/30 flex gap-2">
            <AtSign size={14} /> {new Date().getFullYear()}{" "}
            {data.name.toUpperCase()}
          </BoldLabel>
          <BoldLabel className="text-black/30">
            MADE WITH CODE & COFFEE
          </BoldLabel>
        </div>
      </div>
    </footer>
  );
};
