import Featured from '../components/Featured/Featured'
import HomeFruits from '../components/Fruits/HomeFruits'
import Hero from '../components/Hero/Hero'
import HomeVeggies from '../components/Veggies/HomeVeggies'

function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <HomeVeggies />
      <HomeFruits />
    </main>
  )
}

export default Home