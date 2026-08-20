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
    <section className="py-12 relative bg-white border-y border-slate-100">
      <div className="app-container">
        <div className="text-center mb-8">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            Bitiruvchilarimiz Ishlayotgan Kompaniyalar
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {partners.map((p, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-indigo-300 flex flex-col items-center justify-center text-center transition-all duration-300 group hover:-translate-y-1 hover:shadow-md"
            >
              <Building className="w-6 h-6 text-slate-400 group-hover:text-indigo-600 transition-colors mb-2" />
              <div className="font-heading font-extrabold text-xs sm:text-sm text-slate-800 group-hover:text-indigo-600 tracking-wider">
                {p.name}
              </div>
              <div className="text-[10px] text-slate-500 mt-1">
                {p.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
