import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useRouter } from 'next/router'
import OrbBackground from '@/components/OrbBackground'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const showOrb = router.pathname === '/'

  return (
    <div className="relative min-h-screen bg-backdrop text-white">
      {showOrb && <OrbBackground hue={220} />}
      <Navbar />
      <main className="p-4">{children}</main>
      <Footer />
    </div>
  )
}
