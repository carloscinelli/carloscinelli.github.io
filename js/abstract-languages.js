document.addEventListener("click", function (event) {
  const button = event.target.closest("button[data-abstract-language]");
  if (!button) return;

  const abstract = button.closest(".bilingual-abstract");
  if (!abstract) return;

  const language = button.dataset.abstractLanguage;
  abstract.querySelectorAll("[data-abstract-text]").forEach(function (text) {
    text.hidden = text.dataset.abstractText !== language;
  });
  abstract.querySelectorAll("button[data-abstract-language]").forEach(function (option) {
    option.setAttribute("aria-pressed", String(option === button));
  });
});
