import React, { useState, useEffect } from "react";
import { useData } from "../../context/DataContext";
import { useLanguage } from "../../context/LanguageContext";
import { X, Sparkles, Phone, User, CheckCircle2, Building2, Ruler, MessageSquare, ArrowRight } from "lucide-react";

export const LeadModal: React.FC = () => {
  const {
    isLeadModalOpen,
    closeLeadModal,
    selectedProjectForModal,
    selectedServiceForModal,
    submitLead,
  } = useData();
  const { t } = useLanguage();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("+998 ");
  const [serviceType, setServiceType] = useState("Individual Kottej Loyihalash");
  const [estimatedArea, setEstimatedArea] = useState<number | string>(250);
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedProjectForModal) {
      setServiceType(selectedProjectForModal.category);
    } else if (selectedServiceForModal) {
      setServiceType(selectedServiceForModal.title);
    } else {
      setServiceType("Individual Turar-joy & Kottej Loyihalash");
      setEstimatedArea(250);
    }
    if (isLeadModalOpen) {
      setIsSuccess(false);
    }
  }, [selectedProjectForModal, selectedServiceForModal, isLeadModalOpen]);

  if (!isLeadModalOpen) return null;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (!val.startsWith("+998")) {
      val = "+998 ";
    }
    setPhone(val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) return;

    setIsSubmitting(true);

    await submitLead({
      fullName: fullName.trim(),
      phone: phone.trim(),
      projectTitle: selectedProjectForModal?.title,
      projectId: selectedProjectForModal?.id,
      serviceType: serviceType,
      estimatedAreaM2: typeof estimatedArea === "number" ? estimatedArea : undefined,
      source: selectedProjectForModal ? `Loyiha sahifasi: ${selectedProjectForModal.title}` : "Bosh menyu buyurtma tugmasi",
      notes: notes.trim(),
    });

    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      closeLeadModal();
      setFullName("");
      setPhone("+998 ");
      setNotes("");
      setIsSuccess(false);
    }, 2500);
  };

  return (
    <div onClick={closeLeadModal} className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/50 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="h-1.5 bg-slate-900 w-full"></div>

        <button onClick={closeLeadModal} className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors z-10 cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="p-8 sm:p-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-slate-900">Loyiha Buyurtmangiz Qabul Qilindi!</h3>
            <p className="text-sm text-slate-600">Bosh arxitektorimiz loyihangiz bo'yicha tez orada siz bilan bog'lanib, bepul dastlabki konsultatsiya beradi.</p>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-2 text-slate-700 font-mono text-xs uppercase font-bold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Arxitektura Byurosi</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mb-1.5">
              {t("modal.title", "Arxitektura Loyihasiga Buyurtma Berish")}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Ma'lumotlaringizni qoldiring — arxitektorimiz sizga mos eng yaxshi yechim va byudjetni hisoblab beradi.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">{t("modal.name", "Ismingiz va Familiyangiz *")}</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input type="text" required placeholder="Masalan: Anvar Karimov" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full bg-slate-50 border border-slate-200 focus:border-slate-900 focus:bg-white rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">{t("modal.phone", "Telefon Raqamingiz *")}</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input type="tel" required placeholder="+998 90 123 45 67" value={phone} onChange={handlePhoneChange} className="w-full bg-slate-50 border border-slate-200 focus:border-slate-900 focus:bg-white rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all font-mono" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Loyiha / Xizmat Turi</label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select value={serviceType} onChange={(e) => setServiceType(e.target.value)} className="w-full bg-slate-50 border border-slate-200 focus:border-slate-900 focus:bg-white rounded-xl pl-10 pr-3 py-2.5 text-xs sm:text-sm text-slate-900 outline-none transition-all">
                      <option value="Individual Kottej Loyihalash">Kottej & Villa Loyihalash</option>
                      <option value="Eksklyuziv Interyer Dizayn">Interyer Dizayn</option>
                      <option value="Tijoriy Bino Loyihalash">Tijoriy Bino & Biznes Markaz</option>
                      <option value="Landshaft & Fasad Dizayni">Landshaft & Fasad Dizayni</option>
                      <option value="Mualliflik Nazorati">Mualliflik Nazorati</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">{t("modal.area", "Taxminiy Maydoni (m²)")}</label>
                  <div className="relative">
                    <Ruler className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input type="number" min="20" max="50000" placeholder="Masalan: 350" value={estimatedArea} onChange={(e) => setEstimatedArea(e.target.value ? Number(e.target.value) : "")} className="w-full bg-slate-50 border border-slate-200 focus:border-slate-900 focus:bg-white rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">{t("modal.notes", "Loyiha haqida qo'shimcha ma'lumot yoki istaklar")}</label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <textarea rows={2} placeholder="Masalan: Qibrayda 8 sotix yerga 2 qavatli zamonaviy villa..." value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full bg-slate-50 border border-slate-200 focus:border-slate-900 focus:bg-white rounded-xl pl-10 pr-4 py-2 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all resize-none" />
                </div>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer disabled:opacity-50">
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>{t("modal.submit", "Arizani Yuborish")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
