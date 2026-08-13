export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-700">
            SolidWorks Academy DZ
          </h1>
          <nav className="space-x-4 text-sm">
            <a href="#" className="text-gray-600 hover:text-blue-600">Cours</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Tarifs</a>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Connexion
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Apprenez SolidWorks<br />
          <span className="text-blue-600">comme un pro</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Plateforme de formation en ligne destinée aux étudiants et jeunes ingénieurs algériens.
          Cours vidéo + exercices pratiques.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Commencer maintenant
          </a>
          <a
            href="#"
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
          >
            Voir les cours
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-12">Pourquoi nous choisir ?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎥</div>
              <h4 className="font-semibold mb-2">Vidéos de qualité</h4>
              <p className="text-gray-600 text-sm">Cours enregistrés clairement, étape par étape.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📝</div>
              <h4 className="font-semibold mb-2">Exercices pratiques</h4>
              <p className="text-gray-600 text-sm">Travaillez sur de vrais projets SolidWorks.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🇩🇿</div>
              <h4 className="font-semibold mb-2">Pour les Algériens</h4>
              <p className="text-gray-600 text-sm">Adapté aux étudiants et jeunes ingénieurs en Algérie.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}