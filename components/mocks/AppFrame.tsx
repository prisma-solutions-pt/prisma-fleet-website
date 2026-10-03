import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { APP_ICONS, type AppIcon } from "./app-icons";

const RAIL: AppIcon[] = [
  "dashboard",
  "drivers",
  "vehicles",
  "cards",
  "checkin",
  "pipeline",
  "insurance",
  "maintenance",
  "crm",
  "reports",
];

export function Icon({ name, className }: { name: AppIcon; className?: string }) {
  return (
    <svg viewBox="0 -960 960 960" className={className} aria-hidden="true">
      <path d={APP_ICONS[name]} />
    </svg>
  );
}

/**
 * Recreation of the Fleet app shell: floating navy rail + white topbar card.
 * Purely presentational; hidden from assistive tech by the caller.
 */
export default function AppFrame({
  active,
  title,
  subtitle,
  children,
  className = "",
}: {
  active: AppIcon;
  title: string;
  subtitle: string;
  children: ReactNode;
  className?: string;
}) {
  const t = useTranslations("Mock");

  return (
    <div className={`app ${className}`}>
      <div className="app-chrome">
        <span />
        <span />
        <span />
        <div className="app-url">app.prismafleet.pt</div>
      </div>
      <div className="app-body">
        <aside className="app-rail">
          <img src="/brand/prisma-mark-white.svg" alt="" className="app-rail-mark" />
          <div className="app-pulse">
            <b>24</b>
            <b>22</b>
            <b className="warn">3</b>
            <i />
            <b className="score">82</b>
          </div>
          {RAIL.map((name) => (
            <span key={name} className={`app-rail-item${name === active ? " active" : ""}`}>
              <Icon name={name} />
            </span>
          ))}
        </aside>
        <div className="app-main">
          <div className="app-topbar">
            <div className="app-title">
              <strong>{title}</strong>
              <span>{subtitle}</span>
            </div>
            <span className="app-fleet-pill">
              <i />
              {t("allFleets")}
            </span>
            <span className="app-avatar">PF</span>
          </div>
          <div className="app-content">{children}</div>
        </div>
      </div>
    </div>
  );
}
