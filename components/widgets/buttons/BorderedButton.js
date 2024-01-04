import Link from "next/link";

const Borderedbutton = ({ Title,Icon,Source }) => (
    <>
    <Link href={Source}>
     <div className=" inline-flex items-center gap-1 border-2 hover:shadow-xl hover:shadow-emerald-600/40 text-emerald-400 hover:text-stone-900 border-emerald-400 hover:border-emerald-500 hover:bg-emerald-500 transition-colors font-medium rounded-full lg:text-md max-lg:text-sm px-6 max-lg:px-4 max-lg:py-2 py-3 me-2 mb-2 ">
     {Icon && <Icon className="w-6 h-6" />}
     {Title}
    </div>
    </Link>
    </>
)

export default Borderedbutton;