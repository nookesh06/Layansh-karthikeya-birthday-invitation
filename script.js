// Animate the actual transparent PNG cut-outs with CSS. Confetti is only an extra detail.
const layer = document.querySelector(".confetti-layer");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reducedMotion) {
  const colors = ["#ed806c", "#e9b75f", "#8db99a", "#a69acb", "#f1b39b"];
  for (let i = 0; i < 26; i++) {
    const bit = document.createElement("span");
    bit.className = "confetti";
    bit.style.left = `${Math.random() * 100}%`;
    bit.style.background = colors[i % colors.length];
    bit.style.animationDuration = `${13 + Math.random() * 16}s`;
    bit.style.animationDelay = `${Math.random() * -25}s`;
    bit.style.borderRadius = i % 2 ? "50%" : "2px";
    layer.appendChild(bit);
  }
}

const birthday = new Date("2026-11-05T00:00:00+05:30").getTime();
function updateCountdown() {
  const remaining = birthday - Date.now();
  if (remaining <= 0) {
    document.querySelector(".countdown").innerHTML =
      '<div><b>1</b><span>VERY SPECIAL DAY</span></div>';
    document.querySelector(".countdown-date").textContent = "HAPPY FIRST BIRTHDAY, LAYANSH!";
    return;
  }
  const values = [
    Math.floor(remaining / 86400000),
    Math.floor((remaining % 86400000) / 3600000),
    Math.floor((remaining % 3600000) / 60000),
    Math.floor((remaining % 60000) / 1000)
  ];
  ["days", "hours", "minutes", "seconds"].forEach((id, i) => {
    document.getElementById(id).textContent = String(values[i]).padStart(2, "0");
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);
