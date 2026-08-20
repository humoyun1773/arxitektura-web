import React from 'react';
import { useData } from '../../context/DataContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast } = useData();

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-sky-400 shrink-0" />
  };

  const bgStyles = {
    success: 'border-emerald-500/30 bg-emerald-950/80 text-emerald-100 shadow-emerald-500/10',
    error: 'border-rose-500/30 bg-rose-950/80 text-rose-100 shadow-rose-500/10',
    info: 'border-sky-500/30 bg-sky-950/80 text-sky-100 shadow-sky-500/10'
  };

  return (
    <div className="fixed top-6 right-6 z-50 max-w-md animate-in slide-in-from-top-4 duration-300">
      <div className={`flex items-center gap-3 p-4 rounded-xl border backdrop-blur-xl shadow-2xl ${bgStyles[toast.type]}`}>
        {icons[toast.type]}
        <p className="text-sm font-medium pr-2">{toast.message}</p>
      </div>
    </div>
  );
};
