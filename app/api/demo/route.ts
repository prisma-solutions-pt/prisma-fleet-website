import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  fleet?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim();
  const company = body.company?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim() || null;
  const fleet = body.fleet?.trim() || null;
  const message = body.message?.trim() || null;

  if (!name || !company || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  const { data: lead, error } = await supabase
    .from("leads")
    .insert({ name, company, email, phone, fleet_size: fleet, message })
    .select()
    .single();

  if (error) {
    console.error("Supabase insert failed:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.RESEND_TO;
  if (apiKey && from && to) {
    try {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from,
        to,
        replyTo: email,
        subject: `Novo pedido de demo: ${name} (${company})`,
        html: `
          <h2>Novo pedido de demonstração</h2>
          <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
          <p><strong>Empresa:</strong> ${escapeHtml(company)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Telefone:</strong> ${escapeHtml(phone ?? "-")}</p>
          <p><strong>Tamanho da frota:</strong> ${escapeHtml(fleet ?? "-")}</p>
          <p><strong>Mensagem:</strong><br/>${escapeHtml(message ?? "-").replace(/\n/g, "<br/>")}</p>
          <hr/>
          <p style="color:#64748b;font-size:12px">Lead #${lead.id} guardado em Supabase.</p>
        `,
      });
    } catch (e) {
      console.error("Resend send failed:", e);
    }
  }

  return NextResponse.json({ ok: true, id: lead.id });
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
