import { Toast } from 'flowbite-react';
import { useEffect,useRef } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

function SuccessAlert() {

  const toastRef = useRef(null);

  useEffect(() => {
    const hideToast = () => {
      if (toastRef.current) {
        toastRef.current.style.display = 'none'; // Ascunde Toast-ul dacă există referința către acesta
      }
    };

    const timeout = setTimeout(hideToast, 5000);

    return () => {
      clearTimeout(timeout); // Curăță intervalul pentru a preveni memory leak
    };
  }, []);

  return (
    <Toast ref={toastRef} className="toast fixed bottom-6 rounded-2xl  shadow-lg right-6 transform " style={{ display: 'fixed' }}>
      <CheckCircleIcon className="h-14 w-14 text-emerald-400" />
      <div className="pl-3 text-sm font-normal">
        <p className='font-semibold text-base text-slate-900'>Message sent successfully! </p>
       <p className='text-slate-500 text-sm'> Our team will contact you as soon as possible.</p>
      </div>
      <Toast.Toggle />
    </Toast>
  );
}

export default SuccessAlert;