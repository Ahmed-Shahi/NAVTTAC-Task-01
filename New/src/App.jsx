import './App.css'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import settings from "../public/settings.png"
function App() {

  return (
    <>
    <Header/>
    <Hero/>
    <div className='footer-cards'>
      <Footer logo={settings} heading="Heading 1" text="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
    <Footer logo={settings} heading="Heading 2" text="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
    <Footer logo={settings} heading="Heading 3" text="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
    <Footer logo={settings} heading="Heading 4" text="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
    <Footer logo={settings} heading="Heading 5" text="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
    <Footer logo={settings} heading="Heading 6" text="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
    </div>
    </>
  )
}

export default App
