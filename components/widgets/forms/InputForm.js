import { InformationCircleIcon } from "@heroicons/react/24/outline";

function DefaultInput({label,Icon, type, id, value, handleChange, placeholder, errors}) {

  return (
    <div className="relative group">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-white">
        {label}
      </label>
      <div className="relative mb-4">
        <div className="absolute inset-y-0 start-0 flex top-3.5 ps-4 pointer-events-none">
          {Icon && <Icon className="w-6 h-6 text-slate-500 group-hover:text-emerald-400 transition-colors" />}
        </div>
        <input
           type={type}
           id={id}
           value={value}
           onChange={handleChange}
           placeholder={placeholder}
          className={`bg-slate-800 appearance-none autofill:bg-yellow-200 focus:shadow-outline  border border-white/5 text-slate-50 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full ps-12 p-3.5 ${errors ? 'border-rose-500 border-2' : ''}`}
        />
          {errors && <span className="text-rose-500 text-sm pt-2 block items-center"><InformationCircleIcon className="w-5 h-5 inline" /> Field {errors}</span>}
      </div>
    
    </div>
  );
}

export default DefaultInput;
