import Link from "next/link";

const DefaultButton = ({ Title,Icon,Source }) => (
    <>
    <Link href={Source}>
     <div className="button text-stone-900 inline-flex items-center gap-1 border-2 hover:shadow-xl hover:shadow-emerald-600/40 border-emerald-400 hover:border-emerald-500 bg-emerald-400 hover:bg-emerald-500 transition-all font-medium rounded-full lg:text-md max-lg:text-sm px-6 py-3 max-lg:px-4 max-lg:py-2  me-2 mb-2 ">
     {Icon && <Icon className="w-6 h-6" />}
     {Title}
    </div>
    </Link>
    </>
)

export default DefaultButton;