import './Hero.css'

const Hero = () => {

    // import Hero.css


    const heading = "Smart TimeTable"
    const description = "Get Rid of TimeTable Conflicts | Generate Timetable Reports"

    return (
      

        <section className="background-radial-gradient  h-full">
    
          <div className="px-6 py-12 text-center md:px-12 lg:text-left">
            <div className="container mx-auto">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="mt-12 lg:mt-0">
                  <h1 className="mb-12 text-5xl font-bold tracking-tight text-[hsl(218,81%,95%)] md:text-6xl xl:text-7xl">
                    Smart TimeTable<br /><span className="text-[hsl(218,81%,75%)]">Clash Free and with Workload Reports</span>
                  </h1>
                  <p className="text-lg text-[hsl(218,81%,95%)]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima officia consequatur adipisci tenetur repudiandae rerum
                    quos.
                  </p>
                </div>
                <div className="mb-12 lg:mb-0">
                  <div id="dsa" className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
                    >
                    <iframe className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full"
                      src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
                      data-gtm-yt-inspected-2340190_699="true" id="240632615"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


    )
}

export default Hero