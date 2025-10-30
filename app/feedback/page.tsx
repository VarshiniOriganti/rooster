import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function FeedbackPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-gradient-to-r from-primary to-primary/80 py-20 text-center">
        <h1 className="text-5xl font-bold text-secondary mb-4">Customer Feedback</h1>
        <p className="text-xl text-secondary/90">Real stories from guests who love Rooster</p>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*QrqDjJD_rKpitI686FabiA.jpeg"
            alt="Customer feedback collage"
            className="w-full h-auto rounded-xl shadow-lg border-2 border-secondary/20 object-cover"
          />
          <div className="mt-8 space-y-4">
            <h2 className="text-3xl font-bold text-primary">What Our Guests Say</h2>
            <p className="text-muted-foreground">
              Your feedback helps us craft better flavors, improve our service, and design a dining
              experience you’ll love returning to. We carefully review every message we receive and use
              it to train our team and refine our menu.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Freshness and flavor of food are consistently rated highly.</li>
              <li>Friendly, quick service makes us a favorite for families and groups.</li>
              <li>Seasonal specials and desserts are crowd-pleasers—keep the ideas coming!</li>
            </ul>
            <p className="text-muted-foreground">
              Have a suggestion or a story to share? We’re all ears. Your voice helps shape Rooster.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-card py-14 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-3">Share Your Experience</h2>
          <p className="text-muted-foreground mb-6">
            We’d love to hear from you! Send your feedback and pictures from your visit.
          </p>
          <a
            href="mailto:feedback@rooster.example"
            className="inline-block bg-secondary text-primary font-bold px-8 py-3 rounded-full hover:bg-secondary/90"
          >
            Send Feedback
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
