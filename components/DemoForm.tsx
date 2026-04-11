"use client";

import { useState, type FormEvent } from "react";

export default function DemoForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      fleet: (form.elements.namedItem("fleet") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="demo-form-wrap">
      <div className="form-group">
        <label htmlFor="name" className="form-label">Nome</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="form-input"
          placeholder="O teu nome"
        />
      </div>

      <div className="form-group">
        <label htmlFor="company" className="form-label">Empresa</label>
        <input
          id="company"
          name="company"
          type="text"
          required
          className="form-input"
          placeholder="Nome da empresa"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone" className="form-label">Telefone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="form-input"
          placeholder="+351 ..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="fleet" className="form-label">Tamanho da frota</label>
        <select id="fleet" name="fleet" required className="form-select">
          <option value="">Seleciona...</option>
          <option value="1-20">1 a 20 veículos</option>
          <option value="20-50">20 a 50 veículos</option>
          <option value="50-100">50 a 100 veículos</option>
          <option value="100+">Mais de 100 veículos</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">Mensagem (opcional)</label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          placeholder="Conta-nos sobre a tua operação..."
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-arrow"
        disabled={status === "sending"}
        style={{ width: "100%", justifyContent: "center" }}
      >
        {status === "sending" ? "A enviar..." : "Pedir Demo"}
      </button>

      {status === "sent" && (
        <p className="form-status success">
          Pedido enviado. Entramos em contacto em breve.
        </p>
      )}
      {status === "error" && (
        <p className="form-status error">
          Erro ao enviar. Tenta novamente ou contacta-nos diretamente.
        </p>
      )}
    </form>
  );
}
