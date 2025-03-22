export default function About() {
  return (
    <section id="about" className="section bg-gray-deep py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mim</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-gray-light text-lg leading-relaxed">
            Conheça um pouco mais sobre minha jornada como desenvolvedor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-darker rounded-xl p-8 shadow-lg bg-[#1e1e2a] hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-white">Quem Sou</h3>
            <p className="text-gray-light mb-4">
              Sou um desenvolvedor de automação com mais de 5 anos de experiência em criar 
              soluções que aumentam a eficiência e a produtividade. Minha paixão está 
              em resolver problemas complexos usando tecnologia.
            </p>
            <p className="text-gray-light mb-4">
              Minha experiência abrange desenvolvimento de ferramentas de automação web com Selenium,
              automação de processos com Python e C#, e criação de interfaces para facilitar o uso
              de soluções automatizadas.
            </p>
            <p className="text-gray-light">
              Estou sempre aprendendo novas tecnologias e buscando maneiras de aprimorar minhas habilidades
              para entregar soluções cada vez mais eficientes e eficazes.
            </p>
          </div>

          <div className="bg-gray-darker rounded-xl p-8 shadow-lg bg-[#1e1e2a] hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-white">Experiência</h3>
            <div className="space-y-6">
              <div className="bg-gray-darker rounded-lg p-6 shadow-lg border border-gray-dark">
                <h4 className="text-xl font-semibold mb-2 text-white">Desenvolvedor Sênior de Automação</h4>
                <p className="text-gray-light mb-3">Empresa ABC Tecnologia | 2021 - Atual</p>
                <ul className="list-disc list-inside text-gray-light space-y-2">
                  <li>Desenvolvi soluções de automação que reduziram o tempo de testes em 70%</li>
                  <li>Liderei equipe de automação com 4 desenvolvedores</li>
                  <li>Implementei frameworks de automação usando Selenium e C#</li>
                </ul>
              </div>

              <div className="bg-gray-darker rounded-lg p-6 shadow-lg border border-gray-dark">
                <h4 className="text-xl font-semibold mb-2 text-white">Desenvolvedor de Software</h4>
                <p className="text-gray-light mb-3">XYZ Inovações | 2018 - 2021</p>
                <ul className="list-disc list-inside text-gray-light space-y-2">
                  <li>Criei ferramentas de automação para processos internos</li>
                  <li>Desenvolvi APIs para integração entre sistemas</li>
                  <li>Implementei testes automatizados para aplicações web</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
