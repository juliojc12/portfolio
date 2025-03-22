"use client";

import { useState } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="section bg-gray-deep py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-gray-light text-lg leading-relaxed">
            Tem alguma pergunta ou quer discutir um projeto? Estou disponível para ajudar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-darker rounded-xl p-8 shadow-lg bg-[#1e1e2a] hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-white">Envie uma Mensagem</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-light mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome"
                      className="w-full px-3 py-2 bg-gray-dark text-gray-light placeholder-gray-medium border border-gray-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-light mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seuemail@exemplo.com"
                      className="w-full px-3 py-2 bg-gray-dark text-gray-light placeholder-gray-medium border border-gray-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-light mb-1">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Assunto da sua mensagem"
                    className="w-full px-3 py-2 bg-gray-dark text-gray-light placeholder-gray-medium border border-gray-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-light mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Como posso ajudar?"
                    className="w-full px-3 py-2 bg-gray-dark text-gray-light placeholder-gray-medium border border-gray-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="btn btn-primary w-full md:w-auto"
                  >
                    {formStatus === "submitting"
                      ? "Enviando..."
                      : formStatus === "success"
                      ? "Mensagem Enviada!"
                      : "Enviar Mensagem"}
                  </button>
                  {formStatus === "success" && (
                    <p className="mt-4 text-green-400">
                      Sua mensagem foi enviada com sucesso! Entrarei em contato em breve.
                    </p>
                  )}
                  {formStatus === "error" && (
                    <p className="mt-4 text-red-400">
                      Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-gray-darker rounded-xl p-8 shadow-lg bg-[#1e1e2a] hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-white">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 bg-gray-dark p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-light"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-light mb-1">Email</h4>
                    <p className="text-gray-medium">seu.email@exemplo.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 bg-gray-dark p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-light"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-light mb-1">Telefone</h4>
                    <p className="text-gray-medium">(21) 9 9999-9999</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 bg-gray-dark p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-light"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-light mb-1">Localização</h4>
                    <p className="text-gray-medium">Rio de Janeiro, RJ - Brasil</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-semibold text-gray-light mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com/in/juliojc12" className="bg-gray-dark p-3 rounded-lg hover:bg-gray-medium transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-light"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-dark p-3 rounded-lg hover:bg-gray-medium transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-light"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
