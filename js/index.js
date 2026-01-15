const textArray = ["Carlos Talavera", "Programador","Ingeniero en sistemas"];
let i = 0;
const subject_text = document.getElementById("text");

const TYPE_SPEED = 80; // ms por letra
const DELETE_SPEED = 50;
const PAUSE = 1200;

function typeAndDelete(text) {
  const length = text.length;

  // Preparar texto
  subject_text.textContent = text;
  subject_text.style.setProperty("--steps", length);
  subject_text.style.setProperty("--type-duration", `${length * TYPE_SPEED}ms`);
  subject_text.style.setProperty(
    "--delete-duration",
    `${length * DELETE_SPEED}ms`
  );

  // REINICIO LIMPIO
  subject_text.className = "";
  subject_text.offsetWidth;

  // ESCRIBIR
  subject_text.classList.add("typing");

  // BORRAR
  setTimeout(() => {
    subject_text.classList.remove("typing");
    subject_text.classList.add("deleting");
  }, length * TYPE_SPEED + PAUSE);
}

// Loop infinito
typeAndDelete(textArray[i]);

setInterval(() => {
  i = (i + 1) % textArray.length;
  typeAndDelete(textArray[i]);
}, textArray[i].length * TYPE_SPEED + PAUSE + textArray[i].length * DELETE_SPEED + 500);
