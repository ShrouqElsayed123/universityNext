import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-200 dark:bg-gray-900 text-white pt-10 px-4" dir="rtl">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-10 pb-10 text-right">

        {/* شعار ووصف */}
        <div>
          <h2 className="text-xl  text-mainColor font-bold">جامعة المنوفية الاهلية</h2>
          <p className="text-sm text-gray-600 dark:text-white mt-2">
            رؤيتنا أن نكون رواد التعليم العالي والبحث العلمي لخدمة المجتمع وبناء مستقبل أفضل.
          </p>
          <div className="mt-4 space-y-2 text-sm text-gray-500">
            <div className="flex items-center gap-2 justify-start">
              <i className="fa-solid fa-location-dot text-mainColor" />
              <span>الكيلو 70 طريق القاهرة إسكندرية الزراعي </span>
            </div>
            <div className="flex items-center gap-2 justify-start">
              <i className="fa fa-envelope text-mainColor" />
              <span>support@mnu.edu.eg</span>
            </div>
          </div>
        </div>

        {/* روابط مهمة */}
        <div>
          <h3 className="text-mainColor font-semibold mb-4">عن الجامعة</h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-white ">
            <li><a href="#">من نحن</a></li>
            <li><a href="#">الكليات</a></li>
            <li><a href="#">إدارة الجامعة</a></li>
            <li><a href="#">الأخبار</a></li>
            <li><a href="#">الفعاليات</a></li>
          </ul>
        </div>

        {/* خدمات وأدلة */}
        <div>
          <h3 className="text-mainColor font-semibold mb-4">خدمات إلكترونية</h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-white">
            <li><a href="#">نظام الطلاب</a></li>
            <li><a href="#">المكتبة الرقمية</a></li>
            <li><a href="#">الدعم الفني</a></li>
            <li><a href="#">بوابة أعضاء هيئة التدريس</a></li>
          </ul>
        </div>

        {/* النشرة البريدية */}
        <div>
          <h3 className="text-mainColor font-semibold mb-4">اشترك في النشرة البريدية</h3>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="ادخل بريدك الإلكتروني"
              className="w-full p-2 rounded text-black placeholder:text-right"
            />
            <button
              type="submit"
              className="bg-mainColor text-white px-4 py-2 rounded hover:bg-secondaryColor w-full"
            >
              اشتراك
            </button>
          </form>
        </div>
      </div>

      {/* الأسفل */}
      <div className="border-t border-gray-700 py-4 text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center max-w-screen-xl mx-auto px-4 text-center sm:text-right">
        {/* أيقونات التواصل */}
        <div className="flex space-x-4 rtl:space-x-reverse mb-2 sm:mb-0">
          <a href="#" className="text-mainColor hover:text-white"> <i className="fa-brands fa-facebook footer-icon2"/></a>
          <a href="#" className="text-mainColor hover:text-white"> <i className="fa-brands fa-youtube footer-icon2"/></a>
          <a href="#" className="text-mainColor hover:text-white"> <i className="fa-solid fa-map-location-dot footer-icon2"/></a>
        </div>
       
        {/* الحقوق */}
        <p className="text-xs text-gray-600 dark:text-white">
        جميع الحقوق محفوظة © 2022 و حدة تكنولوجيا المعلومات - جامعة المنوفية الاهلية 
        </p>
      </div>
    </footer>

    </>
  )
}
