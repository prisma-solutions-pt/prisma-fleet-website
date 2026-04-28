import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

export default function Features() {
  const t = useTranslations("Features");

  const cards = [
    { title: t("card1Title"), desc: t("card1Desc"), screenshot: "settlements" },
    { title: t("card2Title"), desc: t("card2Desc"), screenshot: "imports" },
    { title: t("card3Title"), desc: t("card3Desc"), screenshot: "driver-portal" },
    { title: t("card4Title"), desc: t("card4Desc"), screenshot: "analytics" },
  ];

  const extras = [
    {
      icon: <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" /></svg>,
      title: t("extra1Title"),
      desc: t("extra1Desc"),
    },
    {
      icon: <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" /></svg>,
      title: t("extra2Title"),
      desc: t("extra2Desc"),
    },
    {
      icon: <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
      title: t("extra3Title"),
      desc: t("extra3Desc"),
    },
    {
      icon: <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg>,
      title: t("extra4Title"),
      desc: t("extra4Desc"),
    },
    {
      icon: <svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>,
      title: t("extra5Title"),
      desc: t("extra5Desc"),
    },
    {
      icon: <svg viewBox="0 0 24 24"><path d="M18 20V10M12 20V4M6 20v-6" /></svg>,
      title: t("extra6Title"),
      desc: t("extra6Desc"),
    },
  ];

  return (
    <section className="section" id="funcionalidades">
      <div className="wrap">
        <ScrollReveal>
          <div className="section-head">
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2>
              {t("titleA")}
              <br />
              <span className="accent">{t("titleB")}</span>
            </h2>
            <p className="lead-center">{t("lead")}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="features-grid">
            {cards.map((c) => (
              <div key={c.screenshot} className="feature-card">
                <div className="feature-card-visual">
                  {/* Replace with: <Image src={`/screenshots/${c.screenshot}.png`} ... /> */}
                  <div className="placeholder-soon">
                    <div className="placeholder-soon-icon">
                      <svg viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                    <span className="placeholder-soon-label">{t("soon")}</span>
                  </div>
                </div>
                <div className="feature-card-body">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="feature-card-full">
            <div className="screenshot-frame-light" style={{ aspectRatio: '16/7' }}>
              {/* Replace with full-width dashboard screenshot */}
              <div className="placeholder-soon">
                <div className="placeholder-soon-icon">
                  <svg viewBox="0 0 24 24"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <span className="placeholder-soon-label">{t("soon")}</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="feature-list">
            {extras.map((f) => (
              <div key={f.title} className="feature-list-item">
                <div className="feature-list-icon">{f.icon}</div>
                <div className="feature-list-text">
                  <strong>{f.title}</strong>
                  <span>{f.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
