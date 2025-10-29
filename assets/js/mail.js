document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulario');
  if (!form) return;

  const API_URL = 'https://mailtest.tesfire.com/api/email';

  // Prefer a page-specific submit button, but fallback gracefully
  const submitBtn = document.getElementById('contact-submit') || document.getElementById('form-submit') || form.querySelector('button[type="submit"],input[type="submit"]');

  const get = (sel) => form.querySelector(sel);
  const first = (selectors) => {
    for (const s of selectors) {
      const el = get(s);
      if (el) return el;
    }
    return null;
  };
  const val = (selectors, fallback = '') => {
    const el = first(selectors);
    const v = el && typeof el.value === 'string' ? el.value.trim() : '';
    return v || fallback;
  };

  // Create a status element on the fly if missing
  let statusEl = document.getElementById('contact-status');
  if (!statusEl) {
    statusEl = document.createElement('div');
    statusEl.id = 'contact-status';
    statusEl.setAttribute('role', 'status');
    statusEl.setAttribute('aria-live', 'polite');
    statusEl.style.marginLeft = '12px';
    statusEl.hidden = true;
    // append next to the submit button if exists, otherwise at the end
    if (submitBtn && submitBtn.parentElement) {
      submitBtn.parentElement.appendChild(statusEl);
    } else {
      form.appendChild(statusEl);
    }
  }

  const setStatus = (msg, ok = true) => {
    if (!statusEl) return;
    statusEl.textContent = msg || '';
    statusEl.hidden = !msg;
    statusEl.className = ok ? 'form-success' : 'field-error';
  };

  const lock = (v) => {
    if (submitBtn) {
      submitBtn.disabled = v;
      try { submitBtn.classList.toggle('is-loading', v); } catch (_) {}
    }
  };

  const onSubmit = async (ev) => {
    try {
      // If another listener already prevented default (e.g., validation), respect it
      if (ev.defaultPrevented) return;
      // We handle submission via fetch
      ev.preventDefault();

      // Collect values (supporting both index.html and contato.html)
      const nome = val(['#nome', '#contato-nome', '[name="nome"]']);
      const empresa = val(['#empresa', '#contato-empresa', '[name="empresa"]']);
      const email = val(['#email', '#contato-email', '[name="email"]']);
      const telefone = val(['#telefone', '#contato-telefone', '[name="telefone"]']);
      const assunto = val(['#assunto', '#contato-assunto', '[name="assunto"]'], 'Contato pelo site');
      const mensagem = val(['#mensagem', '#contato-mensagem', '[name="mensagem"]']);

      // Minimal required checks if page didn't run its own validator
      if (!nome || !email || !mensagem) {
        if (typeof form.reportValidity === 'function') form.reportValidity();
        return;
      }

      const payload = {
        name: nome,
        company: empresa,
        email,
        phone: telefone,
        subject: assunto,
        message: mensagem,
        source: (window.location && window.location.pathname) ? window.location.pathname.split('/').pop() : 'unknown',
        site: (window.location && window.location.hostname) || 'localhost',
        timestamp: new Date().toISOString(),
      };

      lock(true);
      setStatus('Enviando...', true);

      const resp = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!resp.ok) {
        const text = await resp.text().catch(() => '');
        throw new Error(text || `Erro ${resp.status}`);
      }

      // swallow JSON parsing errors
      try { await resp.json(); } catch (_) {}

      setStatus('Mensagem enviada com sucesso. Obrigado!', true);
      form.reset();
      window.setTimeout(() => setStatus('', true), 6000);
    } catch (err) {
      setStatus('Falha ao enviar. Tente novamente em instantes.', false);
    } finally {
      lock(false);
    }
  };

  form.addEventListener('submit', onSubmit);
});
