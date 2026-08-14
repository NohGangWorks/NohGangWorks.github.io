(() => {
  const mobileQuery = window.matchMedia("(max-width: 520px)");
  const menus = Array.from(document.querySelectorAll(".nav-menu"));

  const closeMenu = (menu) => {
    const trigger = menu.querySelector(".nav-menu-trigger");
    menu.classList.remove("is-open");
    trigger?.setAttribute("aria-expanded", "false");
  };

  const closeAll = (exceptMenu) => {
    menus.forEach((menu) => {
      if (menu !== exceptMenu) {
        closeMenu(menu);
      }
    });
  };

  menus.forEach((menu) => {
    const trigger = menu.querySelector(".nav-menu-trigger");
    if (!trigger) {
      return;
    }

    trigger.addEventListener("click", (event) => {
      if (!mobileQuery.matches) {
        return;
      }

      event.preventDefault();
      const isOpen = menu.classList.toggle("is-open");
      trigger.setAttribute("aria-expanded", String(isOpen));
      closeAll(menu);
    });
  });

  document.addEventListener("click", (event) => {
    if (mobileQuery.matches && !event.target.closest(".nav-menu")) {
      closeAll();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAll();
    }
  });

  const resetForViewport = () => {
    if (!mobileQuery.matches) {
      closeAll();
    }
  };

  if (typeof mobileQuery.addEventListener === "function") {
    mobileQuery.addEventListener("change", resetForViewport);
  } else {
    mobileQuery.addListener(resetForViewport);
  }
})();
