document.getElementById("ano").textContent = new Date().getFullYear();

const trackerLink = "https://fortnitetracker.com/profile/all/dswawk3kk/events";
const copyBtn = document.getElementById("copyLink");
const copyStatus = document.getElementById("copyStatus");

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(trackerLink);
    copyStatus.textContent = "Link copiado! ✅";
  } catch {
    copyStatus.textContent = "Não consegui copiar automaticamente 😅 Copie manual: " + trackerLink;
  }
});

const form = document.getElementById("form");
const status = document.getElementById("status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const msg = document.getElementById("msg").value.trim();
  status.textContent = `Valeu, ${nome}! Mensagem enviada (simulado): "${msg}"`;
  form.reset();
});
