import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "Sistema de Automação de Testes",
    description:
      "Framework completo para automação de testes E2E que integra Selenium WebDriver, relatórios detalhados e execução paralela.",
    image: "/project1.jpg",
    tags: ["C#", "Selenium", "NUnit", "Azure DevOps"],
    githubUrl: "https://github.com",
  },
  {
    title: "Dashboard de Monitoramento",
    description:
      "Aplicação web para monitoramento em tempo real de execuções de testes automatizados com métricas e visualizações.",
    image: "/project2.jpg",
    tags: ["React", "Node.js", "Socket.IO", "Chart.js"],
    liveUrl: "https://dashboard.exemplo.com.br",
    githubUrl: "https://github.com",
  },
  {
    title: "RPA para Processamento de Faturas",
    description:
      "Solução de automação robótica que extrai dados de faturas, processa as informações e as envia para um sistema ERP.",
    image: "/project3.jpg",
    tags: ["Python", "OCR", "RPA", "API REST"],
    githubUrl: "https://github.com",
  },
  {
    title: "API de Integração",
    description:
      "API RESTful para integração entre sistemas legados e novas aplicações, com documentação automática e testes completos.",
    image: "/project4.jpg",
    tags: [".NET Core", "Swagger", "Entity Framework", "SQL Server"],
    liveUrl: "https://api.exemplo.com.br",
    githubUrl: "https://github.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section bg-dark-900">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meus Projetos</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-light-200 text-lg leading-relaxed">
            Conheça alguns dos projetos que desenvolvi utilizando diversas tecnologias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card overflow-hidden card-hover"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-70"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-light-100">{project.title}</h3>
                <p className="text-light-200 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-dark-700 text-light-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary text-sm px-4 py-2"
                    >
                      Ver Demo
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline text-sm px-4 py-2"
                    >
                      Código
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
