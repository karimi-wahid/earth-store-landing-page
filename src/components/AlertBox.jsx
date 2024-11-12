import React from 'react'

const AlertBox = ({setActiveAlert, label1, label2}) => {

    const dismissAlert = () => {
        setActiveAlert(false);
      };

    
  return (
        <div
          role="alert"
          className="fixed top-5 left-1/2 transform -translate-x-1/2 rounded-xl border border-gray-100 bg-slate-100 p-4 z-50 shadow-lg w-[80%] md:w-[60%] lg:w-[40%]"
        >
          <div className="flex items-start gap-4">
            <span className="text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>

            <div className="flex-1">
              <strong className="block font-medium text-gray-900">{label1}</strong>
              <p className="mt-1 text-sm text-secondary">{label2}</p>
            </div>

            <button
              onClick={dismissAlert}
              className="text-secondary transition"
            >
              <span className="sr-only">Dismiss popup</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
  )
}

export default AlertBox