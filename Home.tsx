import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Actualidades
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Mantente informado sobre nuestras últimas adiciones de equipos y recursos educativos.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* News Cards */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <img
                  className="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800"
                  alt="New Microscopes"
                />
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">Equipos</h3>
                  <p className="mt-2 text-sm text-gray-500">
                  Equipos historicos en el Laboratorio del SeMenor.
                  </p>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <img
                  className="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800"
                  alt="Virtual Lab"
                />
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">Laboratorios virtuales</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Guías para los laboratorios virtuales
                  </p>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <img
                  className="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800"
                  alt="Science Fair"
                />
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">Fería de las ciencias 2025</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Conoce el calendario y requisitos para la fería de las ciencias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}