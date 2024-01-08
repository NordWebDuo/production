import Link from "next/link";

const DefaultButton = ({ Title,Icon,Source, color , iconPosition }) => {

    const colors = {
        default: {
          bg: 'bg-emerald-400',
          bgHover: 'hover:bg-emerald-500',
          borderHover: 'hover:border-emerald-500',
          text: 'text-stone-900',
          shadow: 'hover:shadow-emerald-400/20',
          border: 'border-emerald-400',
        },
        'dark': {
          bg: 'bg-slate-800',
          text: 'text-white',
          bgHover: 'hover:bg-slate-700',
          borderHover: 'hover:border-slate-700',
          shadow: 'hover:shadow-slate-600/30',
          border: 'border-slate-800',
        },
        'bordered': {
            bg: 'bg-transparent',
            text: 'text-emerald-400',
            textHover: 'hover:text-stone-900',
            bgHover: 'hover:bg-emerald-500',
            borderHover: 'hover:border-emerald-500',
            shadow: 'hover:shadow-emerald-600/20',
            border: 'border-emerald-400',
          },
          'bordered-dark': {
            bg: 'bg-transparent',
            text: 'text-slate-800',
            textHover: 'hover:text-white',
            bgHover: 'hover:bg-slate-800',
            borderHover: 'hover:border-slate-800',
            shadow: 'hover:shadow-slate-600/20',
            border: 'border-slate-800',
          },
      };

  const buttonColorClass = colors[color] ? colors[color].bg : colors.default.bg;
  const textHoverColorClass = colors[color] ? colors[color].textHover : colors.default.textHover;
  const buttonHoverColorClass = colors[color] ? colors[color].bgHover : colors.default.bgHover;
  const buttonBorderHoverColorClass = colors[color] ? colors[color].borderHover : colors.default.borderHover;
  const textColorClass = colors[color] ? colors[color].text : colors.default.text;
  const shadowClass = colors[color] ? colors[color].shadow : colors.default.shadow;
  const borderClass = colors[color] ? colors[color].border : colors.default.border;
    
    
    const iconClasses = iconPosition === 'left' ? 'order-1' : 'order-2';

    return (
    <>
    <Link href={Source}>
    <div className={`${shadowClass} ${buttonBorderHoverColorClass} ${textHoverColorClass} ${buttonHoverColorClass} ${borderClass} ${buttonColorClass} ${textColorClass} inline-flex items-center gap-1 border-2 hover:shadow-xl  transition-all font-medium rounded-full lg:text-md max-lg:text-sm px-6 py-3 max-lg:px-4 max-lg:py-2`}>
    {iconPosition === 'left' && Icon && <Icon className={`w-6 h-6 ${iconClasses}`} />}
    <span className="order-2">{Title}</span>
     {iconPosition === 'right' && Icon && <Icon className={`w-6 h-6 ${iconClasses}`} />}
    </div>
    </Link>
    </>
    );
}


export default DefaultButton;