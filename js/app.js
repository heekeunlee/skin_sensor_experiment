// ── Navigation ──────────────────────────────────────────────────
function showTab(id) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelector(`[data-tab="${id}"]`).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Save current tab
  localStorage.setItem('skinsense_tab', id);
}

// ── Checklist (with persistence) ────────────────────────────────
function initChecklists() {
  const items = document.querySelectorAll('.checklist li');
  items.forEach((item, i) => {
    const key = `check_${i}`;
    if (localStorage.getItem(key) === '1') item.classList.add('done');
    item.addEventListener('click', () => {
      item.classList.toggle('done');
      localStorage.setItem(key, item.classList.contains('done') ? '1' : '0');
      updateProgress();
    });
  });
  updateProgress();
}

function updateProgress() {
  const all = document.querySelectorAll('.checklist li').length;
  const done = document.querySelectorAll('.checklist li.done').length;
  const pct = all > 0 ? Math.round((done / all) * 100) : 0;
  const fill = document.getElementById('overall-progress');
  const label = document.getElementById('progress-label');
  if (fill) fill.style.width = pct + '%';
  if (label) label.textContent = `전체 진도: ${done}/${all} 완료 (${pct}%)`;
}

// ── Accordion ────────────────────────────────────────────────────
function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ── Glossary search ──────────────────────────────────────────────
function initGlossary() {
  const input = document.getElementById('glossary-search');
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    document.querySelectorAll('.glossary-item').forEach(item => {
      const text = item.textContent.toLowerCase();
      item.classList.toggle('hidden', q && !text.includes(q));
    });
  });
}

// ── Quiz ─────────────────────────────────────────────────────────
function answerQuiz(el, isCorrect, explanation) {
  const card = el.closest('.quiz-card');
  const opts = card.querySelectorAll('.quiz-option');
  opts.forEach(o => o.style.pointerEvents = 'none');
  el.classList.add(isCorrect ? 'correct' : 'wrong');

  if (!isCorrect) {
    // highlight correct
    opts.forEach(o => {
      if (o.getAttribute('data-correct') === 'true') o.classList.add('correct');
    });
  }
  const fb = card.querySelector('.quiz-feedback');
  fb.classList.add('show', isCorrect ? 'correct-fb' : 'wrong-fb');
  fb.textContent = (isCorrect ? '✅ 정답! ' : '❌ 오답. ') + explanation;
}

// ── Skin layer tooltips ──────────────────────────────────────────
function initSkinLayers() {
  document.querySelectorAll('.skin-layer').forEach(layer => {
    layer.addEventListener('mouseenter', () => { layer.style.filter = 'brightness(1.2)'; });
    layer.addEventListener('mouseleave', () => { layer.style.filter = ''; });
  });
}

// ── Timeline week highlighter ─────────────────────────────────────
function initTimeline() {
  const items = document.querySelectorAll('.timeline-item');
  items.forEach((item, i) => {
    const key = `week_done_${i}`;
    if (localStorage.getItem(key) === '1') {
      item.style.borderColor = 'rgba(0,212,170,0.35)';
      item.querySelector('.week-check')?.classList.add('done');
    }
    const btn = item.querySelector('.week-check-btn');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const done = localStorage.getItem(key) === '1';
        localStorage.setItem(key, done ? '0' : '1');
        item.style.borderColor = done ? '' : 'rgba(0,212,170,0.35)';
      });
    }
  });
}

// ── Eddy current animation ────────────────────────────────────────
function drawEddyCanvas() {
  const canvas = document.getElementById('eddy-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let t = 0;

  function frame() {
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    // Skin layers
    ctx.fillStyle = 'rgba(255,190,120,0.25)';
    ctx.fillRect(0, H*0.52, W, H*0.18);
    ctx.fillStyle = 'rgba(255,160,80,0.2)';
    ctx.fillRect(0, H*0.70, W, H*0.16);
    ctx.fillStyle = 'rgba(200,100,60,0.15)';
    ctx.fillRect(0, H*0.86, W, H*0.14);

    // Labels
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.font = '11px Noto Sans KR';
    ctx.fillText('각질층', 8, H*0.63);
    ctx.fillText('표피층', 8, H*0.80);
    ctx.fillText('진피층', 8, H*0.95);

    // Coil
    const cx = W / 2;
    const coilY = H * 0.28;
    ctx.strokeStyle = '#00d4aa';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(cx, coilY, 60, 10, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Magnetic field lines (animated)
    for (let i = -3; i <= 3; i++) {
      const x = cx + i * 20;
      const phase = t * 0.04 + i * 0.3;
      const alpha = 0.3 + 0.2 * Math.sin(phase);
      ctx.strokeStyle = `rgba(0,212,170,${alpha})`;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.lineDashOffset = -t * 0.5;
      ctx.beginPath();
      ctx.moveTo(x, coilY);
      ctx.lineTo(x, H * 0.52);
      ctx.stroke();
    }
    ctx.setLineDash([]);

    // Eddy current circles in stratum corneum
    const scY = H * 0.61;
    const eddyAlpha = 0.4 + 0.3 * Math.sin(t * 0.07);
    ctx.strokeStyle = `rgba(245,158,11,${eddyAlpha})`;
    ctx.lineWidth = 2;
    for (let r = 10; r <= 40; r += 12) {
      ctx.beginPath();
      ctx.arc(cx, scY, r, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Arrow indicating frequency change
    ctx.fillStyle = `rgba(167,139,250,${0.6 + 0.3*Math.sin(t*0.05)})`;
    ctx.font = 'bold 12px Inter';
    ctx.fillText('Δf →', W - 70, H * 0.35);
    ctx.fillText('수분%', W - 70, H * 0.47);

    t++;
    requestAnimationFrame(frame);
  }
  frame();
}

// ── Init ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Restore last tab
  const lastTab = localStorage.getItem('skinsense_tab') || 'tab-home';
  showTab(lastTab);

  initChecklists();
  initAccordions();
  initGlossary();
  initSkinLayers();
  initTimeline();
  drawEddyCanvas();

  // Animate progress bars on load
  setTimeout(() => {
    document.querySelectorAll('.progress-fill[data-width]').forEach(el => {
      el.style.width = el.getAttribute('data-width') + '%';
    });
  }, 300);
});

// Print record sheet
function printSheet(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const w = window.open('', '_blank');
  w.document.write(`<html><head><title>기록지</title>
    <style>body{font-family:'Noto Sans KR',sans-serif;padding:20px;color:#000}
    h2{margin-bottom:16px}table{width:100%;border-collapse:collapse;font-size:13px}
    td,th{border:1px solid #ccc;padding:8px;text-align:center}
    .line{border-bottom:1px solid #ccc;margin:8px 0;width:100%}
    </style></head><body>${el.innerHTML}</body></html>`);
  w.document.close();
  w.print();
}
