import React from 'react'

export default function StudentGuide() {
  return (
   <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 mb-10 px-2 sm:px-4">
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-center max-[400px]:text-base">
                    Download <span className="text-mainColor">Report</span>
                </h1>
                <div className="mt-1 mx-auto h-1 w-20 sm:w-32 bg-gradient-to-r from-mainColor to-green-400 rounded-full"></div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white shadow-lg rounded-2xl p-5 sm:p-6 text-center hover:shadow-xl transition w-full max-w-sm"
                >
                    <div>
                        <BookOpen className="text-mainColor w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3" />
                        <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 max-[400px]:text-sm">
                            Sustainability Annual Report 2025
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm max-[400px]:text-[10px]">
                            Policy framework for environmental and sustainability actions.
                        </p>
                    </div>
                    <a
                        href="/mnu/pdfs/Sustainability Annual report 2025.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block bg-mainColor text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition text-sm sm:text-base max-[400px]:text-xs"
                    >
                        Show File
                    </a>
                </motion.div>
            </div> 
  )
}
