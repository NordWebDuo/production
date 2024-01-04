import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

function NoData() {
    return(
       <div className="flex justify-center items-center gap-2 mt-5 bg-slate-800 rounded-3xl p-4">
        <ExclamationCircleIcon className="text-rose-600 w-6 h-6 " />
       <span className="text-rose-600"> Something went wrong</span>
        </div>
    )
}

export default NoData;