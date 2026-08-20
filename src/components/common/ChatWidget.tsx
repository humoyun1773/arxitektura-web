import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { MessageSquare, X, Send, Bot, ExternalLink, Sparkles } from 'lucide-react';

export const ChatWidget: React.FC = () => {
  const { settings, submitLead } = useData();
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [sent, setSent] = useState(false);

  const quickQuestions = [
    "1 m² loyihalash narxi qancha?",
    "Villa loyihasini tayyorlash muddati qancha?",
    "Mualliflik nazorati qanday olib boriladi?",
    "Eskiz loyiha va 3D vizualizatsiya buyurtma berish"
  ];

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    await submitLead({
      fullName: 'Onlayn Maslahat So\'rovi',
      phone: phone.trim(),
      source: 'Onlayn Chat Widget',
      serviceType: `Savol: ${question}`
    });

    setSent(true);
    setTimeout(() => {
      setSent(false);
      setQuestion('');
      setIsOpen(false);
    }, 2500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen ? (
        <div className="w-[340px] sm:w-[380px] rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl shadow-black/60 overflow-hidden animate-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10">
                <Bot className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="text-sm font-bold flex items-center gap-1.5">
                  <span>Arxitektura Maslahatchisi</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <div className="text-[11px] text-slate-400">Onlayn konsultatsiya</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4 max-h-[420px] overflow-y-auto">
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-full bg-slate-800 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-slate-800/80 rounded-2xl rounded-tl-none p-3 text-xs text-slate-300 leading-relaxed border border-slate-700/60">
                Assalomu alaykum! Arxitektura, bino loyihalash yoki interyer dizayn bo'yicha qanday savolingiz bor? Yozib qoldiring, bosh arxitektorimiz siz bilan bog'lanadi.
              </div>
            </div>

            {/* Quick Chips */}
            <div className="space-y-1.5">
              <div className="text-[11px] text-slate-400 font-semibold px-1">Ko'p so'raladigan savollar:</div>
              <div className="flex flex-wrap gap-1.5">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => setQuestion(q)}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-slate-800 hover:bg-indigo-600/20 hover:text-indigo-300 border border-slate-700 text-slate-300 transition-colors text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            {sent ? (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-center text-xs text-emerald-400 font-semibold">
                Savolingiz qabul qilindi! Tez orada telefoningizga javob yuboramiz.
              </div>
            ) : (
              <form onSubmit={handleSend} className="space-y-2.5 pt-1">
                <textarea
                  rows={2}
                  required
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Savolingizni yozing..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-white placeholder-slate-500 outline-none focus:border-indigo-500 resize-none"
                />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+998 90 123 45 67"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-indigo-500 font-mono"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/30"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Javob Olish</span>
                </button>
              </form>
            )}

            {/* Telegram Direct link */}
            {settings.telegramLink && (
              <div className="pt-2 border-t border-slate-800 text-center">
                <a
                  href={settings.telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 font-semibold"
                >
                  <span>Telegram orqali to'g'ridan-to'g'ri yozish</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group p-4 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white shadow-2xl shadow-indigo-500/40 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center focus:outline-none"
          aria-label="Savol berish"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-950 animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-950"></span>
          <MessageSquare className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

