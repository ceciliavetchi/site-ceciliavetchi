import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const busy = useRef(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const body = new URLSearchParams();
    fields.forEach((value, name) => { if (typeof value === 'string') body.append(name, value); });
    busy.current = true;
    setStatus('sending');
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!response.ok) throw new Error('Form submission failed');
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    } finally {
      busy.current = false;
    }
  }

  return <form name="contato" method="POST" onSubmit={submit} aria-busy={status === 'sending'}>
    <input type="hidden" name="form-name" value="contato" />
    <div hidden><label>Não preencha este campo<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></div>
    <label>Nome<input name="name" placeholder="Seu nome" autoComplete="name" required maxLength={120} /></label>
    <label>E-mail<input name="email" type="email" placeholder="seuemail@exemplo.com" autoComplete="email" required maxLength={254} /></label>
    <label>WhatsApp<input name="whatsapp" type="tel" placeholder="(DDD) número" autoComplete="tel" maxLength={40} /></label>
    <label>Mensagem<textarea name="message" placeholder="O que você tem em mente?" rows={5} required maxLength={8000} /></label>
    <button className="button button-dark" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Enviando…' : 'Enviar mensagem'} <ArrowUpRight size={18} aria-hidden="true" /></button>
    <div className="contact-status" role="status" aria-live="polite">
      {status === 'sent' && <p>Mensagem enviada. Obrigada pelo contato!</p>}
      {status === 'error' && <p>Não foi possível enviar. Tente novamente ou escreva para <a href="mailto:cecilia.vetchi@gmail.com">cecilia.vetchi@gmail.com</a>.</p>}
    </div>
  </form>;
}
