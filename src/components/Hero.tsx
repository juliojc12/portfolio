import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-dark-950 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl"></div>
      
      <div className="container py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="inline-block px-3 py-1 text-sm font-medium bg-dark-800 text-light-200 rounded-full mb-6">
              Desenvolvedor Full Stack & Especialista em Automação
            </p>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Olá, eu sou <span className="text-gradient">Julio Cesar</span>
            </h1>
            
            <p className="text-xl text-light-200 mb-10 max-w-lg mx-auto lg:mx-0">
              Transformando ideias em soluções digitais com foco em automação e
              desenvolvimento de software.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="#projects" 
                className="btn btn-primary"
              >
                Ver Projetos
              </Link>
              <Link 
                href="#contact" 
                className="btn btn-outline"
              >
                Entre em Contato
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-md"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-dark-700 shadow-soft">
                <Image
                  src="/profile.png"
                  alt="Julio Barreto"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              
              {/* Elementos flutuantes decorativos */}
              <div className="absolute -top-4 -right-4 bg-dark-800 rounded-lg p-3 shadow-soft">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              
              <div className="absolute bottom-4 -left-6 bg-dark-800 rounded-lg px-3 py-2 shadow-soft">
                <span className="text-light-100 font-medium">5+ anos</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats ou skills destacados */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "50+", label: "Projetos Concluídos" },
            { value: "30+", label: "Automações Implementadas" },
            { value: "95%", label: "Clientes Satisfeitos" },
            { value: "24/7", label: "Suporte Técnico" }
          ].map((stat, index) => (
            <div key={index} className="card p-6 text-center card-hover">
              <p className="text-3xl font-bold text-gradient mb-2">{stat.value}</p>
              <p className="text-light-300">{stat.label}</p>
            </div>
          ))}
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-light-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
