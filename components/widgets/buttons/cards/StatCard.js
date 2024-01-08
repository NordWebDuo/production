import { useEffect, useState } from "react";


function StatCard({endValue, title}) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValue((prevValue) => {
        const increment = Math.ceil(endValue / 100); // Modificați valoarea dacă doriți o animație mai rapidă/slow
        if (prevValue + increment >= endValue) {
          clearInterval(interval);
          return endValue;
        }
        return prevValue + increment;
      });
    }, 20); // Modificați intervalul dacă doriți o animație mai rapidă/slow

    return () => clearInterval(interval);
  }, [endValue]);

  

  return (
    <div className="stat bg-slate-800 hover:bg-slate-700 rounded-2xl border border-white/5 p-5 md:p-10">
      <div className="stat-value text-3xl md:text-5xl font-bold text-emerald-400 mb-2">
        {currentValue}<span className="text-2xl align-top">+</span>
      </div>
      <div className="stat-title text-sm md:text-base text-slate-300">{title}</div>
    </div>
  );
}

export default StatCard;