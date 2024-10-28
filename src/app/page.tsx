
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import InfoBoxes from './Components/InfoBoxes'
import AboutUs from './Components/AboutUs'
import Contact from './Components/Contact'
import Slider from './Components/Slider'
import Skills from './Components/Skills'

export default function Home() {
  return (

<div>
<Navbar />
<Hero />
<InfoBoxes />
<AboutUs />
<Slider />
<Skills />

<Contact />
</div>
      );
}
