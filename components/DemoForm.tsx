"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

export default function DemoForm() {
  const t = useTranslations("DemoForm");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
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
        <label htmlFor="name" className="form-label">{t("name")}</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="form-input"
          placeholder={t("namePlaceholder")}
        />
      </div>

      <div className="form-group">
        <label htmlFor="company" className="form-label">{t("company")}</label>
        <input
          id="company"
          name="company"
          type="text"
          required
          className="form-input"
          placeholder={t("companyPlaceholder")}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">{t("email")}</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="form-input"
          placeholder={t("emailPlaceholder")}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone" className="form-label">{t("phone")}</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="form-input"
          placeholder={t("phonePlaceholder")}
        />
      </div>

      <div className="form-group">
        <label htmlFor="fleet" className="form-label">{t("fleet")}</label>
        <select id="fleet" name="fleet" required className="form-select">
          <option value="">{t("fleetSelect")}</option>
          <option value="1-20">{t("fleet1")}</option>
          <option value="20-50">{t("fleet2")}</option>
          <option value="50-100">{t("fleet3")}</option>
          <option value="100+">{t("fleet4")}</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">{t("message")}</label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          placeholder={t("messagePlaceholder")}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-arrow"
        disabled={status === "sending"}
        style={{ width: "100%", justifyContent: "center" }}
      >
        {status === "sending" ? t("sending") : t("submit")}
      </button>

      {status === "sent" && (
        <p className="form-status success">
          {t("sent")}
        </p>
      )}
      {status === "error" && (
        <p className="form-status error">
          {t("error")}
        </p>
      )}
    </form>
  );
}
