import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import QuickContact from './components/QuickContact';
import BottomNav from './components/BottomNav';


export const metadata = {
  title: 'Car Hire Mumbai',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* <QuickContact /> */}
        <Navbar />
        {children}
        <div className='md:hidden block'>
          <BottomNav />
        </div>
        <Footer />
      </body>
    </html>
  )
}
