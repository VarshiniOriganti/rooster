"use client"

export default function About() {
  return (
    <section id="about" className="py-20 bg-background" data-animate>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-5xl font-bold text-primary mb-6">About Rooster</h2>
            <p className="text-lg text-foreground mb-4 leading-relaxed">
              Welcome to Rooster, where passion meets flavor. We believe in serving food that's not just delicious, but
              made with love and the freshest ingredients available.
            </p>
            <p className="text-lg text-foreground mb-4 leading-relaxed">
              Our mission is simple: deliver fast, friendly service with meals that taste like home. Whether you're
              craving a classic burger, authentic pizza, or something quick like Maggi, we've got you covered.
            </p>
            <p className="text-lg text-foreground mb-4 leading-relaxed">
              We source locally whenever possible, prepare fresh every day, and craft recipes that bring comfort and joy
              to every table. From family dinners to late-night cravings, Rooster is here for you.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-foreground">
              <li className="flex items-start gap-2"><span className="text-secondary font-semibold">•</span> Fresh, quality ingredients</li>
              <li className="flex items-start gap-2"><span className="text-secondary font-semibold">•</span> Fast and friendly service</li>
              <li className="flex items-start gap-2"><span className="text-secondary font-semibold">•</span> Made-to-order meals</li>
              <li className="flex items-start gap-2"><span className="text-secondary font-semibold">•</span> Community-focused values</li>
            </ul>

            <div className="flex gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                <p className="text-foreground">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">50+</div>
                <p className="text-foreground">Menu Items</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">10+</div>
                <p className="text-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-fade-in-up flex justify-center">
            <img src="/restaurant-kitchen-chef-cooking.jpg" alt="Rooster Kitchen" className="w-full max-w-md md:max-w-lg rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
