import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import Dedicated from './components/Dedicated/index';
import Digital from './components/Digital/index';
import Beliefs from './components/Beliefs/index';
import Wework from './components/Wework/index';
import Ourteam from './components/Ourteam/index';
import Featured from './components/Featured/index';
import Manage from './components/Manage/index';
import FAQ from './components/FAQ/index';
import Testimonials from './components/Testimonials/index';
import Articles from './components/Articles/index';
import Joinus from './components/Joinus/index';
import Insta from './components/Insta/index';
import WhatsAppButton from './components/WhatsappButton';
import CallNowButton from './components/CallButton';



export default function Home() {
  return (
    <main>
      <Banner />
      <Aboutus />
      <Articles />
      <Dedicated />
      <Digital />
      <Beliefs />
      <Wework />
      <Ourteam />
      {/* <Featured /> */}
      <Manage />
      <Testimonials />
      <FAQ />
      <Joinus />
      <Insta />
      <WhatsAppButton textMessage="I'm interested in your car for sale" />
      <CallNowButton />
    </main>
  )
}
