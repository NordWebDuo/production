import { ArrowDownIcon } from "@heroicons/react/24/outline";

const ButtonBordered = ({ Title,onClick }) => (
    <>
    <button onClick={onClick} className="inline-flex items-center gap-1 border-2 text-emerald-400 hover:text-stone-900 border-emerald-400 hover:bg-emerald-500 transition-colors font-medium rounded-full lg:text-md max-lg:text-sm px-6 max-lg:px-4 max-lg:py-2 py-3">
                  {Title}  <ArrowDownIcon className="w-4 h-4" />
                </button>
    </>
)

export default ButtonBordered;