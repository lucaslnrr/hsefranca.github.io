document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulario');
  if (!form) return;

  const API_URL = 'https://mailtest.tesfire.com/api/email';
  const submitBtn = document.getElementById('contact-submit');

  const get = (sel) => form.querySelector(sel);
  const byId = (id) => document.getElementById(id);

  // Create a status element on the fly if missing
  let statusEl = byId('contact-status');
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
      submitBtn.classList.toggle('is-loading', v);
    }
  };

  form.addEventListener('submit', async (ev) => {
    try {
      // Let native HTML validation run; if invalid, the submit event won't fire
      ev.preventDefault();

      // Collect values (IDs as defined in contato.html)
      const nome = get('#contato-nome')?.value?.trim() || '';
      const empresa = get('#contato-empresa')?.value?.trim() || '';
      const email = get('#contato-email')?.value?.trim() || '';
      const telefone = get('#contato-telefone')?.value?.trim() || '';
      const assunto = get('#contato-assunto')?.value?.trim() || 'Contato pelo site';
      const mensagem = get('#contato-mensagem')?.value?.trim() || '';

      if (!nome || !email || !mensagem) {
        // if some required field is missing due to browser not blocking (edge cases)
        if (typeof form.reportValidity === 'function') form.reportValidity();
        return;
      }

      const payload = {
        name: nome,
        company: empresa,
        email: email,
        phone: telefone,
        subject: assunto,
        message: mensagem,
        source: 'contato.html',
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

      // Try to parse JSON response, but don't fail if it's not JSON
      let data = null;
      try { data = await resp.json(); } catch (_) {}

      setStatus('Mensagem enviada com sucesso. Obrigado!', true);
      form.reset();

      // hide success after a while
      window.setTimeout(() => setStatus('', true), 6000);
    } catch (err) {
      setStatus('Falha ao enviar. Tente novamente em instantes.', false);
    } finally {
      lock(false);
    }
  });
});
