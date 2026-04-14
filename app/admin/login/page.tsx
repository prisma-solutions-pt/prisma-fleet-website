type SearchParams = Promise<{ err?: string; next?: string }>;

export default async function AdminLoginPage({ searchParams }: { searchParams: SearchParams }) {
  const { err, next } = await searchParams;

  return (
    <div className="admin-login">
      <form method="POST" action="/api/admin/login" className="admin-login-card">
        <div className="admin-login-brand">
          <div className="admin-login-mark" aria-hidden="true">PF</div>
          <div>
            <div className="admin-login-title">Prisma Fleet</div>
            <div className="admin-login-sub">Painel de administração</div>
          </div>
        </div>

        <label htmlFor="password" className="admin-login-label">Palavra-passe</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          className="admin-login-input"
          placeholder="Introduza a palavra-passe"
        />

        <input type="hidden" name="next" value={next || "/admin"} />

        {err === "invalid" && <p className="admin-login-error">Palavra-passe incorreta.</p>}
        {err === "config" && <p className="admin-login-error">ADMIN_PASSWORD não configurada.</p>}

        <button type="submit" className="admin-login-submit">Entrar</button>
      </form>
    </div>
  );
}
