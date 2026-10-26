(function() {
    const headerHTML = `
    <header style="background:#0a1930; border-bottom:1px solid rgba(255,255,255,0.06);">
        <div class="nav-container" style="max-width:1400px; margin:0 auto; padding:10px 20px; display:flex; justify-content:space-between; align-items:center;">
            <a href="index.html" class="logo" style="display:flex; align-items:center; gap:12px; text-decoration:none;">
                <!-- LOGO LIMPIO SIN RECUADRO -->
                <img src="icon/logo_transparent.png" alt="NTX" style="width:100px; height:auto; display:block; filter: drop-shadow(0 0 10px rgba(0,213,255,0.7));">
                <div style="display:flex; flex-direction:column; line-height:1.05;">
                  <div style="font-size:22px; font-weight:800; color:#fff; letter-spacing:-0.5px; line-height:1; white-space:nowrap;"><b style="color:#2ea8ff; font-weight:800; display:inline;">N</b><b style="color:#fff; font-weight:800; display:inline;">T</b><b style="color:#2ea8ff; font-weight:800; display:inline;">X</b></div>
                  <span style="font-size:12.5px; font-weight:500; color:#8ab4d8; letter-spacing:0.3px; margin-top:2px; line-height:1; display:block !important;">Academia Digital</span>
                </div>
            </a>
            <button class="menu-toggle" id="menuToggleBtn"><i class="fa-solid fa-bars"></i></button>
            <ul class="nav-menu" id="navMenu">
                <div class="nav-menu-header">
                    <a href="index.html" class="logo" style="display:flex; align-items:center; gap:10px; text-decoration:none;">
                        <!-- LOGO LIMPIO MOBILE SIN RECUADRO -->
                        <img src="icon/logo_transparent.png" alt="NTX" style="width:36px; height:auto; display:block; filter: drop-shadow(0 0 8px rgba(0,213,255,0.6));">
                        <div style="display:flex; flex-direction:column; line-height:1.05;">
                          <div style="font-size:18px; font-weight:800; color:#fff; line-height:1; white-space:nowrap;"><b style="color:#2ea8ff; display:inline;">N</b><b style="color:#fff; display:inline;">T</b><b style="color:#2ea8ff; display:inline;">X</b></div>
                          <span style="font-size:11px; color:#8ab4d8; margin-top:1px; display:block;">Academia Digital</span>
                        </div>
                    </a>
                    <button class="nav-menu-close" id="menuCloseBtn"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <li><a href="index.html"><i class="fa-solid fa-house"></i> Inicio</a></li>
                <li class="dropdown"><a href="#" class="dropdown-toggle"><i class="fa-solid fa-layer-group"></i> Módulos <i class="fa-solid fa-chevron-down chevron" style="font-size:11px;margin-left:auto;"></i></a>
                    <ul class="dropdown-menu modulos-menu">
                        <li><a href="informatica.html"><span class="mod-num n1">1</span><i class="fa-solid fa-microchip" style="color:#3b82f6;"></i><span class="mod-text">Informática</span></a></li>
                        <li><a href="redes.html"><span class="mod-num n2">2</span><i class="fa-solid fa-network-wired" style="color:#f59e0b;"></i><span class="mod-text">Redes</span></a></li>
                        <li><a href="ofimatica.html"><span class="mod-num n3">3</span><i class="fa-solid fa-database" style="color:#10b981;"></i><span class="mod-text">Ofimática</span></a></li>
                        <li><a href="diseño.html"><span class="mod-num n4">4</span><i class="fa-solid fa-image" style="color:#8b5cf6;"></i><span class="mod-text">Diseño</span></a></li>
                        <li><a href="comunicacion.html"><span class="mod-num n5">5</span><i class="fa-solid fa-comments" style="color:#f97316;"></i><span class="mod-text">Comunicación</span></a></li>
                        <li><a href="multimedia.html"><span class="mod-num n6">6</span><i class="fa-solid fa-video" style="color:#ef4444;"></i><span class="mod-text">Multimedia</span></a></li>
                        <li><a href="seguridad.html"><span class="mod-num n7">7</span><i class="fa-solid fa-shield-halved" style="color:#0284c7;"></i><span class="mod-text">Seguridad</span></a></li>
                    </ul>
                </li>
                <li class="dropdown"><a href="#" class="dropdown-toggle"><i class="fa-solid fa-star"></i> Extras <i class="fa-solid fa-chevron-down chevron" style="font-size:11px;margin-left:auto;"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="nticx.html"><i class="fa-solid fa-microchip" style="color:#06b6d4;"></i> NTICX y Cultura Digital</a></li>
                        <li><a href="ia.html"><i class="fa-solid fa-brain" style="color:#d406b5;"></i> Inteligencia Artificial</a></li>
                        <li><a href="web.html"><i class="fa-solid fa-globe" style="color:#3b82f6;"></i> Desarrollo WEB</a></li>
                        <li><a href="ip.html"><i class="fa-solid fa-network-wired" style="color:#10b981;"></i>Direccionamiento IP</a></li>
                    </ul>
                </li>
                <li class="dropdown"><a href="#" class="dropdown-toggle"><i class="fa-solid fa-gamepad"></i> Simuladores <i class="fa-solid fa-chevron-down chevron" style="font-size:11px;margin-left:auto;"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="simulador-pc.html"><i class="fa-solid fa-computer" style="color:#06b6d4;"></i> Ensamblar PC</a></li>
                        <li><a href="simulador-red.html"><i class="fa-solid fa-network-wired" style="color:#8b5cf6;"></i>Conectar Redes</a></li>
                        <li><a href="simulador-web.html"><i class="fa-solid fa-laptop-code" style="color:#ec4899;"></i> Desarollador Web</a></li>
                        <li><a href="simulador-dispositivos.html"><i class="fa-solid fa-keyboard" style="color:#f59e0b;"></i> Dispositivos E/S/M</a></li>
                        
                    </ul>
                </li>
                
                <li><a href="#" id="openEvaluacionModalBtn"><i class="fa-solid fa-pen-to-square"></i> Evaluación</a></li>
                <li><a href="contacto.html"><i class="fa-solid fa-headset"></i> Contacto</a></li>
                <li><a href="#" id="openLedgerModalBtn"><i class="fa-solid fa-book"></i> Ledger</a></li>
                <li><a href="#" id="openModalBtn" class="btn-apoyar-nav"><i class="fa-solid fa-heart"></i>Apoyanos</a></li>
            </ul>
        </div>
    </header>
    <div class="nav-overlay" id="navOverlay"></div>`;

    function inject() {
        let ph = document.getElementById('header-placeholder');
        if (!ph) { ph = document.createElement('div'); ph.id = 'header-placeholder'; document.body.insertBefore(ph, document.body.firstChild); }
        ph.innerHTML = headerHTML;
        init();
    }
    function init() {
        const openBtn = document.getElementById('menuToggleBtn');
        const closeBtn = document.getElementById('menuCloseBtn');
        const menu = document.getElementById('navMenu');
        const overlay = document.getElementById('navOverlay');
        if (!openBtn || !menu) return;
        const openMenu = () => { menu.classList.add('active'); overlay.classList.add('active'); document.body.style.overflow='hidden'; };
        const closeMenu = () => { menu.classList.remove('active'); overlay.classList.remove('active'); document.body.style.overflow=''; };
        openBtn.addEventListener('click', (e)=>{ e.stopPropagation(); menu.classList.contains('active')?closeMenu():openMenu(); });
        if(closeBtn) closeBtn.addEventListener('click', closeMenu);
        overlay.addEventListener('click', closeMenu);
        document.querySelectorAll('.dropdown-toggle').forEach(toggle=>{
            toggle.addEventListener('click', (e)=>{
                e.preventDefault(); e.stopPropagation();
                const dropdown = toggle.closest('.dropdown');
                const isActive = dropdown.classList.contains('active');
                document.querySelectorAll('.dropdown').forEach(d=>{ if(d !== dropdown) d.classList.remove('active'); });
                if(isActive) dropdown.classList.remove('active'); else dropdown.classList.add('active');
            });
        });
        document.addEventListener('click', (e)=>{
            if(!e.target.closest('.dropdown') && !e.target.closest('#openModalBtn') && !e.target.closest('#openLedgerModalBtn') && !e.target.closest('#openEvaluacionModalBtn')){
                document.querySelectorAll('.dropdown').forEach(d=> d.classList.remove('active'));
            }
        });
        document.addEventListener('click', (e)=>{
            const btn = e.target.closest('#openModalBtn');
            if(btn){ e.preventDefault(); e.stopPropagation(); const m=document.getElementById('supportModal'); if(m){ if(window.innerWidth<=900){ closeMenu(); setTimeout(()=>{ m.style.display='flex'; },250);} else m.style.display='flex'; } }
        });
        document.addEventListener('click', (e)=>{
            const btn = e.target.closest('#openLedgerModalBtn');
            if(btn){ e.preventDefault(); e.stopPropagation(); const m=document.getElementById('ledgerModal'); if(m){ if(window.innerWidth<=900){ closeMenu(); setTimeout(()=>{ m.style.display='flex'; },250);} else m.style.display='flex'; } }
        });
        document.addEventListener('click', (e)=>{
            const btn = e.target.closest('#openEvaluacionModalBtn');
            if(btn){ e.preventDefault(); e.stopPropagation(); const m=document.getElementById('evaluacionModal'); if(m){ if(window.innerWidth<=900){ closeMenu(); setTimeout(()=>{ m.style.display='flex'; },250);} else m.style.display='flex'; } }
        });
        ['supportModal','ledgerModal','evaluacionModal'].forEach(id=>{
            const modal=document.getElementById(id);
            if(modal){
                const closeBtnMap={'supportModal':'closeModalBtn','ledgerModal':'closeLedgerModalBtn','evaluacionModal':'closeEvaluacionModalBtn'};
                const cBtn=document.getElementById(closeBtnMap[id]);
                if(cBtn) cBtn.addEventListener('click', ()=> modal.style.display='none');
                modal.addEventListener('click', (e)=>{ if(e.target===modal) modal.style.display='none'; });
            }
        });
        document.addEventListener('keydown', e=>{ if(e.key==='Escape'){ closeMenu(); ['supportModal','ledgerModal','evaluacionModal'].forEach(id=>{ const m=document.getElementById(id); if(m) m.style.display='none'; }); } });
        window.addEventListener('resize', ()=>{ if(window.innerWidth>900) closeMenu(); });
        const cur = location.pathname.split('/').pop()||'index.html';
        document.querySelectorAll('.nav-menu a').forEach(a=>{ if(a.getAttribute('href')===cur) a.classList.add('active'); if(cur==='contacto.html' && a.getAttribute('href')==='contacto.html') a.classList.add('active'); });
    }
    if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', inject); else inject();
})();