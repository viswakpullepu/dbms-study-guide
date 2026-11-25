(function () {
  "use strict";

  const THEME_KEY = "dbms-notes-theme";
  const data = Array.isArray(window.DBMS_QUESTIONS) ? window.DBMS_QUESTIONS : [];

  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const printBtn = document.getElementById("print-btn");
  const searchInput = document.getElementById("qb-search");
  const clearSearchBtn = document.getElementById("qb-clear-search");
  const filterStatus = document.getElementById("qb-filter-status");
  const emptyBox = document.getElementById("qb-empty");
  const emptyMsg = document.getElementById("qb-empty-msg");
  const resetFiltersBtn = document.getElementById("qb-reset-filters");
  const toggleAllBtn = document.getElementById("toggle-all-answers");
  const unitButtons = Array.from(document.querySelectorAll("[data-unit-filter]"));
  const partButtons = Array.from(document.querySelectorAll("[data-part-filter]"));
  const unitSections = Array.from(document.querySelectorAll("[data-unit-section]"));

  let selectedUnit = "all";
  let selectedPart = "all";
  let allExpanded = true;
  const cardRefs = [];

  function applyTheme(isInverted) {
    root.classList.toggle("inverted", isInverted);
    themeToggle.setAttribute("aria-pressed", String(isInverted));
    themeToggle.textContent = isInverted ? "Light Theme" : "Invert Theme";
    try {
      localStorage.setItem(THEME_KEY, isInverted ? "inverted" : "light");
    } catch (_err) {
      /* Ignore storage restrictions */
    }
  }

  function initTheme() {
    let saved = "light";
    try {
      saved = localStorage.getItem(THEME_KEY) || "light";
    } catch (_err) {
      saved = "light";
    }
    applyTheme(saved === "inverted");
  }

  function setCardExpanded(cardObj, expanded) {
    cardObj.expanded = expanded;
    cardObj.toggle.setAttribute("aria-expanded", String(expanded));
    cardObj.sign.textContent = expanded ? "-" : "+";
    cardObj.answer.hidden = !expanded;
  }

  function buildCards() {
    const containers = {
      3: document.getElementById("unit-3-list"),
      4: document.getElementById("unit-4-list"),
      5: document.getElementById("unit-5-list")
    };

    data.forEach(function (item) {
      const container = containers[item.unit];
      if (!container) {
        return;
      }

      const card = document.createElement("article");
      card.className = "qb-card";

      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "qb-toggle";
      toggle.setAttribute("aria-expanded", "true");

      const left = document.createElement("span");
      left.className = "qb-q-left";

      const meta = document.createElement("span");
      meta.className = "qb-meta";
      meta.textContent = "Unit " + (item.unit === 3 ? "III" : item.unit === 4 ? "IV" : "V") +
        " | Part-" + item.part + " " + (item.part === "A" ? "Short" : "Essay") +
        " | Q" + item.num;

      const qText = document.createElement("span");
      qText.textContent = item.num + ". " + item.q;

      left.appendChild(meta);
      left.appendChild(qText);

      const sign = document.createElement("span");
      sign.className = "qb-sign";
      sign.setAttribute("aria-hidden", "true");
      sign.textContent = "-";

      toggle.appendChild(left);
      toggle.appendChild(sign);

      const answer = document.createElement("div");
      answer.className = "qb-answer";

      const tldr = document.createElement("p");
      tldr.className = "qb-tldr";
      const tldrStrong = document.createElement("strong");
      tldrStrong.textContent = "Quick Answer: ";
      tldr.appendChild(tldrStrong);
      tldr.appendChild(document.createTextNode(item.tldr));

      const detail = document.createElement("div");
      detail.innerHTML = item.body;

      answer.appendChild(tldr);
      answer.appendChild(detail);

      card.appendChild(toggle);
      card.appendChild(answer);
      container.appendChild(card);

      const searchBlob = (item.q + " " + item.tldr + " " + detail.textContent).toLowerCase();
      const cardObj = {
        item: item,
        el: card,
        toggle: toggle,
        sign: sign,
        answer: answer,
        searchBlob: searchBlob,
        expanded: true
      };

      toggle.addEventListener("click", function () {
        setCardExpanded(cardObj, !cardObj.expanded);
      });

      cardRefs.push(cardObj);
    });
  }

  function applyFilters() {
    const query = searchInput.value.trim().toLowerCase();
    clearSearchBtn.hidden = query.length === 0;

    let visibleCount = 0;
    const unitVisibleCounts = { 3: 0, 4: 0, 5: 0 };

    cardRefs.forEach(function (ref) {
      const unitOk = selectedUnit === "all" || String(ref.item.unit) === selectedUnit;
      const partOk = selectedPart === "all" || ref.item.part === selectedPart;
      const textOk = query === "" || ref.searchBlob.indexOf(query) !== -1;
      const show = unitOk && partOk && textOk;

      ref.el.hidden = !show;
      if (show) {
        visibleCount += 1;
        unitVisibleCounts[ref.item.unit] += 1;
      }
    });

    unitSections.forEach(function (sec) {
      const u = Number(sec.getAttribute("data-unit-section"));
      sec.hidden = unitVisibleCounts[u] === 0;
    });

    filterStatus.textContent = "Showing " + visibleCount + " of " + cardRefs.length + " questions";

    if (visibleCount === 0) {
      emptyMsg.textContent = query
        ? 'No questions matched "' + searchInput.value.trim() + '" under current filters.'
        : "No questions matched the selected unit/part filters.";
      emptyBox.hidden = false;
    } else {
      emptyBox.hidden = true;
    }
  }

  function setGroupPressed(buttons, attr, activeValue) {
    buttons.forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute(attr) === activeValue));
    });
  }

  unitButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      selectedUnit = btn.getAttribute("data-unit-filter");
      setGroupPressed(unitButtons, "data-unit-filter", selectedUnit);
      applyFilters();
    });
  });

  partButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      selectedPart = btn.getAttribute("data-part-filter");
      setGroupPressed(partButtons, "data-part-filter", selectedPart);
      applyFilters();
    });
  });

  toggleAllBtn.addEventListener("click", function () {
    allExpanded = !allExpanded;
    toggleAllBtn.setAttribute("aria-pressed", String(allExpanded));
    toggleAllBtn.textContent = allExpanded ? "Collapse All" : "Expand All";
    cardRefs.forEach(function (ref) {
      setCardExpanded(ref, allExpanded);
    });
  });

  searchInput.addEventListener("input", applyFilters);
  clearSearchBtn.addEventListener("click", function () {
    searchInput.value = "";
    applyFilters();
    searchInput.focus();
  });

  resetFiltersBtn.addEventListener("click", function () {
    selectedUnit = "all";
    selectedPart = "all";
    searchInput.value = "";
    setGroupPressed(unitButtons, "data-unit-filter", "all");
    setGroupPressed(partButtons, "data-part-filter", "all");
    applyFilters();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && searchInput.value.trim() !== "") {
      searchInput.value = "";
      applyFilters();
      searchInput.focus();
    }
  });

  themeToggle.addEventListener("click", function () {
    applyTheme(!root.classList.contains("inverted"));
  });

  printBtn.addEventListener("click", function () {
    window.print();
  });

  initTheme();
  buildCards();
  applyFilters();
})();
