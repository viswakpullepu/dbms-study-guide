(function () {
  "use strict";

  const STORAGE_KEYS = {
    theme: "dbms-notes-theme",
    reviewed: "dbms-notes-reviewed"
  };

  const quizData = [
    {
      id: "q1",
      question: "1. In SQL, which clause filters grouped results after GROUP BY is applied?",
      options: ["WHERE", "HAVING", "ORDER BY", "DISTINCT"],
      answer: 1,
      explanation: "WHERE filters individual rows before grouping; HAVING filters groups created by GROUP BY."
    },
    {
      id: "q2",
      question: "2. Which SQL pattern matches a 5-letter word starting with 'h' and having 'l' as its 3rd character?",
      options: ["LIKE 'h%l%'", "LIKE 'h_l__'", "LIKE 'h_l%'", "LIKE '_hl__'"],
      answer: 1,
      explanation: "Each underscore (_) matches exactly one character: h (1), _ (2), l (3), _ (4), _ (5)."
    },
    {
      id: "q3",
      question: "3. Given FDs {A -> B, B -> C, C -> D}, what is the attribute closure A+?",
      options: ["{A, B}", "{A, B, C}", "{A, B, C, D}", "{B, C, D}"],
      answer: 2,
      explanation: "Starting from {A}, A -> B adds B, B -> C adds C, and C -> D adds D, giving {A, B, C, D}."
    },
    {
      id: "q4",
      question: "4. Decomposing R into R1 and R2 is guaranteed to be lossless when:",
      options: [
        "R1 and R2 share no common attributes",
        "(R1 intersect R2) functionally determines R1 or R2",
        "All attributes appear in both R1 and R2",
        "Every dependency is trivial"
      ],
      answer: 1,
      explanation: "A common attribute set that forms a superkey of at least one sub-relation guarantees a lossless join."
    },
    {
      id: "q5",
      question: "5. How many Clustered Indexes can exist on a single database table?",
      options: [
        "Zero",
        "Exactly one (at most one)",
        "One per column",
        "Unlimited, just like non-clustered indexes"
      ],
      answer: 1,
      explanation: "A clustered index dictates the physical storage order of table rows on disk, so a table can have only one."
    },
    {
      id: "q6",
      question: "6. Which file organization is fast for equality lookups (key = value) but poor for range queries?",
      options: [
        "Sequential file organization",
        "Hashed file organization",
        "Clustered B+ tree index",
        "ISAM"
      ],
      answer: 1,
      explanation: "Hash functions scatter keys across buckets without preserving logical order, making range scans inefficient."
    },
    {
      id: "q7",
      question: "7. In a Precedence Graph for Conflict Serializability, what does a cycle indicate?",
      options: [
        "The schedule is view serializable",
        "The schedule is NOT conflict serializable",
        "Every transaction committed safely",
        "Only read-read conflicts occurred"
      ],
      answer: 1,
      explanation: "A cycle means conflicting operations require contradictory serial orders, so the schedule is not conflict serializable."
    },
    {
      id: "q8",
      question: "8. During Log-Based Restart Recovery after a crash, what happens to active (uncommitted) transactions?",
      options: [
        "Redo using the After-Image (NEW value)",
        "Undo using the Before-Image (OLD value)",
        "Switch to the Shadow Page Table",
        "Keep their changes in the database"
      ],
      answer: 1,
      explanation: "Uncommitted transactions violate atomicity if left applied, so the Undo phase restores their OLD values from the log."
    }
  ];

  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const printBtn = document.getElementById("print-btn");
  const searchInput = document.getElementById("topic-search");
  const clearSearchBtn = document.getElementById("clear-search");
  const emptyResetBtn = document.getElementById("empty-reset");
  const filterStatus = document.getElementById("filter-status");
  const emptyState = document.getElementById("empty-state");
  const emptyMessage = document.getElementById("empty-message");
  const progressStatus = document.getElementById("progress-status");
  const reviewButtons = Array.from(document.querySelectorAll(".review-toggle"));
  const topicCards = Array.from(document.querySelectorAll(".topic-card"));
  const moduleSections = Array.from(document.querySelectorAll(".module-section[data-module]"));
  const quizContainer = document.getElementById("quiz-container");
  const quizScoreEl = document.getElementById("quiz-score");
  const resetQuizBtn = document.getElementById("reset-quiz");

  let reviewedSet = loadReviewed();
  let quizAnswers = {};

  function loadReviewed() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.reviewed);
      const parsed = raw ? JSON.parse(raw) : [];
      return new Set(Array.isArray(parsed) ? parsed : []);
    } catch (_err) {
      return new Set();
    }
  }

  function saveReviewed() {
    try {
      localStorage.setItem(STORAGE_KEYS.reviewed, JSON.stringify(Array.from(reviewedSet)));
    } catch (_err) {
      /* Ignore storage quota or file:// restrictions cleanly */
    }
  }

  function applyTheme(isInverted) {
    root.classList.toggle("inverted", isInverted);
    themeToggle.setAttribute("aria-pressed", String(isInverted));
    themeToggle.textContent = isInverted ? "Light Theme" : "Invert Theme";
    try {
      localStorage.setItem(STORAGE_KEYS.theme, isInverted ? "inverted" : "light");
    } catch (_err) {
      /* Ignore storage errors */
    }
  }

  function initTheme() {
    let saved = "light";
    try {
      saved = localStorage.getItem(STORAGE_KEYS.theme) || "light";
    } catch (_err) {
      saved = "light";
    }
    applyTheme(saved === "inverted");
  }

  function renderReviewStates() {
    reviewButtons.forEach(function (btn) {
      const modId = btn.getAttribute("data-review");
      const done = reviewedSet.has(modId);
      btn.setAttribute("aria-pressed", String(done));
      btn.textContent = done ? "Reviewed" : "Mark Reviewed";
    });
    progressStatus.textContent = reviewedSet.size + " of 4 modules reviewed";
  }

  function filterTopics() {
    const query = searchInput.value.trim().toLowerCase();
    clearSearchBtn.hidden = query.length === 0;

    let visibleCount = 0;
    topicCards.forEach(function (card) {
      const hay = (card.textContent + " " + (card.getAttribute("data-keywords") || "")).toLowerCase();
      const match = query === "" || hay.indexOf(query) !== -1;
      card.hidden = !match;
      if (match) {
        visibleCount += 1;
      }
    });

    moduleSections.forEach(function (section) {
      const anyVisible = section.querySelectorAll(".topic-card:not([hidden])").length > 0;
      section.hidden = !anyVisible;
    });

    if (query === "") {
      filterStatus.textContent = "Showing all " + topicCards.length + " topics";
      emptyState.hidden = true;
    } else if (visibleCount === 0) {
      filterStatus.textContent = "0 matching topics";
      emptyMessage.textContent = 'No topics matched "' + searchInput.value.trim() + '".';
      emptyState.hidden = false;
    } else {
      filterStatus.textContent = "Showing " + visibleCount + " of " + topicCards.length + " topics";
      emptyState.hidden = true;
    }
  }

  function clearSearch() {
    searchInput.value = "";
    filterTopics();
    searchInput.focus();
  }

  function updateQuizScore() {
    let correct = 0;
    Object.keys(quizAnswers).forEach(function (qid) {
      const q = quizData.find(function (item) { return item.id === qid; });
      if (q && quizAnswers[qid] === q.answer) {
        correct += 1;
      }
    });
    quizScoreEl.textContent = "Score: " + correct + " / " + quizData.length;
  }

  function renderQuiz() {
    quizContainer.innerHTML = "";
    quizData.forEach(function (item) {
      const card = document.createElement("div");
      card.className = "quiz-card";

      const questionEl = document.createElement("p");
      questionEl.className = "quiz-question";
      questionEl.textContent = item.question;
      card.appendChild(questionEl);

      const optionsWrap = document.createElement("div");
      optionsWrap.className = "quiz-options";

      const chosen = quizAnswers[item.id];
      const answered = typeof chosen === "number";

      item.options.forEach(function (optText, idx) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "quiz-option";
        btn.textContent = String.fromCharCode(65 + idx) + ". " + optText;

        if (answered) {
          btn.disabled = true;
          if (idx === item.answer) {
            btn.classList.add("selected-correct");
          } else if (idx === chosen) {
            btn.classList.add("selected-wrong");
          }
        }

        btn.addEventListener("click", function () {
          quizAnswers[item.id] = idx;
          renderQuiz();
          updateQuizScore();
        });

        optionsWrap.appendChild(btn);
      });

      card.appendChild(optionsWrap);

      if (answered) {
        const fb = document.createElement("p");
        fb.className = "quiz-feedback";
        const verdict = chosen === item.answer ? "Correct: " : "Incorrect: ";
        fb.textContent = verdict + item.explanation;
        card.appendChild(fb);
      }

      quizContainer.appendChild(card);
    });
  }

  themeToggle.addEventListener("click", function () {
    applyTheme(!root.classList.contains("inverted"));
  });

  printBtn.addEventListener("click", function () {
    window.print();
  });

  reviewButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const modId = btn.getAttribute("data-review");
      if (reviewedSet.has(modId)) {
        reviewedSet.delete(modId);
      } else {
        reviewedSet.add(modId);
      }
      saveReviewed();
      renderReviewStates();
    });
  });

  searchInput.addEventListener("input", filterTopics);
  clearSearchBtn.addEventListener("click", clearSearch);
  emptyResetBtn.addEventListener("click", clearSearch);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && searchInput.value.trim() !== "") {
      clearSearch();
    }
  });

  resetQuizBtn.addEventListener("click", function () {
    quizAnswers = {};
    renderQuiz();
    updateQuizScore();
  });

  initTheme();
  renderReviewStates();
  filterTopics();
  renderQuiz();
  updateQuizScore();
})();
