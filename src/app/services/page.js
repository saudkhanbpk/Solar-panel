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
            At <span className="font-semibold text-[#82C701]">GO GREEN</span>, we provide
            reliable and cost-effective solar system solutions designed to reduce your
            electricity bills and make your home or business energy independent. Our
            solar panels are built with advanced technology to deliver maximum output
            even in low sunlight conditions.
          </p>

          <p>
            We specialize in complete solar solutions including consultation, system
            design, installation, and maintenance. Whether you need a small domestic
            solar setup or a large commercial system,{" "}
            <span className="font-semibold text-[#82C701]">GO GREEN</span> ensures
            professional service with guaranteed performance and long-term durability.
          </p>

          <p>
            By choosing <span className="font-semibold text-[#82C701]">GO GREEN</span>,
            you are not only saving money but also contributing to a cleaner and greener
            environment. Together, we can reduce carbon emissions and promote
            sustainable living through renewable solar energy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="bg-white p-6 text-center rounded-2xl shadow-md hover:shadow-xl border-t-4 border-[#82C701] transition duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-[#082E6F] mb-3">
              EPC (Engineering, Procurement, Construction)
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              We offer complete EPC solutions, delivering end-to-end services for solar
              projects across <b>industrial, commercial, agricultural, and domestic</b> sectors.
              Our engineers design each system with precision to ensure maximum efficiency,
              reliability, and long-term performance.
            </p>
            <p className="text-gray-600 text-sm">
              From sourcing premium equipment to safe construction, testing, and ongoing
              support, we deliver turnkey solar projects on time—backed by guaranteed
              quality and results.
            </p>
          </div>




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
              Solar Wheeling Services
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Unlock the power of solar energy beyond a single site with our professional
              <b> wheeling solutions</b>. Generate electricity at one location and seamlessly
              consume it at another through the national grid.
            </p>
            <p className="text-gray-600 text-sm">
              We handle the technical, legal, and utility coordination to ensure smooth
              energy transfer, helping industries and businesses reduce costs, achieve
              sustainability goals, and maximize the value of their solar investments.
            </p>
          </div>

        </div>

        <StatsSection />

        <h1
          id="epc"
          className="scroll-mt-24 text-center text-3xl font-bold text-[#082E6F] my-8 border-l-[5px] border-r-[5px] border-[#82C701] inline-block px-4 py-2 rounded-lg shadow-sm"
        >
          EPC (Engineering, Procurement, Construction)
        </h1>

        <div>
          <p className="text-gray-700">
            At <span className="font-semibold text-[#82C701]">GO GREEN </span>, we deliver complete EPC solutions covering
            Engineering, Procurement, and Construction with full after-support. Our expert engineers design solar systems
            tailored to your site and energy requirements, handling planning, load calculations, and component selection with
            precision to ensure long-term reliability. We carefully procure top-quality panels, inverters, and related equipment
            from trusted global brands, ensuring performance, durability, and cost-effectiveness. During construction, our skilled
            technicians follow international safety standards and best practices to install mounting structures, perform electrical
            wiring, and integrate the system with the grid efficiently and on time. Beyond project completion, we provide dedicated
            after-sales support, including monitoring, troubleshooting, and maintenance, ensuring your solar system continues to
            operate at peak efficiency throughout its lifecycle.
          </p>
        </div>




        <h1
          className='scroll-mt-24 text-center text-3xl font-bold text-[#082E6F] mb-8 mt-8 border-l-[5px] border-r-[5px] border-[#82C701] inline-block px-4 py-2 rounded-lg shadow-sm'
          id="solar-consultancy"
        >
          Solar System Consultancy
        </h1>

        <div className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-[#82C701]">Local Expertise</h2>
            <p>
              With years of experience in Pakistan’s solar energy sector,
              <b className="text-[#082E6F]"> GO GREEN </b> understands the specific climate conditions,
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
              <b className="text-[#082E6F]"> GO GREEN </b> brings technical know-how,
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
              <b className="text-[#082E6F]"> GO GREEN </b> ensures that you not only
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
              uninterrupted green energy. With <b>GO GREEN</b>,
              you’re never left alone in urgent situations — help is just a call away.
            </p>
          </div>
        </div>

        {/* Cleaning */}
        <h1
          id="solar-wheeling"
          className="scroll-mt-24 text-center text-3xl font-bold text-[#082E6F] my-8 border-l-[5px] border-r-[5px] border-[#82C701] inline-block px-4 py-2 rounded-lg shadow-sm"
        >
          Solar Wheeling Services
        </h1>

        <div>
          <div className="space-y-6 text-gray-700">

            <div>
              <h2 className="text-xl font-semibold text-[#82C701]">Energy Transfer Across Locations</h2>
              <p>
                Solar wheeling enables you to generate electricity at one site and
                consume it at another, using the national grid as the transmission
                channel. This is especially valuable for industries, businesses,
                and organizations with facilities spread across multiple cities.
                With wheeling, your investment in solar power is not restricted
                to a single location but shared across your entire operation.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#82C701]">Seamless Utility Coordination</h2>
              <p>
                Our team manages the complete technical and legal process, including
                approvals, wheeling agreements, and utility coordination. We ensure
                smooth integration with the grid, so you can focus on running your
                business while enjoying uninterrupted access to clean energy at
                your chosen sites. This end-to-end support simplifies a complex
                process into a hassle-free solution.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#82C701]">Cost Savings & Reliability</h2>
              <p>
                By generating power at lower-cost locations and consuming it where
                electricity rates are higher, wheeling allows you to reduce overall
                energy expenses. Businesses can lock in predictable solar power
                costs, avoiding tariff fluctuations. At the same time, it ensures
                reliability, as your energy is sourced directly from your own
                solar generation rather than depending solely on expensive grid power.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#82C701]">Sustainability & Growth</h2>
              <p>
                Solar wheeling is not just about savings—it’s about creating a
                sustainable future. By replacing fossil fuel–based electricity
                with renewable energy across multiple facilities, your organization
                significantly reduces its carbon footprint. This strengthens your
                ESG (Environmental, Social, and Governance) profile and supports
                long-term business growth while contributing to a cleaner,
                greener Pakistan.
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
