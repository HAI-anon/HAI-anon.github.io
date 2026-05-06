const progressBar = document.getElementById("progressBar");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const toast = document.getElementById("toast");

const showToast = (message) => {
  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add("is-visible");

  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
};

const updateProgress = () => {
  if (!progressBar) {
    return;
  }

  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0;
  progressBar.style.width = `${ratio * 100}%`;
};

const closeNav = () => {
  if (!navLinks || !navToggle) {
    return;
  }

  navLinks.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
};

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const willOpen = !navLinks.classList.contains("is-open");
    navLinks.classList.toggle("is-open", willOpen);
    navToggle.setAttribute("aria-expanded", String(willOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });
}

document.querySelectorAll("[data-copy-url]").forEach((button) => {
  button.addEventListener("click", async () => {
    const text = window.location.href;
    try {
      await navigator.clipboard.writeText(text);
      showToast("Page URL copied");
    } catch (error) {
      showToast("Unable to copy page URL");
    }
  });
});

document.querySelectorAll("[data-copy-target]").forEach((button) => {
  button.addEventListener("click", async () => {
    const targetId = button.getAttribute("data-copy-target");
    const target = targetId ? document.getElementById(targetId) : null;
    const text = target ? target.textContent.trim() : "";

    if (!text) {
      showToast("Nothing to copy yet");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      showToast("BibTeX copied");
    } catch (error) {
      showToast("Unable to copy BibTeX");
    }
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14,
  },
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

const filterButtons = document.querySelectorAll("[data-filter]");
const experimentCards = document.querySelectorAll(".experiment-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    experimentCards.forEach((card) => {
      const category = card.getAttribute("data-category");
      const shouldShow = filter === "all" || filter === category;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
window.addEventListener("load", updateProgress);
updateProgress();
