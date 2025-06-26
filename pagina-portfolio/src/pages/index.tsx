import DefaultLayout from '@/layout/DefaultLayout'

export default function Home() {
  return (
    <DefaultLayout>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hola! Mi nombre es Mauro</h1>
      <p className="text-xl text-gray-400 mb-6">Este es mi portafolio personal.</p>
    </DefaultLayout>
  )
}
