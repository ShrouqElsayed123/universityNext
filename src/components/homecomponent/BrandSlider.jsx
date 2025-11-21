
const brands = [
    '/images/brand1.jpg',
    '/images/brand2.jpg',
    '/images/brand3.jpg',
    '/images/brand4.jpg',
    '/images/brand5.jpg',
    '/images/brand6.jpg',
];

export default function BrandSlider() {

    return (
        <>
            <div className="overflow-hidden whitespace-nowrap bg-white dark:bg-gray-900 py-6"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
            >
                {/* <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('partner')} <span className="text-secondaryColor"></span>
          </h2>
        </div> */}

                <div className="relative w-full overflow-hidden">
                    <div className="slider-track flex gap-28 w-max">
                        {[...brands, ...brands].map((brand, index) => (
                            <img
                                key={index}
                                src={brand}
                                alt={`brand-${index}`}
                                className="h-24 w-auto object-contain"
                            />
                        ))}
                    </div>
                </div>
            </div>


        </>
    );
}
