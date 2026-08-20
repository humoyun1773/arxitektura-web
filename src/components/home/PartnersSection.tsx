import React from 'react';
import { Building, Sparkles } from 'lucide-react';

export const PartnersSection: React.FC = () => {
  const partners = [
    { name: 'DISCOVER INVEST', sub: 'Qurilish & Arxitektura' },
    { name: 'MURAD BUILDINGS', sub: 'Developer & Me\'morchilik' },
    { name: 'EPAM SYSTEMS', sub: 'Global IT & Software' },
    { name: 'IT PARK UZBEKISTAN', sub: 'Texnologiyalar klasteri' },
    { name: 'ENTER ENGINEERING', sub: 'Yirik EPC Qurilish' },
    { name: 'ARTEL ELECTRONICS', sub: 'Sanoat Dizayni & IT' }
  ];

  return (
    <section className="py-16 relative border-y border-slate-800/60 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Bitiruvchilarimiz Quyidagi Yirik Kompaniyalarda Ishlamoqda</span>
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {partners.map((p, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/40 flex flex-col items-center justify-center text-center transition-all duration-300 group hover:-translate-y-1 hover:bg-slate-900/80"
            >
              <Building className="w-6 h-6 text-slate-600 group-hover:text-indigo-400 transition-colors mb-2" />
              <div className="font-heading font-extrabold text-xs sm:text-sm text-slate-300 group-hover:text-white tracking-wider">
                {p.name}
              </div>
              <div className="text-[10px] text-slate-400 mt-1">
                {p.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
