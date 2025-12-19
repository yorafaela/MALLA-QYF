
/* =================================================
   MALLA QYF – SCRIPT FINAL DEFINITIVO
   ================================================= */

/* ---------- DATOS ---------- */

const ramos = [
  { id: "QFAR111", nombre: "Química General I", creditos: 4, semestre: 1, req: [] },
  { id: "QFAR112", nombre: "Matemáticas", creditos: 8, semestre: 1, req: [] },
  { id: "QFAR113", nombre: "Biología Celular", creditos: 6, semestre: 1, req: [] },
  { id: "QFAR114", nombre: "Introducción al Laboratorio", creditos: 3, semestre: 1, req: [] },
  { id: "QFAR115", nombre: "Introducción a la Química y Farmacia", creditos: 6, semestre: 1, req: [] },
  { id: "QFAR116", nombre: "Anatomía", creditos: 3, semestre: 1, req: [] },
  { id: "TNL", nombre: "TNL", creditos: 2, semestre: 1, req: [] },

  { id: "QFAR121", nombre: "Química General II", creditos: 8, semestre: 2, req: ["QFAR111","QFAR114"] },
  { id: "QFAR122", nombre: "Cálculo", creditos: 4, semestre: 2, req: ["QFAR112"] },
  { id: "QFAR123", nombre: "Fisiología I", creditos: 6, semestre: 2, req: ["QFAR113","QFAR116"] },
  { id: "QFAR124", nombre: "Química Orgánica I", creditos: 6, semestre: 2, req: ["QFAR111","QFAR114"] },
  { id: "QFAR125", nombre: "Introducción a la Estadística", creditos: 2, semestre: 2, req: ["QFAR112"] },
  { id: "TNI", nombre: "TNI", creditos: 2, semestre: 2, req: [] },

  { id: "QFAR211", nombre: "Química Orgánica II", creditos: 6, semestre: 3, req: ["QFAR121","QFAR124"] },
  { id: "QFAR212", nombre: "Química Analítica", creditos: 8, semestre: 3, req: ["QFAR121","QFAR122"] },
  { id: "QFAR213", nombre: "Fisiología II", creditos: 4, semestre: 3, req: ["QFAR123"] },
  { id: "QFAR214", nombre: "Administración de Organizaciones", creditos: 5, semestre: 3, req: ["QFAR112","TNL"] },
  { id: "QFAR215", nombre: "Bioquímica", creditos: 6, semestre: 3, req: ["QFAR113","QFAR124"] },
  { id: "QFAR216", nombre: "Ética", creditos: 2, semestre: 3, req: ["TNL"], reqCreditos: 59 },

  { id: "QFAR221", nombre: "Botánica", creditos: 6, semestre: 4, req: ["QFAR113","QFAR124"] },
  { id: "QFAR222", nombre: "Análisis Instrumental", creditos: 8, semestre: 4, req: ["QFAR212"] },
  { id: "QFAR223", nombre: "Fisiopatología", creditos: 4, semestre: 4, req: ["QFAR213"] },
  { id: "QFAR224", nombre: "Fisicoquímica", creditos: 6, semestre: 4, req: ["QFAR121","QFAR122"] },
  { id: "QFAR225", nombre: "Administración de RRHH", creditos: 3, semestre: 4, req: ["QFAR214","QFAR216"] },
  { id: "QFAR226", nombre: "Introducción a la Química Farmacéutica", creditos: 2, semestre: 4, req: ["QFAR211"] },

  { id: "QFAR311", nombre: "Farmacognosia", creditos: 6, semestre: 5, req: ["QFAR211","QFAR221"] },
  { id: "QFAR312", nombre: "Biología Molecular", creditos: 4, semestre: 5, req: ["QFAR215"] },
  { id: "QFAR313", nombre: "Operaciones Unitarias", creditos: 5, semestre: 5, req: ["QFAR224"] },
  { id: "QFAR314", nombre: "Química Farmacéutica I", creditos: 6, semestre: 5, req: ["QFAR213","QFAR226"] },
  { id: "QFAR315", nombre: "Electiva Profesional I", creditos: 2, semestre: 5, req: [] },
  { id: "QFAR316", nombre: "Microbiología", creditos: 5, semestre: 5, req: ["QFAR215"] },
  { id: "QFAR317", nombre: "Legislación Farmacéutica", creditos: 2, semestre: 5, req: ["QFAR214"] },

  { id: "QFAR321", nombre: "Biofarmacia", creditos: 6, semestre: 6, req: ["QFAR213","QFAR222"] },
  { id: "QFAR322", nombre: "Farmacología I", creditos: 7, semestre: 6, req: ["QFAR223","QFAR314"] },
  { id: "QFAR323", nombre: "Inmunología", creditos: 4, semestre: 6, req: ["QFAR223","QFAR312"] },
  { id: "QFAR324", nombre: "Química Farmacéutica II", creditos: 6, semestre: 6, req: ["QFAR314","QFAR316"] },
  { id: "QFAR325", nombre: "Práctica Profesional I", creditos: 5, semestre: 6, req: ["QFAR216","QFAR225","QFAR317"] },
  { id: "QFAR326", nombre: "Bioestadística", creditos: 2, semestre: 6, req: ["QFAR112","QFAR216"] },

  { id: "QFAR411", nombre: "Tecnología Farmacéutica I", creditos: 7, semestre: 7, req: ["QFAR313","QFAR321"] },
  { id: "QFAR412", nombre: "Farmacología II", creditos: 8, semestre: 7, req: ["QFAR322","QFAR324"] },
  { id: "QFAR413", nombre: "Química Fisiológica y Patológica", creditos: 5, semestre: 7, req: ["QFAR222","QFAR323"] },
  { id: "QFAR414", nombre: "Salud Pública y Epidemiología", creditos: 3, semestre: 7, req: ["QFAR216","QFAR326"] },
  { id: "QFAR415", nombre: "Química de Alimentos", creditos: 4, semestre: 7, req: ["QFAR222"] },
  { id: "QFAR416", nombre: "Metodología de la Investigación", creditos: 2, semestre: 7, req: ["QFAR216","QFAR326"] },
  { id: "TIP1", nombre: "Taller Perfil de Egreso I", creditos: 2, semestre: 7, req: ["QFAR325"] },

  { id: "QFAR421", nombre: "Tecnología Farmacéutica II", creditos: 7, semestre: 8, req: ["QFAR411"] },
  { id: "QFAR422", nombre: "Farmacia Asistencial", creditos: 3, semestre: 8, req: ["QFAR225","QFAR414"] },
  { id: "QFAR423", nombre: "Nutrición", creditos: 4, semestre: 8, req: ["QFAR413","QFAR415"] },
  { id: "QFAR424", nombre: "Gestión de Calidad", creditos: 3, semestre: 8, req: ["QFAR317","QFAR411"] },
  { id: "QFAR425", nombre: "Bioquímica Clínica", creditos: 6, semestre: 8, req: ["QFAR413"] },
  { id: "QFAR426", nombre: "Seminario de Licenciatura", creditos: 4, semestre: 8, req: ["QFAR411","QFAR412","QFAR413","QFAR414","QFAR415","QFAR416","TIP1"] },
  { id: "TIP2", nombre: "Taller Perfil de Egreso II", creditos: 2, semestre: 8, req: ["TIP1"] },

  { id: "QFAR511", nombre: "Farmacia Clínica I", creditos: 7, semestre: 9, req: ["QFAR421","QFAR422","QFAR423","QFAR424","QFAR425","QFAR426","TIP2"] },
  { id: "QFAR512", nombre: "Cosmética", creditos: 5, semestre: 9, req: ["QFAR421"] },
  { id: "QFAR513", nombre: "Toxicología", creditos: 5, semestre: 9, req: ["QFAR412"] },
  { id: "QFAR514", nombre: "Gestión Comercial", creditos: 2, semestre: 9, req: ["QFAR225","QFAR424"] },
  { id: "QFAR515", nombre: "Medicamentos Complementarios", creditos: 2, semestre: 9, req: ["QFAR412","QFAR423"] },
  { id: "QFAR516", nombre: "Práctica Profesional II", creditos: 7, semestre: 9, req: ["QFAR325","QFAR412"] },
  { id: "TIP3", nombre: "Taller Perfil de Egreso III", creditos: 2, semestre: 9, req: ["TIP2"] },

  { id: "QFAR521", nombre: "Electiva Profesional II", creditos: 2, semestre: 10, req: ["QFAR216"] },
  { id: "QFAR522", nombre: "Farmacia Clínica II", creditos: 7, semestre: 10, req: ["QFAR511"] },
  { id: "QFAR523", nombre: "Internado I / Unidad Investigación I", creditos: 5, semestre: 10, req: ["QFAR426"] },
  { id: "QFAR524", nombre: "Práctica Profesional III", creditos: 13, semestre: 10, req: ["QFAR222"] },

  { id: "QFAR611", nombre: "Internado II / Unidad Investigación II", creditos: 30, semestre: 11, req: ["QFAR523"] }
];

/* ---------- ESTADO ---------- */

let aprobados = new Set(
  JSON.parse(localStorage.getItem("aprobados")) || []
);

/* ---------- FUNCIONES ---------- */

function obtenerAnio(sem) {
  return 2024 + Math.floor((sem - 1) / 2);
}

function nombreSemestre(sem) {
  return sem % 2 === 0 ? "II semestre" : "I semestre";
}

function calcularCreditos() {
  let total = 0;
  aprobados.forEach(id => {
    total += ramos.find(r => r.id === id)?.creditos || 0;
  });
  document.getElementById("creditosTotales").innerText =
    `Créditos aprobados: ${total}`;
  return total;
}

function totalCreditosCarrera() {
  return ramos.reduce((a, r) => a + r.creditos, 0);
}

function requisitosCumplidos(r) {
  const okRamos = r.req.every(x => aprobados.has(x));
  const okCred = r.reqCreditos ? calcularCreditos() >= r.reqCreditos : true;
  return okRamos && okCred;
}

function creditosPorSemestre(sem) {
  let t = 0;
  aprobados.forEach(id => {
    const r = ramos.find(x => x.id === id);
    if (r?.semestre === Number(sem)) t += r.creditos;
  });
  return t;
}

function ramosDisponibles() {
  return ramos.filter(r => !aprobados.has(r.id) && requisitosCumplidos(r));
}

function progresoCarrera() {
  return Math.round((calcularCreditos() / totalCreditosCarrera()) * 100);
}

function estimarEgreso() {
  const sems = [...aprobados].map(id => ramos.find(r => r.id === id)?.semestre || 1);
  return obtenerAnio(Math.max(...sems, 1));
}

function disponiblesPorPeriodo() {
  const out = {};
  ramosDisponibles().forEach(r => {
    const key = `${obtenerAnio(r.semestre)} – ${nombreSemestre(r.semestre)}`;
    if (!out[key]) out[key] = [];
    out[key].push(r);
  });
  return out;
}

/* ---------- RENDER ---------- */

function render() {
  const cont = document.getElementById("malla");
  cont.innerHTML = "";

  /* Barra progreso */
  const prog = progresoCarrera();
  cont.innerHTML += `
    <div class="progress-container">
      <div class="progress-bar" style="width:${prog}%"></div>
    </div>
    <div class="egreso">
      Progreso: ${prog}% · Año estimado de egreso: ${estimarEgreso()}
    </div>
  `;

  /* Malla vertical */
  const estructura = {};
  ramos.forEach(r => {
    const a = obtenerAnio(r.semestre);
    estructura[a] ??= {};
    estructura[a][r.semestre] ??= [];
    estructura[a][r.semestre].push(r);
  });

  Object.keys(estructura).forEach(a => {
    cont.innerHTML += `<h2>${a}</h2>`;
    Object.keys(estructura[a]).forEach(s => {
      cont.innerHTML += `<h3>${nombreSemestre(s)}</h3>`;
      if (creditosPorSemestre(s) > 30)
        cont.innerHTML += `<p style="color:#f87171">⚠️ Más de 30 créditos</p>`;

      estructura[a][s].forEach(r => {
        const ok = requisitosCumplidos(r);
        cont.innerHTML += `
          <div class="ramo ${aprobados.has(r.id) ? "aprobado" : ""} ${!ok ? "bloqueado" : ""}"
            onclick="${ok || aprobados.has(r.id) ? `toggle('${r.id}')` : ""}">
            <strong>${r.nombre}</strong>
            <div class="codigo">${r.id}</div>
            <div class="creditos">${r.creditos} créditos</div>
            <div class="requisitos">
              Req: ${r.req.length ? r.req.join(", ") : "Sin requisitos"}
              ${r.reqCreditos ? " + " + r.reqCreditos + " créditos" : ""}
            </div>
          </div>
        `;
      });
    });
  });

  /* Disponibles */
  cont.innerHTML += `<h2>👀 Ramos que puedes tomar</h2>`;
  const disp = disponiblesPorPeriodo();
  Object.keys(disp).forEach(k => {
    cont.innerHTML += `<h3>${k}</h3>`;
    disp[k].forEach(r => {
      cont.innerHTML += `<p>• ${r.id} – ${r.nombre}</p>`;
    });
  });
}

function toggle(id) {
  aprobados.has(id) ? aprobados.delete(id) : aprobados.add(id);
  localStorage.setItem("aprobados", JSON.stringify([...aprobados]));
  render();
}

render();
