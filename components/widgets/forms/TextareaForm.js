import { InformationCircleIcon } from "@heroicons/react/24/outline";

function TextareaForm(props) {
  const { label, id, value, handleChange,placeholder, Icon,errors } = props;
  return (
    <div className="form-group group">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-white">{label}</label>
      <div className="relative mb-6">
      <div className="absolute top-4 inset-y-0 start-0 flex  ps-4 pointer-events-none">
      { Icon && <Icon className="w-6 h-6 text-slate-500 group-hover:text-emerald-400 transition-colors" />}
      </div>
      <textarea
        className="bg-slate-800 border border-white/5 text-slate-50 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full ps-12 p-3.5"
        value={value}
           onChange={handleChange}
        id={id}
        rows={3}
        placeholder={placeholder}
      />
      {errors && <span className="text-rose-500 text-sm pt-2 block items-center"><InformationCircleIcon className="w-5 h-5 inline" /> Field {errors}</span>}
      </div>
    </div>
  );
}

export default TextareaForm;