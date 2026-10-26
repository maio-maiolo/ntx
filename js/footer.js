(function(){
  const footerHTML = `
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-grid">
        <!-- Marca -->
        <div class="footer-brand">
          <a href="index.html" class="brand-link">
            <img src="icon/favicon-512.png" alt="NTICx">
            <div>
              <div class="brand-name"><b>N</b>T<b>X</b></div>
              <span class="brand-sub">Academia Digital</span>
            </div>
          </a>
          <p class="footer-desc" lang="es">¡Lo aprendes en la escuela... lo repasas acá! Tu apoyo online después de clases - Plataforma de formación en Informática. 9 programas, simuladores interactivos y evaluación integradora. Gratis, sin publicidad y hecho en Argentina.</p>
          <div class="footer-social">
            <a href="https://github.com/" target="_blank" title="GitHub"><i class="fa-brands fa-github"></i></a>
            <a href="contacto.html" title="Contacto"><i class="fa-solid fa-envelope"></i></a>
            <a href="#" id="footerSupportBtn" title="Apoyanos"><i class="fa-solid fa-heart" style="color:#ef4444;"></i></a>
          </div>
        </div>

        <!-- Programas -->
        <div class="footer-col">
          <h4>Programas</h4>
          <ul class="footer-links">
            <li><a href="informatica.html"><i class="fa-solid fa-microchip"></i> Informática</a></li>
            <li><a href="redes.html"><i class="fa-solid fa-network-wired"></i> Redes</a></li>
            <li><a href="ofimatica.html"><i class="fa-solid fa-database"></i> Ofimática</a></li>
            <li><a href="diseño.html"><i class="fa-solid fa-image"></i> Diseño</a></li>
            <li><a href="colaborativo.html"><i class="fa-solid fa-comments"></i> Colaborativo</a></li>
            <li><a href="multimedia.html"><i class="fa-solid fa-video"></i> Multimedia</a></li>
            <li><a href="seguridad.html"><i class="fa-solid fa-shield-halved"></i> Seguridad</a></li>
            <li><a href="nticx.html"><i class="fa-solid fa-graduation-cap"></i> NTICx</a></li>
            <li><a href="ia.html"><i class="fa-solid fa-brain"></i> IA</a></li>
          </ul>
        </div>

        <!-- Simuladores + Recursos -->
        <div class="footer-col">
          <h4>Simuladores</h4>
          <ul class="footer-links">
            <li><a href="simulador-pc.html"><i class="fa-solid fa-computer"></i> Ensamblar PC</a></li>
            <li><a href="simulador-red.html"><i class="fa-solid fa-network-wired"></i> Conectar Redes</a></li>
            <li><a href="simulador-dispositivos.html"><i class="fa-solid fa-keyboard"></i> Dispositivos E/S</a></li>
          </ul>
          <h4 style="margin-top:24px;">Recursos</h4>
          <ul class="footer-links">
            <li><a href="#" id="footerEvalBtn"><i class="fa-solid fa-pen-to-square"></i> Evaluación</a></li>
            <li><a href="examen.html"><i class="fa-solid fa-list-check"></i> Examen Integrador</a></li>
            <li><a href="#" id="footerLedgerBtn"><i class="fa-solid fa-book"></i> Ledger</a></li>
          </ul>
        </div>

        <!-- Ayuda -->
        <div class="footer-col">
          <h4>Ayuda & Contacto</h4>
          <ul class="footer-links">
            <li><a href="contacto.html"><i class="fa-solid fa-headset"></i> Centro de Ayuda</a></li>
            <li><a href="contacto.html"><i class="fa-solid fa-paper-plane"></i> Contactar</a></li>
            <li><a href="#" id="footerApoyarBtn"><i class="fa-solid fa-heart" style="color:#ef4444;"></i> Apoyanos</a></li>
          </ul>
          <div style="margin-top:22px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:14px;">
            <div style="font-size:12px; font-weight:700; color:#e2e8f0; margin-bottom:6px; letter-spacing:0.3px;">¿Te sirvió la plataforma?</div>
            <div style="font-size:12.5px; color:#7a9cc0; line-height:1.5; margin-bottom:10px;">Es gratis y sin publicidad.</div>
            <a href="#" id="footerCafecitoBtn" style="display:inline-flex; align-items:center; gap:6px; background:#fff; color:#0a1930; padding:7px 14px; border-radius:50px; font-size:12px; font-weight:700; text-decoration:none;"> <i class="fa-solid fa-mug-hot"></i>Apoyar</a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-copy">
        <span class="footer-badge"><span class="dot"></span> Online</span>
        </div>
        <span style="margin-left:12px;">© <span id="footerYear"></span> <strong>NTX-Academia Digital</strong> • By Mario Maiolo • Hecho con <i class="fa-solid fa-heart" style="color:#ef4444; font-size:10px;"></i> en Argentina</span>
      <div class="footer-legal">    
      </div>
    </div>
  </footer>`;

  function injectFooter(){
    let ph = document.getElementById('footer-placeholder');
    if(!ph){
      ph = document.createElement('div');
      ph.id = 'footer-placeholder';
      document.body.appendChild(ph);
    }
    ph.innerHTML = footerHTML;
    // Año dinámico
    const y = document.getElementById('footerYear');
    if(y) y.textContent = new Date().getFullYear() + 1; // 2027 como tenías

    // Conectar botones a tus modales existentes
    const map = [
      ['footerSupportBtn','supportModal'],
      ['footerApoyarBtn','supportModal'],
      ['footerCafecitoBtn','supportModal'],
      ['footerLedgerBtn','ledgerModal'],
      ['footerEvalBtn','evaluacionModal']
    ];
    map.forEach(([btnId, modalId])=>{
      const btn = document.getElementById(btnId);
      if(btn){
        btn.addEventListener('click', (e)=>{
          e.preventDefault();
          const m = document.getElementById(modalId);
          if(m) m.style.display='flex';
        });
      }
    });
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', injectFooter);
  else injectFooter();
})();
