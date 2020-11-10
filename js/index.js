function scrollToElement(query) {
  const el = document.querySelector(query);
  const top = el.offsetTop;

  window.scrollTo({ top, behavior: "smooth" });
}

function isActiveItem(item) {
  const offsetTop = item.offsetTop - 400;
  const offsetBottom = offsetTop + item.offsetHeight;
  return window.scrollY <= offsetBottom && window.scrollY >= offsetTop;
}

if (window.innerWidth >= 1280) {
  window.addEventListener("scroll", () => {
    const itens = document.querySelectorAll(".icons");
    const sections = document.querySelectorAll("section");

    sections.forEach((el, index) => {
      const item = itens[index];
      isActiveItem(el)
        ? item.classList.add("active")
        : item.classList.remove("active");
    });
  });
}
