import Hero from '../components/Hero'
import DivisionsOverview from '../components/DivisionsOverview'
import Mission from '../components/Mission'
import CallToAction from '../components/CallToAction'

export default function Home() {
  return (
    <div>
      <Hero />
      <Mission />
      <DivisionsOverview />
      <CallToAction />
    </div>
  )
}
