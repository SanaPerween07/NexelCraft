
import NumberTicker from "@/components/ui/number-ticker";

export function NumberTickerDemo() {
    return (
        <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
            <div className="md:w-2/5">
              <h1 className="text-2xl font-medium text-gray-600 w-4/5">
                Trusted by fast moving brands worldwide
              </h1>

              <div className="flex my-6 gap-x-5 w-full">
                <div>
                  <h1 className="text-blue-500 text-3xl md:text-5xl">
                    <NumberTicker value={1000} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Happy Clients
                    </p>
                  </h1>
                </div>

                <div className="w-px bg-gray-300 self-stretch"></div>

                <div className="flex-1 min-w-0">
                  <h1 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                    <NumberTicker value={100} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Projects Completed
                    </p>
                  </h1>
                </div>
                
                {/* <section className="overflow-hidden mt-10 w-3">
                <InfiniteMovingLogos speed="fast"  direction="left" 
                  items={[
                    {
                      logo : "/images/logo.png",
                      name : "logo"
                    },
                    {
                      logo : "/images/logo.png",
                      name : "logo"
                    },
                    {
                      logo : "/images/logo.png",
                      name : "logo"
                    },
                  ]}
                  />
                </section> */}

              </div>
            </div>
        </div>
    );
}

