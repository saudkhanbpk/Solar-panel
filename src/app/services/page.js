import React from 'react'
import StatsSection from '../../Components/State-Section'
import Calltoexpert from '../../Components/Calltoexpert'

const Page = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-center text-center items-center bg-[url(/services-home.png)] bg-cover bg-center h-64 ring-1 ring-[#082E6F]/10">
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <h1 className='text-center text-3xl font-bold text-[#082E6F] mb-8 border-l-[5px] border-r-[5px] border-[#82C701] inline-block px-4 py-2 rounded-lg shadow-sm'>
          SOLAR SYSTEM SERVICES
        </h1>

        <div className="space-y-4 text-gray-700 leading-relaxed mb-5">
          <p>
            At <span className="font-semibold text-[#82C701]">GO GREEN POWER WITH SUN</span>, we provide
            reliable and cost-effective solar system solutions designed to reduce your
            electricity bills and make your home or business energy independent. Our
            solar panels are built with advanced technology to deliver maximum output
            even in low sunlight conditions.
          </p>

          <p>
            We specialize in complete solar solutions including consultation, system
            design, installation, and maintenance. Whether you need a small domestic
            solar setup or a large commercial system,{" "}
            <span className="font-semibold text-[#82C701]">GO GREEN POWER WITH SUN</span> ensures
            professional service with guaranteed performance and long-term durability.
          </p>

          <p>
            By choosing <span className="font-semibold text-[#82C701]">GO GREEN POWER WITH SUN</span>,
            you are not only saving money but also contributing to a cleaner and greener
            environment. Together, we can reduce carbon emissions and promote
            sustainable living through renewable solar energy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="bg-white p-6 text-center rounded-2xl shadow-md hover:shadow-xl border-t-4 border-[#82C701] transition duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-[#082E6F] mb-3">
              Solar System Consultancy
            </h3>
            <p className="text-gray-600 text-sm ">
              We provide expert consultancy to help you choose the best solar
              system according to your energy needs and budget.
            </p>
            <p className="text-gray-600 text-sm">
              Our guidance ensures maximum efficiency and long-term savings on
              your investment in renewable energy.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 text-center rounded-2xl shadow-md hover:shadow-xl border-t-4 border-[#82C701] transition duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-[#082E6F] mb-3">
              Solar System Installation
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Our professional team ensures smooth and secure installation of
              solar panels and inverters with guaranteed performance.
            </p>
            <p className="text-gray-600 text-sm">
              We follow strict safety standards to deliver long-lasting solar
              solutions for homes and businesses.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 text-center rounded-2xl shadow-md hover:shadow-xl border-t-4 border-[#82C701] transition duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-[#082E6F] mb-3">
              Solar System Maintenance
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Regular maintenance helps keep your solar system running at its
              best, ensuring consistent performance.
            </p>
            <p className="text-gray-600 text-sm">
              We provide scheduled checkups, repairs, and upgrades to extend the
              lifespan of your solar equipment.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 text-center rounded-2xl shadow-md hover:shadow-xl border-t-4 border-[#82C701] transition duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-[#082E6F] mb-3">
              Solar System Cleaning
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Professional cleaning services to maximize sunlight absorption for
              higher energy output.
            </p>
            <p className="text-gray-600 text-sm">
              Our eco-friendly cleaning process keeps panels dirt-free and ensures
              optimal performance year-round.
            </p>
          </div>
        </div>

        <StatsSection />

        <h1
          className='scroll-mt-24 text-center text-3xl font-bold text-[#082E6F] mb-8 border-l-[5px] border-r-[5px] border-[#82C701] inline-block px-4 py-2 rounded-lg shadow-sm'
          id="solar-consultancy"
        >
          Solar System Consultancy
        </h1>

        <div className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-[#82C701]">Local Expertise</h2>
            <p>
              With years of experience in Pakistan’s solar energy sector,
              <b className="text-[#082E6F]"> GO GREEN POWER WITH SUN </b> understands the specific climate conditions,
              local regulations, and power challenges faced by homeowners and businesses.
              Our consultancy not only analyzes your location and energy requirements
              but also provides in-depth recommendations on system sizing, panel placement,
              and cost-saving opportunities. This ensures you receive a solar solution
              that is both efficient and perfectly aligned with Pakistan’s environment.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#82C701]">Extensive Experience</h2>
            <p>
              From small residential rooftops to large-scale industrial solar farms,
              we have successfully delivered a wide range of projects.
              <b className="text-[#082E6F]"> GO GREEN POWER WITH SUN </b> brings technical know-how,
              proven methodologies, and hands-on project management to every client.
              Our experience allows us to anticipate potential challenges,
              optimize system performance, and ensure that your investment
              produces maximum energy output over its lifetime.
              Whether it’s a new setup or system expansion, we’ve got you covered.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#82C701]">Quality Assurance</h2>
            <p>
              Quality is the foundation of our consultancy services.
              We follow international standards such as IEC and ISO for solar installations
              and carefully evaluate all equipment before recommending it.
              Every solution we propose is designed with durability,
              energy efficiency, and long-term reliability in mind.
              <b className="text-[#082E6F]"> GO GREEN POWER WITH SUN </b> ensures that you not only
              achieve energy independence but also enjoy a sustainable,
              worry-free solar system that continues to deliver results
              year after year.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#82C701]">Customer-Centric Approach</h2>
            <p>
              At <b className="text-[#082E6F]"> GO GREEN POWER WITH SUN </b>, our clients are at the heart of everything we do.
              We don’t just consult — we listen, understand, and design solutions
              tailored to your energy needs, budget, and future goals.
              Our experts guide you from the initial consultation to final installation
              and continue to provide after-sales support.
              We believe in transparency, trust, and long-term partnerships,
              ensuring that your journey towards clean, renewable energy
              is smooth, cost-effective, and truly rewarding.
            </p>
          </div>
        </div>

        {/* Installation */}
        <h1
          id="solar-installation"
          className="scroll-mt-24 text-center text-3xl font-bold text-[#082E6F] my-8 border-l-[5px] border-r-[5px] border-[#82C701] inline-block px-4 py-2 rounded-lg shadow-sm"
        >
          Solar System Installation
        </h1>

        <div>
          <div className="space-y-6 text-gray-700">
            <div>
              <h2 className="text-xl font-semibold text-[#82C701]">Professional Setup</h2>
              <p>
                Our certified engineers and technicians carry out a highly professional setup of solar panels, inverters, and wiring.
                Every step of the installation process is handled with precision to ensure safe mounting, correct alignment,
                and optimized energy production. We carefully evaluate your site conditions and customize the setup to deliver
                maximum efficiency, durability, and long-term performance.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#82C701]">Safety Standards</h2>
              <p>
                We strictly adhere to international safety standards and best practices during the installation process.
                From electrical wiring to structural fittings, every component is double-checked to avoid risks such as
                short-circuiting, overheating, or fire hazards. This ensures not only the safety of your property and equipment
                but also peace of mind for your family or business.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#82C701]">Timely Execution</h2>
              <p>
                Our highly skilled and experienced team ensures that all projects are completed within the promised timeline.
                We focus on efficiency without compromising on quality, which means your solar system is operational as quickly
                as possible. By using modern tools, structured planning, and a disciplined workflow, we minimize delays and
                deliver results that exceed expectations.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#82C701]">After-Support</h2>
              <p>
                Our relationship with customers does not end after installation. We provide continuous after-sales support,
                including system monitoring, troubleshooting, and performance optimization. Whether it’s a minor adjustment,
                a technical query, or long-term maintenance, our dedicated support team is always available to ensure
                your solar system continues to perform at peak efficiency year after year.
              </p>
            </div>
          </div>
        </div>

        {/* Maintenance */}
        <h1
          id="solar-maintenance"
          className="scroll-mt-24 text-center text-3xl font-bold text-[#082E6F] my-8 border-l-[5px] border-r-[5px] border-[#82C701] inline-block px-4 py-2 rounded-lg shadow-sm"
        >
          Solar System Maintenance
        </h1>

        <div className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-[#82C701]">Routine Inspections</h2>
            <p>
              We provide scheduled inspections that go beyond a simple check-up.
              Our experts carefully analyze the condition of your solar panels, inverters,
              wiring, and overall system performance to identify potential issues
              before they become costly problems. These proactive inspections
              help maximize efficiency, extend the lifespan of your equipment,
              and ensure that your investment continues to generate
              clean energy without interruption. By detecting dust buildup, shading
              issues, or early signs of component wear, we help you maintain
              optimal power output all year round.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#82C701]">Performance Optimization</h2>
            <p>
              To keep your solar system performing at its best, we provide
              regular tune-ups and software updates. Our performance optimization
              service involves detailed energy output analysis, inverter recalibration,
              and cleaning of solar modules to ensure peak efficiency.
              We also use monitoring tools to track real-time performance
              and make adjustments that improve energy yield. With our expertise,
              your solar setup will consistently deliver maximum savings on electricity
              bills while reducing carbon footprint, ensuring long-term benefits
              for both your home and the environment.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#82C701]">Component Replacement</h2>
            <p>
              Over time, certain solar components may lose efficiency or fail due
              to wear and tear. We provide reliable component replacement services
              using only top-quality, certified parts that meet international standards.
              Whether it’s a faulty inverter, damaged wiring, or degraded solar modules,
              we ensure seamless replacement to restore full system performance.
              Our focus is not only on fixing the issue but also on upgrading
              outdated technology with modern, more efficient alternatives.
              This guarantees that your solar system remains durable, productive,
              and capable of serving you for many years to come.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#82C701]">Emergency Support</h2>
            <p>
              Solar systems are designed for reliability, but unexpected issues
              can still arise. That’s why our team provides fast and dependable
              emergency maintenance support. Whether you experience sudden power
              loss, inverter errors, or unexpected system shutdowns,
              our technicians are available to respond quickly and restore
              functionality. We minimize downtime and energy loss, giving you
              peace of mind that your system will continue delivering
              uninterrupted green energy. With <b>GO GREEN POWER WITH SUN</b>,
              you’re never left alone in urgent situations — help is just a call away.
            </p>
          </div>
        </div>

        {/* Cleaning */}
        <h1
          id="solar-cleaning"
          className="scroll-mt-24 text-center text-3xl font-bold text-[#082E6F] my-8 border-l-[5px] border-r-[5px] border-[#82C701] inline-block px-4 py-2 rounded-lg shadow-sm"
        >
          Solar System Cleaning
        </h1>

        <div>
          <div className="space-y-6 text-gray-700">
            <div>
              <h2 className="text-xl font-semibold text-[#82C701]">Dust Removal</h2>
              <p>
                Dust, dirt, and debris often settle on the surface of solar panels,
                blocking sunlight and reducing energy production. Even a thin layer
                of dust can lower efficiency by 10–20%. Our professional dust removal
                service ensures your panels are safely and thoroughly cleaned without
                causing scratches or damage to the glass surface. With regular cleaning,
                you can enjoy maximum sunlight absorption, improved system performance,
                and consistent power output throughout the year.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#82C701]">Eco-Friendly Cleaning</h2>
              <p>
                We prioritize sustainability by using water-efficient techniques
                and eco-friendly cleaning solutions. Unlike harsh chemicals that
                may damage your panels or harm the environment, our methods are
                gentle yet effective. This ensures your solar system remains
                protected while also reducing water waste. By choosing our
                eco-friendly cleaning services, you not only maintain your
                solar system’s health but also contribute positively to the
                environment you rely on for clean energy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#82C701]">Scheduled Services</h2>
              <p>
                Consistency is key to long-term solar efficiency. That’s why we offer
                scheduled cleaning and maintenance plans tailored to your needs.
                Whether you prefer monthly, quarterly, or seasonal cleanings,
                our team ensures your panels stay spotless and fully functional.
                This proactive approach prevents energy loss, saves you the hassle
                of irregular maintenance, and provides peace of mind knowing
                your solar investment is always protected and performing at its best.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#82C701]">Maximized Efficiency</h2>
              <p>
                Clean panels capture more sunlight, which directly translates
                into higher energy generation and greater savings on electricity bills.
                Studies show that dirty panels can reduce output by up to 30%,
                which means regular cleaning is essential for maximizing efficiency.
                Our services ensure that every panel is spotless, so your solar system
                delivers peak performance. With increased output, you not only save
                money but also contribute more clean energy back to the grid,
                making your investment more valuable in the long run.
              </p>
            </div>
          </div>
        </div>

        <Calltoexpert className='m-8 bg-none' />
      </div>
    </div>
  )
}

export default Page
