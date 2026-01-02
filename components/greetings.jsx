"use client"

export default function Greetings() {
  return (
    <section id="greetings" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-slate-900">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Image */}
            <div className="relative h-[280px] md:h-full">
              <img
                src="grettings.jpeg"
                alt="Joseph M. Brown, Board Chair"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">
                Message from the Board Chair
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
                Leadership with Vision <br className="hidden md:block" /> and Integrity
              </h2>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                On behalf of the Juachini Group, I extend my heartfelt gratitude to our partners,
                clients, and dedicated team for their unwavering commitment and support.
                As we look ahead, our focus remains on mining, construction, innovation,
                integrity, and sustainable growth.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Together, we will continue to build a future defined by excellence and shared success.
              </p>

              <div className="border-t pt-6 border-gray-200 dark:border-slate-700">
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  Joseph M. Brown
                </p>
                <p className="text-sm text-muted-foreground">
                  Board Chair, Juachini Group
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
