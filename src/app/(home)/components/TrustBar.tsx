import StatsBand from '@/components/portfolio/StatsBand'
import { headlineStats } from '@/content/skills'

const TrustBar = () => (
  <section className="py-14 md:py-20">
    <div className="container">
      <StatsBand stats={headlineStats} columns={4} />
    </div>
  </section>
)

export default TrustBar
