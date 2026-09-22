import { useState, type FormEvent } from "react";
import { WHATSAPP_URL } from "../data/content";

// Troque pela URL real do seu webhook de produção no n8n.
const N8N_WEBHOOK_URL = "https://SEU-N8N.dominio.com.br/webhook/nexio-contato";

type Status = "idle" | "loading" | "success" | "error";

interface FormState {
  nome: string;
  email: string;
  empresa: string;
  mensagem: string;
}

const initialState: FormState = { nome: "", email: "", empresa: "", mensagem: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Falha no envio");
      setStatus("success");
      setForm(initialState);
    } catch (err) {
      console.error("Erro ao enviar briefing para o n8n:", err);
      setStatus("error");
    }
  }

  return (
    <section id="contato" className="border-t border-borderc bg-gradient-to-b from-sectionBg to-purple-light px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <span className="mb-4 block text-xs font-bold uppercase tracking-wide text-purple">
            Pronto para o próximo passo?
          </span>
          <h2 className="mb-4 font-poppins text-4xl font-extrabold leading-tight text-ink">
            Seu próximo site <span className="text-purple">começa com uma boa conversa.</span>
          </h2>
          <p className="mb-5 max-w-md text-body">
            Conte um pouco sobre sua empresa. A gente responde com clareza, sem compromisso e sem linguagem
            complicada.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple"
          >
            💬 Falar com a Nexio Digital pelo WhatsApp
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-[18px] border border-borderc bg-white p-7 shadow-[0_20px_50px_rgba(20,10,40,0.08)]"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="nome" className="mb-1.5 block text-xs font-semibold text-ink">
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                required
                value={form.nome}
                onChange={handleChange}
                placeholder="Como podemos chamar você"
                className="w-full rounded-[10px] border border-borderc bg-[#fbfaff] px-3.5 py-3 text-sm text-ink outline-none transition-colors focus:border-purple"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-ink">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="voce@empresa.com"
                className="w-full rounded-[10px] border border-borderc bg-[#fbfaff] px-3.5 py-3 text-sm text-ink outline-none transition-colors focus:border-purple"
              />
            </div>
          </div>

          <div>
            <label htmlFor="empresa" className="mb-1.5 block text-xs font-semibold text-ink">
              Empresa
            </label>
            <input
              id="empresa"
              name="empresa"
              type="text"
              value={form.empresa}
              onChange={handleChange}
              placeholder="Nome da sua empresa"
              className="w-full rounded-[10px] border border-borderc bg-[#fbfaff] px-3.5 py-3 text-sm text-ink outline-none transition-colors focus:border-purple"
            />
          </div>

          <div>
            <label htmlFor="mensagem" className="mb-1.5 block text-xs font-semibold text-ink">
              Como podemos ajudar?
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              value={form.mensagem}
              onChange={handleChange}
              placeholder="Conte brevemente sobre seu projeto..."
              className="w-full resize-y rounded-[10px] border border-borderc bg-[#fbfaff] px-3.5 py-3 text-sm text-ink outline-none transition-colors focus:border-purple"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="flex items-center justify-center gap-2 rounded-[10px] bg-purple px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-purple-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Enviando..." : "✈️ Enviar briefing"}
          </button>

          {status === "success" && (
            <p className="text-sm text-whats">Briefing enviado! Em breve entraremos em contato pelo WhatsApp.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-500">
              Não foi possível enviar agora. Tente novamente ou fale direto pelo WhatsApp.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
