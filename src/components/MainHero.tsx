import TourSelector from '@/components/TourSelector'


export default function HeroSection() {
    return (
        <div className="relative h-[calc(100dvh-80px)] md:h-[calc(100dvh-132px)] w-full overflow-hidden z-[1] pt-36">
            {/* Video Background */}
            <div className="absolute top-0 left-0 w-full h-full z-[0]">
                <iframe
                    src="https://player.vimeo.com/video/1038385534?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
                    className="absolute 
                              xl:top-1/2 xl:h-[200%] xl:w-[200%] xl:[aspect-ratio:16/9]
                              top-[calc(50%-4px)] left-1/2 w-[177.77777778vh] min-w-full min-h-[calc(100%+6px)] 
                              -translate-x-1/2 -translate-y-1/2"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                />
            </div>
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
                <p className="mb-4 text-center text-xl md:text-2xl font-satisfy text-white">
                    Ven a conocer la magia de Rapa Nui
                </p>

                <h1 className="mb-10 md:mb-16 text-center text-3xl font-bold text-white md:text-6xl">
                    Aventuras Guiadas por
                    <br />
                    Expertos Locales
                </h1>

                <div className="w-full max-w-4xl rounded-lg bg-gray-200/20 p-6 py-10 backdrop-blur-sm">
                    <TourSelector />
                </div>
            </div>
        </div>
    )
}

