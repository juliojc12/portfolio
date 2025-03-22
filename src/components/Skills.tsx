const skills = [
  {
    category: "Linguagens de Programação",
    items: [
      { name: "C#", proficiency: 90 },
      { name: "Python", proficiency: 85 },
      { name: "JavaScript", proficiency: 75 },
      { name: "TypeScript", proficiency: 70 },
    ],
  },
  {
    category: "Automação",
    items: [
      { name: "Selenium WebDriver", proficiency: 95 },
      { name: "Playwright", proficiency: 80 },
      { name: "Excel Automation", proficiency: 90 },
      { name: "UI.Vision RPA", proficiency: 75 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: ".NET Core", proficiency: 85 },
      { name: "ASP.NET", proficiency: 80 },
      { name: "Entity Framework", proficiency: 75 },
      { name: "RabbitMQ", proficiency: 70 },
    ],
  },
  {
    category: "Banco de Dados",
    items: [
      { name: "SQL Server", proficiency: 85 },
      { name: "MySQL", proficiency: 80 },
      { name: "MongoDB", proficiency: 65 },
      { name: "Redis", proficiency: 60 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section bg-gradient-dark">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Minhas Habilidades</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-light-200 text-lg leading-relaxed">
            Tecnologias e ferramentas que domino para desenvolver soluções de automação eficientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="card p-8 card-hover">
              <h3 className="text-xl font-bold mb-6 text-gradient">{skillGroup.category}</h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-light-100">{skill.name}</span>
                      <span className="text-light-300">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-primary to-secondary h-2.5"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
