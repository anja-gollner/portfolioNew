export function initContactForm() {
  const form = document.querySelector<HTMLFormElement>("#contactForm");
  const popup = document.querySelector<HTMLDivElement>("#popup");
  const datenschutzCheckbox = form?.querySelector<HTMLInputElement>("input[name='datenschutz']");
  const datenschutzError = document.getElementById("errorDatenschutz");

  if (!form || !popup || !datenschutzCheckbox || !datenschutzError) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let valid = true;
    const inputs = form.querySelectorAll<HTMLInputElement>("input:not([type='checkbox'])");
    form.querySelectorAll(".error-message").forEach(el => el.classList.add("hidden"));
    inputs.forEach(input => input.classList.remove("error"));
    datenschutzCheckbox.classList.remove("error");
    datenschutzError.classList.add("hidden");

    inputs.forEach(input => {
      const val = input.value.trim();
      if (input.required && !val) {
        input.classList.add("error");
        input.parentElement?.querySelector(".error-message")?.classList.remove("hidden");
        valid = false;
      }
      if (input.name === "email" && val && !/\S+@\S+\.\S+/.test(val)) {
        input.classList.add("error");
        input.parentElement?.querySelector(".error-message")?.classList.remove("hidden");
        valid = false;
      }
    });

    if (!datenschutzCheckbox.checked) {
      datenschutzCheckbox.classList.add("error");
      datenschutzError.classList.remove("hidden");
      valid = false;
    }

    if (!valid) return;

    const formData = new FormData(form);
    try {
      const res = await fetch("/sendMail.php", {
        method: "POST",
        body: formData
      });
      const result = await res.text();
      if (res.ok && result === "OK") {
        popup.classList.remove("hidden");
        setTimeout(() => popup.classList.add("hidden"), 4000);
        form.reset();
      } else {
        alert("Fehler beim Senden: " + result);
      }
    } catch (err) {
      alert("Nachricht konnte nicht gesendet werden.");
      console.error(err);
    }
  });
}
