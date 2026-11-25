window.DBMS_QUESTIONS = [
  // ==================== UNIT III - PART A (1 to 22) ====================
  {
    unit: 3, part: "A", num: 1,
    q: "Describe a functional dependency.",
    tldr: "X -> Y means every identical X value determines a unique Y value.",
    body: "<p>A <strong>functional dependency (FD)</strong> <code>X -&gt; Y</code> in relation <code>R</code> states that if two tuples agree on attribute set <code>X</code>, they must also agree on attribute set <code>Y</code>. Example: <code>RollNo -&gt; StudentName</code>.</p>"
  },
  {
    unit: 3, part: "A", num: 2,
    q: "Enumerate the various Normal Forms.",
    tldr: "1NF, 2NF, 3NF, BCNF, 4NF, 5NF (increasing strictness against redundancy).",
    body: "<ul><li><strong>1NF:</strong> Atomic (indivisible) attribute values; no repeating groups.</li><li><strong>2NF:</strong> In 1NF and no partial dependency on a proper subset of a candidate key.</li><li><strong>3NF:</strong> In 2NF and no transitive dependency of non-prime attributes on candidate keys.</li><li><strong>BCNF:</strong> For every non-trivial FD <code>X -&gt; Y</code>, <code>X</code> is a superkey.</li><li><strong>4NF:</strong> In BCNF and no non-trivial multi-valued dependencies.</li><li><strong>5NF (PJNF):</strong> In 4NF and every join dependency is implied by candidate keys.</li></ul>"
  },
  {
    unit: 3, part: "A", num: 3,
    q: "Write the statement of Third Normal Form.",
    tldr: "In 2NF with no transitive dependencies; for every X -> A, X is a superkey or A is prime.",
    body: "<p>A relation <code>R</code> is in <strong>3NF</strong> if for every non-trivial functional dependency <code>X -&gt; A</code> holding on <code>R</code>, at least one condition holds: (1) <code>X</code> is a superkey of <code>R</code>, or (2) <code>A</code> is a <strong>prime attribute</strong> (part of some candidate key).</p>"
  },
  {
    unit: 3, part: "A", num: 4,
    q: "What is BCNF?",
    tldr: "Every non-trivial FD X -> Y must have a superkey on the left-hand side (X).",
    body: "<p><strong>Boyce-Codd Normal Form (BCNF)</strong> is a stricter version of 3NF. A relation <code>R</code> is in BCNF if for every non-trivial FD <code>X -&gt; Y</code>, <code>X</code> is a <strong>superkey</strong> of <code>R</code> (no prime-attribute exception like 3NF).</p>"
  },
  {
    unit: 3, part: "A", num: 5,
    q: "Explain the Fifth Normal Form.",
    tldr: "Project-Join Normal Form (PJNF): eliminates redundancy caused by join dependencies.",
    body: "<p>A relation is in <strong>5NF (Project-Join Normal Form)</strong> if it is in 4NF and cannot be losslessly decomposed into three or more smaller tables unless the join is already implied by its candidate keys.</p>"
  },
  {
    unit: 3, part: "A", num: 6,
    q: "What is multi-valued dependency?",
    tldr: "X ->> Y means X determines an independent set of Y values regardless of other attributes Z.",
    body: "<p>A <strong>multi-valued dependency (MVD)</strong> <code>X -&gt;&gt; Y</code> occurs in <code>R(X, Y, Z)</code> when for each value of <code>X</code>, the set of <code>Y</code> values is completely independent of the set of <code>Z</code> values. Example: <code>Student -&gt;&gt; Course</code> and <code>Student -&gt;&gt; Hobby</code>.</p>"
  },
  {
    unit: 3, part: "A", num: 7,
    q: "Specify the Fourth Normal Form.",
    tldr: "In BCNF and for every non-trivial MVD X ->> Y, X is a superkey.",
    body: "<p>A relation <code>R</code> is in <strong>4NF</strong> if it is in BCNF and for every non-trivial multi-valued dependency <code>X -&gt;&gt; Y</code> (where <code>Y</code> is not a subset of <code>X</code> and <code>X U Y != R</code>), <code>X</code> is a <strong>superkey</strong> of <code>R</code>.</p>"
  },
  {
    unit: 3, part: "A", num: 8,
    q: "Why certain functional dependencies are called trivial functional dependencies?",
    tldr: "Because they always hold on every possible relation without needing constraints.",
    body: "<p>An FD <code>X -&gt; Y</code> is called <strong>trivial</strong> when <code>Y</code> is a subset of <code>X</code> (<code>Y &sube; X</code>), such as <code>AB -&gt; A</code>. It is trivially true for all tables regardless of actual data values.</p>"
  },
  {
    unit: 3, part: "A", num: 9,
    q: "What is loss less join decomposition?",
    tldr: "Splitting R into R1, R2 such that R1 JOIN R2 reconstructs exact original R (no spurious tuples).",
    body: "<p>A decomposition of <code>R</code> into <code>R1</code> and <code>R2</code> is <strong>lossless</strong> if natural joining them produces the exact original relation <code>R</code> with no missing rows and no extra false (spurious) rows. Condition: <code>(R1 &cap; R2) -&gt; R1</code> or <code>(R1 &cap; R2) -&gt; R2</code>.</p>"
  },
  {
    unit: 3, part: "A", num: 10,
    q: "What is dependency preservation?",
    tldr: "Every original FD can be checked inside a single decomposed table without joins.",
    body: "<p>A decomposition <code>D = {R1, R2, ..., Rn}</code> is <strong>dependency preserving</strong> if the union of all FDs projected onto each individual <code>Ri</code> has the same closure as the original FD set <code>F</code> (<code>(F1 U F2 U ... U Fn)+ = F+</code>).</p>"
  },
  {
    unit: 3, part: "A", num: 11,
    q: "What is partial dependency?",
    tldr: "A non-prime attribute depends on only part (proper subset) of a composite candidate key.",
    body: "<p>In <code>X -&gt; A</code>, if <code>A</code> is a non-prime attribute and <code>A</code> depends on a <strong>proper subset</strong> of a candidate key <code>K</code>, it is a <strong>partial dependency</strong>. Example: key <code>(StudID, CourseID)</code> with <code>StudID -&gt; StudName</code>. Eliminated in <strong>2NF</strong>.</p>"
  },
  {
    unit: 3, part: "A", num: 12,
    q: "What is a candidate key?",
    tldr: "A minimal superkey: uniquely identifies every row with no redundant attributes.",
    body: "<p>A <strong>candidate key</strong> is a minimal set of attributes <code>K</code> whose closure covers the entire relation (<code>K+ = R</code>), and no proper subset of <code>K</code> has this property.</p>"
  },
  {
    unit: 3, part: "A", num: 13,
    q: "What is the purpose of a primary key?",
    tldr: "Uniquely identifies each tuple in a table and disallows NULL values.",
    body: "<p>The <strong>primary key</strong> is the chosen candidate key that enforces entity integrity: every row gets a unique, non-NULL identifier so records can be reliably referenced by foreign keys.</p>"
  },
  {
    unit: 3, part: "A", num: 14,
    q: "What is the closure of a set of FDs?",
    tldr: "F+ is the complete set of all FDs logically implied by F using Armstrong's axioms.",
    body: "<p>Given a set of FDs <code>F</code>, its <strong>closure (<code>F+</code>)</strong> is the set of all functional dependencies that can be inferred from <code>F</code> by repeatedly applying Armstrong's axioms.</p>"
  },
  {
    unit: 3, part: "A", num: 15,
    q: "What is a canonical cover?",
    tldr: "A minimal, equivalent version of F with single/combined minimal LHS, no extraneous attributes, and no redundant FDs.",
    body: "<p>A <strong>canonical cover (<code>Fc</code>)</strong> of <code>F</code> is a simplified, equivalent set of FDs such that: (1) <code>Fc+ = F+</code>, (2) no FD in <code>Fc</code> has an extraneous attribute on either LHS or RHS, and (3) each LHS in <code>Fc</code> is unique.</p>"
  },
  {
    unit: 3, part: "A", num: 16,
    q: "What are various anomalies? Explain each with an example.",
    tldr: "Insertion, Update, and Deletion anomalies caused by redundant data in unnormalized tables.",
    body: "<p>In an unnormalized <code>Orders(OrderID, CustName, CustAddr, Product)</code> table:</p><ul><li><strong>Insertion Anomaly:</strong> Cannot add a new customer unless they place an order (or must re-enter address on every order).</li><li><strong>Update Anomaly:</strong> Changing Madhu's address requires editing multiple rows; missing one creates conflicting addresses.</li><li><strong>Deletion Anomaly:</strong> Deleting Madhu's only order erases Madhu's address completely.</li></ul>"
  },
  {
    unit: 3, part: "A", num: 17,
    q: "Explain the attribute closure with an example.",
    tldr: "X+ is all attributes functionally determined by X under F.",
    body: "<p>The <strong>attribute closure <code>X+</code></strong> is the set of all attributes determined by <code>X</code>. Example: For <code>F = {A -&gt; B, B -&gt; C, C -&gt; D}</code>, start with <code>A+ = {A}</code>, add <code>B</code>, add <code>C</code>, add <code>D</code>, giving <code>A+ = {A, B, C, D}</code>.</p>"
  },
  {
    unit: 3, part: "A", num: 18,
    q: "Explain the closure of the functional dependency with an example.",
    tldr: "F+ contains every FD derivable from F (e.g., from A->B and B->C, F+ also includes A->C, A->BC, etc.).",
    body: "<p>The <strong>closure <code>F+</code></strong> includes all given FDs plus all implied FDs via Reflexivity, Augmentation, and Transitivity. Example: If <code>F = {A -&gt; B, B -&gt; C}</code>, then <code>F+</code> also includes <code>A -&gt; C</code> (transitivity), <code>A -&gt; A</code> (reflexivity), <code>AD -&gt; BD</code> (augmentation), and <code>A -&gt; ABC</code>.</p>"
  },
  {
    unit: 3, part: "A", num: 19,
    q: "What is a composite primary key?",
    tldr: "A primary key made up of two or more columns together.",
    body: "<p>When no single column uniquely identifies rows, two or more columns are combined as a <strong>composite primary key</strong>. Example: <code>PRIMARY KEY (OrderID, ProductID)</code> in an <code>OrderDetails</code> table.</p>"
  },
  {
    unit: 3, part: "A", num: 20,
    q: "What are alternate keys?",
    tldr: "All candidate keys other than the selected primary key.",
    body: "<p>If a table has candidate keys <code>{StudentID, Email, AadhaarNo}</code> and <code>StudentID</code> is chosen as the primary key, then <code>Email</code> and <code>AadhaarNo</code> are <strong>alternate keys</strong>.</p>"
  },
  {
    unit: 3, part: "A", num: 21,
    q: "What is the use of a Trigger?",
    tldr: "Procedural code that runs automatically on INSERT, UPDATE, or DELETE events.",
    body: "<p>A <strong>Trigger</strong> enforces complex business rules, maintains audit logs, prevents invalid changes, and automatically updates derived columns whenever <code>INSERT</code>, <code>UPDATE</code>, or <code>DELETE</code> occurs on a table.</p>"
  },
  {
    unit: 3, part: "A", num: 22,
    q: "What is a Cursor?",
    tldr: "A database pointer that fetches and processes query result rows one by one.",
    body: "<p>SQL normally handles sets of rows at once. A <strong>Cursor</strong> is a control structure (memory area/pointer) that allows procedural code (PL/SQL or T-SQL) to iterate through a query's result set <strong>row by row</strong>.</p>"
  },

  // ==================== UNIT III - PART B (1 to 17) ====================
  {
    unit: 3, part: "B", num: 1,
    q: "What are the problems caused by an un-normalized table?",
    tldr: "Redundancy wastes storage and triggers Insertion, Update, and Deletion anomalies plus slow writes.",
    body: "<ul><li><strong>Data Redundancy:</strong> Repeating the same facts across many rows wastes disk storage.</li><li><strong>Update Anomaly:</strong> Modifying a repeated attribute requires updating every duplicate copy; partial updates corrupt consistency.</li><li><strong>Insertion Anomaly:</strong> Cannot record independent facts without dummy/null values or repeating unrelated data.</li><li><strong>Deletion Anomaly:</strong> Deleting one fact unintentionally deletes unrelated information stored in the same row.</li><li><strong>Performance &amp; Complexity:</strong> Larger row sizes slow inserts, updates, and scans.</li></ul>"
  },
  {
    unit: 3, part: "B", num: 2,
    q: "What are the Armstrongs axioms? Give examples of each.",
    tldr: "3 core rules (Reflexivity, Augmentation, Transitivity) + 3 derived rules (Union, Decomposition, Pseudo-transitivity).",
    body: "<p><strong>Primary Axioms (Sound and Complete):</strong></p><ul><li><strong>Reflexivity:</strong> If <code>Y &sube; X</code>, then <code>X -&gt; Y</code>. Example: <code>{A, B} -&gt; A</code>.</li><li><strong>Augmentation:</strong> If <code>X -&gt; Y</code>, then <code>XZ -&gt; YZ</code>. Example: From <code>A -&gt; B</code>, derive <code>AC -&gt; BC</code>.</li><li><strong>Transitivity:</strong> If <code>X -&gt; Y</code> and <code>Y -&gt; Z</code>, then <code>X -&gt; Z</code>. Example: From <code>EmpID -&gt; Dept</code> and <code>Dept -&gt; Loc</code>, derive <code>EmpID -&gt; Loc</code>.</li></ul><p><strong>Additional Derived Rules:</strong></p><ul><li><strong>Union:</strong> <code>X -&gt; Y</code> and <code>X -&gt; Z</code> implies <code>X -&gt; YZ</code>.</li><li><strong>Decomposition:</strong> <code>X -&gt; YZ</code> implies <code>X -&gt; Y</code> and <code>X -&gt; Z</code>.</li><li><strong>Pseudo-transitivity:</strong> <code>X -&gt; Y</code> and <code>WY -&gt; Z</code> implies <code>WX -&gt; Z</code>.</li></ul>"
  },
  {
    unit: 3, part: "B", num: 3,
    q: "What is the necessity of schema refinement? Illustrate with an example.",
    tldr: "Refinement splits bloated tables via normalization to remove redundancy and anomalies.",
    body: "<p><strong>Schema refinement</strong> analyzes functional dependencies to decompose poorly designed tables into cleaner relations, eliminating redundancy and update/insert/delete anomalies while keeping joins lossless.</p><p><strong>Example:</strong> Unrefined <code>Orders(OrderID, CustomerName, CustomerAddress, Product)</code> repeats <code>(Madhu, Hyderabad)</code> for every order Madhu places. Splitting it into <code>Customers(CustomerID, CustomerName, CustomerAddress)</code> and <code>Orders(OrderID, CustomerID, Product)</code> stores Madhu's address once, removing all three anomalies.</p>"
  },
  {
    unit: 3, part: "B", num: 4,
    q: "Suppose that we decompose the schema R = (A, B, C, D, E) into (A, B, C) and (A, D, E). Show that this decomposition is lossless-join decomposition if F = {A -> BC, CD -> E, B -> D, E -> A}.",
    tldr: "Lossless because common attribute R1 intersect R2 = {A}, and A+ = {A,B,C,D,E} makes A a superkey of both tables.",
    body: "<ol><li><strong>Identify sub-relations:</strong> <code>R1 = {A, B, C}</code> and <code>R2 = {A, D, E}</code>.</li><li><strong>Find common attributes:</strong> <code>R1 &cap; R2 = {A}</code>.</li><li><strong>Compute closure <code>A+</code> under <code>F</code>:</strong> Start with <code>{A}</code>. Using <code>A -&gt; BC</code> add <code>B, C</code> -> <code>{A, B, C}</code>. Using <code>B -&gt; D</code> add <code>D</code> -> <code>{A, B, C, D}</code>. Using <code>CD -&gt; E</code> add <code>E</code> -> <code>{A, B, C, D, E}</code>.</li><li><strong>Apply lossless test:</strong> Since <code>A -&gt; ABC</code> (and <code>A -&gt; ADE</code>), <code>(R1 &cap; R2) -&gt; R1</code> holds in <code>F+</code>. Therefore, the decomposition is a <strong>lossless-join decomposition</strong>.</li></ol>"
  },
  {
    unit: 3, part: "B", num: 5,
    q: "Compute the closure of F for R = (A, B, C, D, E), F = {A -> BC, CD -> E, B -> D, E -> A}. List the candidate keys for R.",
    tldr: "Candidate keys: A, E, BC, CD. Key closures: A+ = E+ = (BC)+ = (CD)+ = ABCDE; B+ = BD.",
    body: "<p><strong>Step 1: Compute attribute closures to identify all implied FDs in <code>F+</code>:</strong></p><ul><li><code>A+</code>: <code>A -&gt; BC</code>, <code>B -&gt; D</code>, <code>CD -&gt; E</code> gives <code>{A, B, C, D, E}</code>.</li><li><code>E+</code>: <code>E -&gt; A</code> gives <code>E+ = A+ = {A, B, C, D, E}</code>.</li><li><code>(CD)+</code>: <code>CD -&gt; E</code>, <code>E -&gt; A</code> gives <code>(CD)+ = {A, B, C, D, E}</code>.</li><li><code>(BC)+</code>: <code>B -&gt; D</code> adds <code>D</code>, giving <code>CD</code>, then <code>CD -&gt; E</code>, <code>E -&gt; A</code> gives <code>(BC)+ = {A, B, C, D, E}</code>.</li><li>Non-key closures: <code>B+ = {B, D}</code>, <code>C+ = {C}</code>, <code>D+ = {D}</code>.</li></ul><p><strong>Step 2: Non-trivial implied FDs in <code>F+</code>:</strong> Every subset whose closure covers <code>ABCDE</code> (<code>A, E, BC, CD</code> and all their supersets) implies every subset of <code>ABCDE</code>; additionally <code>B -&gt; D</code>, <code>B -&gt; BD</code>, plus all trivial and augmented rules.</p><p><strong>Step 3: Candidate Keys of <code>R</code>:</strong> <strong><code>A</code>, <code>E</code>, <code>BC</code>, <code>CD</code></strong> (none of their proper subsets has closure <code>ABCDE</code>).</p>"
  },
  {
    unit: 3, part: "B", num: 6,
    q: "Explain in detail the concepts of dependency preservation and lossless decomposition with examples and counter examples.",
    tldr: "Lossless avoids spurious tuples on join; dependency preservation enforces FDs locally without joins.",
    body: "<p><strong>1. Lossless Decomposition:</strong> <code>R1 JOIN R2 = R</code>. Condition: <code>(R1 &cap; R2) -&gt; R1</code> or <code>R2</code>.</p><ul><li><em>Example (Lossless):</em> <code>R(A,B,C)</code> with <code>A -&gt; B</code> split into <code>R1(A,B)</code> and <code>R2(A,C)</code> (common key <code>A</code> determines <code>R1</code>).</li><li><em>Counter-example (Lossy):</em> Splitting <code>R(A,B,C)</code> with rows <code>(1,2,1), (4,2,5)</code> on non-key <code>B</code> into <code>R1(A,B), R2(B,C)</code> creates spurious tuples <code>(1,2,5)</code> and <code>(4,2,1)</code> on join.</li></ul><p><strong>2. Dependency Preservation:</strong> Every FD in <code>F</code> can be inferred from FDs projected onto each sub-relation <code>Ri</code>.</p><ul><li><em>Example (Preserved):</em> <code>R(A,B,C)</code> with <code>A -&gt; B, B -&gt; C</code> split into <code>R1(A,B)</code> and <code>R2(B,C)</code> preserves both FDs locally.</li><li><em>Counter-example (Not Preserved):</em> <code>R(A,B,C)</code> with <code>AB -&gt; C, C -&gt; B</code> decomposed into BCNF <code>R1(C,B)</code> and <code>R2(A,C)</code> loses <code>AB -&gt; C</code> because <code>A</code> and <code>B</code> sit in different tables.</li></ul>"
  },
  {
    unit: 3, part: "B", num: 7,
    q: "Explain the Fourth Normal form, with a suitable example. Discuss the context in which 4NF is significant.",
    tldr: "4NF eliminates redundancy from independent multi-valued attributes (MVDs) where BCNF still fails.",
    body: "<p><strong>4NF Definition:</strong> A relation is in 4NF if it is in BCNF and for every non-trivial MVD <code>X -&gt;&gt; Y</code>, <code>X</code> is a superkey.</p><p><strong>Example:</strong> Suppose <code>EmpInfo(EmpID, Skill, Language)</code> is all-key (already BCNF!), where an employee has independent sets of skills and languages. Storing <code>(E1, Java, English), (E1, Java, Hindi), (E1, Python, English), (E1, Python, Hindi)</code> forces a Cartesian product of rows (2 x 2 = 4 rows). Because <code>EmpID -&gt;&gt; Skill</code> and <code>EmpID -&gt;&gt; Language</code> hold and <code>EmpID</code> is not a superkey, this violates 4NF. Decompose into <code>EmpSkills(EmpID, Skill)</code> and <code>EmpLangs(EmpID, Language)</code>.</p><p><strong>Significance:</strong> 4NF is crucial whenever one entity has two or more independent multi-valued attributes stored in the same table.</p>"
  },
  {
    unit: 3, part: "B", num: 8,
    q: "Discuss about the 5NF. Provide a suitable example. Discuss if a database needs to conform to this normal form.",
    tldr: "5NF decomposes cyclic 3-way relationships governed by join dependencies into 3 binary tables.",
    body: "<p><strong>5NF (PJNF):</strong> A relation in 4NF is in 5NF if every non-trivial Join Dependency <code>*(R1, R2, ..., Rn)</code> is implied by the candidate keys.</p><p><strong>Example:</strong> <code>Supply(Agent, Company, Product)</code> where a rule says: if an Agent represents a Company, the Company makes a Product, and the Agent sells that Product, then the Agent sells that Product for that Company (a 3-way join dependency). Decomposing into 3 tables <code>(Agent, Company)</code>, <code>(Company, Product)</code>, and <code>(Agent, Product)</code> removes repetition while remaining lossless.</p><p><strong>Is 5NF always needed?</strong> Usually <strong>no</strong> in everyday OLTP databases. Reaching BCNF/4NF eliminates nearly all practical anomalies; decomposing further to 5NF often increases join overhead without meaningful benefit unless strict cyclic join dependencies exist.</p>"
  },
  {
    unit: 3, part: "B", num: 9,
    q: "Use Armstrong's axioms to prove the soundness of decomposition rule and pseudo transitivity rule.",
    tldr: "Prove X->YZ => X->Y, X->Z via Reflexivity+Transitivity; prove X->Y, WY->Z => WX->Z via Augmentation+Transitivity.",
    body: "<p><strong>1. Proof of Decomposition Rule (Given <code>X -&gt; YZ</code>, prove <code>X -&gt; Y</code> and <code>X -&gt; Z</code>):</strong></p><ol><li>Given: <code>X -&gt; YZ</code>.</li><li>Since <code>Y &sube; YZ</code>, by <strong>Reflexivity</strong>: <code>YZ -&gt; Y</code>.</li><li>By <strong>Transitivity</strong> on (1) and (2): <code>X -&gt; Y</code>.</li><li>Similarly, <code>Z &sube; YZ</code> gives <code>YZ -&gt; Z</code>, and Transitivity gives <code>X -&gt; Z</code>.</li></ol><p><strong>2. Proof of Pseudo-transitivity (Given <code>X -&gt; Y</code> and <code>WY -&gt; Z</code>, prove <code>WX -&gt; Z</code>):</strong></p><ol><li>Given: <code>X -&gt; Y</code> and <code>WY -&gt; Z</code>.</li><li>Apply <strong>Augmentation</strong> with <code>W</code> to <code>X -&gt; Y</code>: <code>WX -&gt; WY</code>.</li><li>Apply <strong>Transitivity</strong> to <code>WX -&gt; WY</code> and <code>WY -&gt; Z</code>: <code>WX -&gt; Z</code>.</li></ol>"
  },
  {
    unit: 3, part: "B", num: 10,
    q: "In designing a relational database, why might we choose a non-BCNF design? Explain why 4NF is a normal form more desirable than BCNF.",
    tldr: "Choose 3NF over BCNF when BCNF sacrifices dependency preservation; choose 4NF over BCNF to eliminate MVD redundancy.",
    body: "<p><strong>Why choose a non-BCNF design (3NF):</strong> BCNF cannot always guarantee <strong>dependency preservation</strong>. For example, <code>R(A, B, C)</code> with <code>{AB -&gt; C, C -&gt; B}</code> violates BCNF because <code>C</code> is not a superkey. Splitting into <code>R1(C, B)</code> and <code>R2(A, C)</code> achieves BCNF but breaks <code>AB -&gt; C</code> (requiring expensive joins to enforce it). Staying in 3NF preserves all dependencies.</p><p><strong>Why 4NF is more desirable than BCNF:</strong> BCNF only eliminates redundancy from functional dependencies. A table in BCNF can still contain massive Cartesian-product redundancy from independent <strong>multi-valued dependencies (MVDs)</strong>. Every 4NF schema is automatically in BCNF, so 4NF removes both FD and MVD anomalies.</p>"
  },
  {
    unit: 3, part: "B", num: 11,
    q: "If the same above relation R=(A,B,C,D,E) with F={A->BC, CD->E, B->D, E->A} is decomposed into D = {ABC, CD, DE}, check whether decomposition is lossless or lossy.",
    tldr: "LOSSY decomposition (proven using the Chase / Tableau test: no row fills with all a's).",
    body: "<p>Apply the <strong>Chase (Tableau) test</strong> on <code>R(A, B, C, D, E)</code> with rows for <code>R1(ABC)</code>, <code>R2(CD)</code>, <code>R3(DE)</code>:</p><ul><li>Row 1 (ABC): <code>(a1, a2, a3, b14, b15)</code></li><li>Row 2 (CD): <code>(b21, b22, a3, a4, b25)</code></li><li>Row 3 (DE): <code>(b31, b32, b33, a4, a5)</code></li></ul><p>Check every FD in <code>F = {A-&gt;BC, CD-&gt;E, B-&gt;D, E-&gt;A}</code>: no two rows agree on <code>A</code>, <code>CD</code>, <code>B</code>, or <code>E</code>! Since no changes can be made and no row contains all <code>a</code> symbols, the decomposition is <strong>LOSSY</strong>.</p>"
  },
  {
    unit: 3, part: "B", num: 12,
    q: "A relation R(ABCDEG) with F = {AB->C, BC->A, AC->B, B->D, AC->E, E->G} is decomposed into D = {ABC, BD, ACEG}. Check whether lossless or lossy and dependency preserving or not.",
    tldr: "BOTH Lossless AND Dependency Preserving.",
    body: "<p><strong>1. Lossless Test:</strong></p><ul><li>Take <code>R1(ABC)</code> and <code>R2(BD)</code>: common attribute is <code>B</code>. Since <code>B -&gt; D</code> holds, <code>B -&gt; BD</code>, so joining <code>R1</code> and <code>R2</code> is lossless -> gives <code>(ABCD)</code>.</li><li>Now join <code>(ABCD)</code> with <code>R3(ACEG)</code>: common attributes are <code>{A, C}</code>. Since <code>AC -&gt; B</code>, <code>AC -&gt; D</code> (via <code>B-&gt;D</code>), <code>AC+ = ABCDEG</code>, so <code>AC</code> determines <code>ABCD</code> (and <code>ACEG</code>). Thus the full decomposition is <strong>LOSSLESS</strong>.</li></ul><p><strong>2. Dependency Preservation Test:</strong> Check where each FD in <code>F</code> sits:</p><ul><li><code>AB -&gt; C, BC -&gt; A, AC -&gt; B</code> are all inside <code>R1(ABC)</code>.</li><li><code>B -&gt; D</code> is inside <code>R2(BD)</code>.</li><li><code>AC -&gt; E, E -&gt; G</code> are both inside <code>R3(ACEG)</code>.</li></ul><p>Every FD is enforced locally in a single relation, so it is <strong>DEPENDENCY PRESERVING</strong>.</p>"
  },
  {
    unit: 3, part: "B", num: 13,
    q: "Consider R(ABCDEFGHIJ) with F = {AB->C, A->DE, B->F, F->GH, D->IJ}. Convert it into 2NF and 3NF.",
    tldr: "Candidate key: AB. 2NF creates 3 tables; 3NF splits transitive F->GH and D->IJ into 5 tables.",
    body: "<p><strong>Step 1 (Key):</strong> <code>AB+ = ABCDEFGHIJ</code>, so <strong><code>AB</code></strong> is the sole candidate key.</p><p><strong>Step 2 (2NF - remove partial dependencies on A and B):</strong></p><ul><li><code>A+ = {A, D, E, I, J}</code> -> <code>R1(A, D, E, I, J)</code></li><li><code>B+ = {B, F, G, H}</code> -> <code>R2(B, F, G, H)</code></li><li>Full key FD <code>AB -&gt; C</code> -> <code>R3(A, B, C)</code></li></ul><p><strong>Step 3 (3NF - remove transitive dependencies <code>D -&gt; IJ</code> and <code>F -&gt; GH</code>):</strong></p><ul><li><code>R1(A, B, C)</code> (key <code>AB</code>)</li><li><code>R2(A, D, E)</code> (key <code>A</code>)</li><li><code>R3(D, I, J)</code> (key <code>D</code>)</li><li><code>R4(B, F)</code> (key <code>B</code>)</li><li><code>R5(F, G, H)</code> (key <code>F</code>)</li></ul>"
  },
  {
    unit: 3, part: "B", num: 14,
    q: "Convert the relation in above question (R(ABCDEFGHIJ), F={AB->C, A->DE, B->F, F->GH, D->IJ}) into 3NF by using canonical cover.",
    tldr: "Fc = {AB->C, A->DE, B->F, F->GH, D->IJ}; each FD becomes a table (same 5 lossless, dep-preserving tables).",
    body: "<ol><li><strong>Find Canonical Cover <code>Fc</code>:</strong> Split RHS to singletons, check extraneous LHS in <code>AB -&gt; C</code> (neither <code>A+</code> nor <code>B+</code> has <code>C</code>, so neither is extraneous), verify no FD is redundant, and merge shared LHS: <code>Fc = {AB -&gt; C, A -&gt; DE, B -&gt; F, F -&gt; GH, D -&gt; IJ}</code>.</li><li><strong>3NF Synthesis:</strong> Create one relation per FD in <code>Fc</code>: <code>R1(A,B,C)</code>, <code>R2(A,D,E)</code>, <code>R3(B,F)</code>, <code>R4(F,G,H)</code>, <code>R5(D,I,J)</code>.</li><li><strong>Check Candidate Key:</strong> <code>R1(A,B,C)</code> already contains the candidate key <code>AB</code>, so no extra key table is needed. Done!</li></ol>"
  },
  {
    unit: 3, part: "B", num: 15,
    q: "Consider R(ABCDEFGHIJ) with F = {AB->C, A->DE, B->F, F->GH, D->IJ}. Find the candidate key and closure of the attributes.",
    tldr: "Candidate key is AB. Closures: A+=ADEIJ, B+=BFGH, D+=DIJ, F+=FGH, (AB)+=ABCDEFGHIJ.",
    body: "<p><strong>Attribute Closures:</strong></p><ul><li><code>A+ = {A, D, E, I, J}</code></li><li><code>B+ = {B, F, G, H}</code></li><li><code>C+ = {C}</code>, <code>E+ = {E}</code>, <code>G+ = {G}</code>, <code>H+ = {H}</code>, <code>I+ = {I}</code>, <code>J+ = {J}</code></li><li><code>D+ = {D, I, J}</code></li><li><code>F+ = {F, G, H}</code></li><li><code>(AB)+ = {A, B, C, D, E, F, G, H, I, J}</code> (all 10 attributes)</li></ul><p><strong>Candidate Key:</strong> Since neither <code>A</code> nor <code>B</code> appears on any RHS of <code>F</code>, both must belong to every key. Because <code>(AB)+ = R</code>, <strong><code>AB</code></strong> is the unique candidate key.</p>"
  },
  {
    unit: 3, part: "B", num: 16,
    q: "Explain the concept of Trigger with example.",
    tldr: "Event-Condition-Action (ECA) database program that fires automatically on DML events.",
    body: "<p>A <strong>Trigger</strong> is a stored procedural block automatically invoked by the DBMS before or after an <code>INSERT</code>, <code>UPDATE</code>, or <code>DELETE</code> on a table.</p><pre><code>CREATE TRIGGER CheckAgeBeforeInsert\nBEFORE INSERT ON Employees\nFOR EACH ROW\nBEGIN\n  IF NEW.Age &lt; 18 THEN\n    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Age must be 18+';\n  END IF;\nEND;</code></pre><p><strong>Components:</strong> Event (<code>BEFORE INSERT</code>), Condition (<code>Age &lt; 18</code>), Action (raise error). Uses: validation, auditing, derived column updates.</p>"
  },
  {
    unit: 3, part: "B", num: 17,
    q: "Explain the concept of Cursor with example.",
    tldr: "Row-by-row iterator over a SQL result set using DECLARE, OPEN, FETCH, and CLOSE.",
    body: "<p>A <strong>Cursor</strong> lets procedural SQL process query rows sequentially one at a time. Types: <strong>Implicit</strong> (auto-created for single DML queries) and <strong>Explicit</strong> (user-defined for multi-row <code>SELECT</code>).</p><pre><code>DECLARE c_emp CURSOR FOR SELECT EmpName, Salary FROM Employees;\nOPEN c_emp;\nFETCH c_emp INTO v_name, v_sal;\n-- loop until NOT FOUND\nCLOSE c_emp;</code></pre><p><strong>4 Lifecycle Steps:</strong> <code>DECLARE</code> (define query) -> <code>OPEN</code> (execute and populate active set) -> <code>FETCH</code> (read next row) -> <code>CLOSE</code> (free memory).</p>"
  },

  // ==================== UNIT IV - PART A (1 to 20) ====================
  {
    unit: 4, part: "A", num: 1,
    q: "What is atomicity?",
    tldr: "All-or-nothing rule: either every operation of a transaction executes, or none do.",
    body: "<p><strong>Atomicity</strong> (the 'A' in ACID) ensures a transaction is an indivisible unit of work. If any failure occurs mid-way, all partial changes are rolled back so the database looks untouched.</p>"
  },
  {
    unit: 4, part: "A", num: 2,
    q: "What is a schedule?",
    tldr: "A chronological execution sequence of operations from concurrent transactions.",
    body: "<p>A <strong>schedule</strong> is an ordered sequence listing the instructions (Read, Write, Commit, Abort) of multiple transactions executing in the system, preserving the relative order of operations inside each transaction.</p>"
  },
  {
    unit: 4, part: "A", num: 3,
    q: "What is a cascadeless schedule?",
    tldr: "Transactions may read only committed data, preventing cascading rollbacks.",
    body: "<p>A schedule is <strong>cascadeless</strong> if for every pair of transactions <code>Ti</code> and <code>Tj</code> where <code>Tj</code> reads a data item written by <code>Ti</code>, the commit operation of <code>Ti</code> appears before the read operation of <code>Tj</code>.</p>"
  },
  {
    unit: 4, part: "A", num: 4,
    q: "Briefly discuss the various locks available.",
    tldr: "Shared (S) for reading, Exclusive (X) for writing, plus Intention locks (IS, IX, SIX).",
    body: "<ul><li><strong>Shared Lock (S):</strong> Multiple transactions can hold S locks simultaneously for reading; blocks writes.</li><li><strong>Exclusive Lock (X):</strong> Only one transaction can hold X lock for both reading and writing; blocks all other S/X locks.</li><li><strong>Intention Locks (IS, IX, SIX):</strong> Used on parent nodes in multiple granularity hierarchies.</li></ul>"
  },
  {
    unit: 4, part: "A", num: 5,
    q: "Describe the term transaction.",
    tldr: "A logical unit of database work (one or more read/write operations) that maintains consistency.",
    body: "<p>A <strong>transaction</strong> is a single logical unit of execution consisting of one or more database accesses (queries/updates) that transforms the database from one consistent state to another.</p>"
  },
  {
    unit: 4, part: "A", num: 6,
    q: "What is a recoverable schedule?",
    tldr: "If Tj reads a value written by Ti, Ti must commit before Tj commits.",
    body: "<p>A schedule is <strong>recoverable</strong> if whenever <code>Tj</code> reads data written by <code>Ti</code>, <code>Ti</code> commits before <code>Tj</code> commits. This prevents an aborted <code>Ti</code> from leaving invalid committed data in <code>Tj</code>.</p>"
  },
  {
    unit: 4, part: "A", num: 7,
    q: "What is a deadlock?",
    tldr: "A circular wait where two or more transactions each wait for locks held by the other.",
    body: "<p>A <strong>deadlock</strong> occurs when a set of transactions <code>{T1, T2, ...}</code> are stuck waiting forever because each holds a lock that the next transaction in the cycle needs.</p>"
  },
  {
    unit: 4, part: "A", num: 8,
    q: "What is a locking protocol?",
    tldr: "A set of rules dictating when transactions may acquire and release locks to ensure serializability.",
    body: "<p>A <strong>locking protocol</strong> defines rules constraining how every transaction requests and releases locks on data items so that concurrent schedules stay serializable (e.g., 2PL, Tree protocol).</p>"
  },
  {
    unit: 4, part: "A", num: 9,
    q: "What is starvation in a locking protocol?",
    tldr: "A transaction waits indefinitely for a lock while other transactions repeatedly jump ahead.",
    body: "<p><strong>Starvation</strong> occurs when a transaction (e.g., waiting for an X lock) never gets served because a continuous stream of incoming S-lock requests keeps getting granted ahead of it. Solved using FIFO wait queues.</p>"
  },
  {
    unit: 4, part: "A", num: 10,
    q: "What is the role of a lock manager?",
    tldr: "System module that tracks active locks in a lock table and grants, queues, or releases lock requests.",
    body: "<p>The <strong>lock manager</strong> maintains an in-memory hash table (lock table) of granted and waiting locks, evaluates compatibility of incoming lock/unlock requests, and wakes waiting transactions when locks are released or transactions abort.</p>"
  },
  {
    unit: 4, part: "A", num: 11,
    q: "What is a database graph?",
    tldr: "A directed acyclic graph (or tree) imposing a partial ordering on data items for graph-based locking.",
    body: "<p>In graph-based locking protocols, a <strong>database graph</strong> <code>G = (V, E)</code> orders data items hierarchically (commonly a rooted tree) so transactions lock nodes along paths from parent to child, guaranteeing serializability and deadlock freedom.</p>"
  },
  {
    unit: 4, part: "A", num: 12,
    q: "What is a timestamp?",
    tldr: "A unique monotonically increasing identifier (system clock or counter) assigned to each transaction at start.",
    body: "<p>A <strong>timestamp <code>TS(Ti)</code></strong> is a unique value assigned when transaction <code>Ti</code> enters the system. Older transactions have smaller timestamps and dictate the serializability order.</p>"
  },
  {
    unit: 4, part: "A", num: 13,
    q: "What are the phases of a validation-based protocol?",
    tldr: "Three phases: (1) Read Phase, (2) Validation Phase, (3) Write Phase.",
    body: "<ol><li><strong>Read Phase:</strong> Read DB values and write changes only to local variables.</li><li><strong>Validation Phase:</strong> At commit time, test for conflicts with concurrent transactions.</li><li><strong>Write Phase:</strong> Flush local updates to DB if valid; otherwise abort and restart.</li></ol>"
  },
  {
    unit: 4, part: "A", num: 14,
    q: "What are the intention mode locks that we use?",
    tldr: "IS (Intention Shared), IX (Intention Exclusive), and SIX (Shared + Intention Exclusive).",
    body: "<ul><li><strong>IS:</strong> Explicit <code>S</code> locking will be done at lower tree levels.</li><li><strong>IX:</strong> Explicit <code>X</code> locking will be done at lower tree levels.</li><li><strong>SIX:</strong> Current subtree locked in <code>S</code> mode plus intention to place <code>X</code> locks on selected lower nodes.</li></ul>"
  },
  {
    unit: 4, part: "A", num: 15,
    q: "Describe the phantom phenomenon.",
    tldr: "A transaction re-runs a range query and sees newly inserted ('phantom') rows from another transaction.",
    body: "<p>The <strong>phantom phenomenon</strong> happens when <code>T1</code> scans rows matching a predicate (e.g. <code>WHERE dept='CS'</code>), and concurrently <code>T2</code> inserts a new <code>'CS'</code> row and commits. Locking only existing rows fails to stop the new phantom row; requires predicate/index-range locking.</p>"
  },
  {
    unit: 4, part: "A", num: 16,
    q: "What are the disadvantages of two-phase locking protocol?",
    tldr: "Deadlocks possible, cascading rollbacks in basic 2PL, and lower concurrency due to lock waiting.",
    body: "<ul><li>Does <strong>not</strong> prevent deadlocks.</li><li>Basic 2PL can still suffer from <strong>cascading rollbacks</strong> if locks are released early before commit.</li><li>Blocking on locks increases wait times and reduces throughput under heavy contention.</li></ul>"
  },
  {
    unit: 4, part: "A", num: 17,
    q: "What is conflict and view equivalence of a schedule?",
    tldr: "Conflict equivalence preserves relative order of conflicting ops; View equivalence preserves initial reads, reads-from, and final writes.",
    body: "<p><strong>Conflict Equivalence:</strong> Schedule <code>S1</code> can be transformed into <code>S2</code> by swapping adjacent non-conflicting operations. <strong>View Equivalence:</strong> <code>S1</code> and <code>S2</code> share identical initial reads, updated reads (reads-from pairs), and final writes for every data item.</p>"
  },
  {
    unit: 4, part: "A", num: 18,
    q: "What are the steps in graph based locking protocol?",
    tldr: "In Tree Protocol (X-locks only): 1st lock anywhere, next lock only if parent is locked, unlock anytime, never relock.",
    body: "<ol><li>Only Exclusive (<code>X</code>) locks are used.</li><li>The first lock by <code>Ti</code> may be on any data item.</li><li>Subsequently, item <code>Q</code> can be locked by <code>Ti</code> only if <code>Ti</code> currently holds the lock on <code>Q</code>'s parent.</li><li>Items may be unlocked at any time, but once unlocked cannot be re-locked by <code>Ti</code>.</li></ol>"
  },
  {
    unit: 4, part: "A", num: 19,
    q: "What is Thomas write rule?",
    tldr: "Allows ignoring an obsolete write instead of aborting the transaction in timestamp ordering.",
    body: "<p>Under <strong>Thomas Write Rule</strong>, if transaction <code>Ti</code> wants to <code>write(Q)</code> and <code>TS(Ti) &lt; W-timestamp(Q)</code> (a newer transaction already wrote a later value), and <code>TS(Ti) &gt;= R-timestamp(Q)</code>, the obsolete write by <code>Ti</code> is simply <strong>ignored</strong> instead of rolling back <code>Ti</code>, enabling view serializable schedules.</p>"
  },
  {
    unit: 4, part: "A", num: 20,
    q: "What is the use of precedence graph?",
    tldr: "Tests whether a schedule is conflict serializable (acyclic = yes; cycle = no).",
    body: "<p>A <strong>precedence (serialization) graph</strong> has transactions as vertices and directed edges <code>Ti -&gt; Tj</code> for conflicting operations in order. If the graph has <strong>no cycle</strong>, the schedule is conflict serializable and topological order gives the serial schedule.</p>"
  },

  // ==================== UNIT IV - PART B (1 to 15) ====================
  {
    unit: 4, part: "B", num: 1,
    q: "Explain the ACID properties of a transaction.",
    tldr: "Atomicity, Consistency, Isolation, Durability with banking transfer example.",
    body: "<p>Consider transferring Rs. 500 from Account A to Account B:</p><ul><li><strong>Atomicity:</strong> Both debit(A) and credit(B) succeed, or neither happens (managed by Recovery Manager).</li><li><strong>Consistency:</strong> Total sum <code>A + B</code> before and after the transaction remains identical (enforced by constraints and application logic).</li><li><strong>Isolation:</strong> Concurrent transactions do not see intermediate states (A debited, B not yet credited) (managed by Concurrency Control).</li><li><strong>Durability:</strong> Once committed, the Rs. 500 transfer persists even if power fails immediately (managed by WAL logs/recovery).</li></ul>"
  },
  {
    unit: 4, part: "B", num: 2,
    q: "Draw and explain the state transition diagram of a transaction.",
    tldr: "Active -> Partially Committed -> Committed -> Terminated, or Active/Partial -> Failed -> Aborted -> Terminated.",
    body: "<p><strong>Flow:</strong> <code>Active</code> --[last stmt]--&gt; <code>Partially Committed</code> --[disk store OK]--&gt; <code>Committed</code> --&gt; <code>Terminated</code>.<br>On failure from <code>Active</code> or <code>Partially Committed</code> --&gt; <code>Failed</code> --[rollback]--&gt; <code>Aborted</code> --&gt; <code>Terminated</code>.</p><ul><li><strong>Active:</strong> Executing SQL reads/writes.</li><li><strong>Partially Committed:</strong> Final statement executed; writes may still be in memory buffers.</li><li><strong>Failed:</strong> Error or crash prevents completion.</li><li><strong>Aborted:</strong> Rolled back to original pre-transaction state; may restart or kill.</li><li><strong>Committed:</strong> Updates permanently written.</li><li><strong>Terminated:</strong> Transaction leaves the system.</li></ul>"
  },
  {
    unit: 4, part: "B", num: 3,
    q: "Explain about serializability and recoverability.",
    tldr: "Serializability guarantees correct final outcome (Conflict & View); Recoverability ensures failed txns can be rolled back safely.",
    body: "<p><strong>Serializability</strong> ensures concurrent interleaved execution produces the same result as some serial execution. Tested via <strong>Conflict Serializability</strong> (acyclic precedence graph) and <strong>View Serializability</strong> (same initial reads, reads-from, final writes).</p><p><strong>Recoverability</strong> guarantees failures do not leave committed dirty data:</p><ul><li><strong>Recoverable:</strong> If <code>Tj</code> reads from <code>Ti</code>, <code>Ti</code> commits before <code>Tj</code>.</li><li><strong>Cascadeless:</strong> <code>Tj</code> reads only committed values from <code>Ti</code> (prevents cascading rollbacks).</li><li><strong>Strict:</strong> <code>Tj</code> neither reads nor writes an item written by <code>Ti</code> until <code>Ti</code> commits or aborts.</li></ul>"
  },
  {
    unit: 4, part: "B", num: 4,
    q: "Explain in detail the two-phase locking protocol.",
    tldr: "Every transaction acquires locks in Growing Phase and releases them in Shrinking Phase.",
    body: "<p>Under <strong>Two-Phase Locking (2PL)</strong>, each transaction runs in two distinct phases:</p><ol><li><strong>Growing Phase:</strong> Transaction may acquire locks (or upgrade <code>S</code> to <code>X</code>), but may <strong>not release</strong> any lock.</li><li><strong>Shrinking Phase:</strong> Transaction may release locks (or downgrade <code>X</code> to <code>S</code>), but may <strong>not acquire</strong> any new lock.</li></ol><p>The point where it acquires its final lock is called the <strong>lock point</strong>. 2PL guarantees <strong>conflict serializability</strong> ordered by lock points, though basic 2PL does not prevent deadlocks or cascading rollbacks.</p>"
  },
  {
    unit: 4, part: "B", num: 5,
    q: "Discuss the nature of timestamp-based protocols.",
    tldr: "Assigns TS(Ti) at start; tracks R-timestamp(Q) and W-timestamp(Q) on each data item to prevent out-of-order accesses.",
    body: "<p>Each transaction <code>Ti</code> receives timestamp <code>TS(Ti)</code> on entry. Each item <code>Q</code> stores <code>W-TS(Q)</code> (latest writer) and <code>R-TS(Q)</code> (latest reader):</p><ul><li><strong>On <code>read(Q)</code> by <code>Ti</code>:</strong> If <code>TS(Ti) &lt; W-TS(Q)</code>, abort &amp; restart <code>Ti</code> (value overwritten by younger txn). Else execute read and set <code>R-TS(Q) = max(R-TS(Q), TS(Ti))</code>.</li><li><strong>On <code>write(Q)</code> by <code>Ti</code>:</strong> If <code>TS(Ti) &lt; R-TS(Q)</code> or <code>TS(Ti) &lt; W-TS(Q)</code>, abort &amp; restart <code>Ti</code> (unless Thomas Write Rule ignores obsolete write). Else write and set <code>W-TS(Q) = TS(Ti)</code>.</li></ul><p><strong>Advantage:</strong> Deadlock-free. <strong>Disadvantage:</strong> Starvation possible if a long transaction keeps aborting.</p>"
  },
  {
    unit: 4, part: "B", num: 6,
    q: "Discuss about validation-based protocols.",
    tldr: "Optimistic concurrency control (OCC) checking three timestamp rules at Validation Phase.",
    body: "<p>Validation-based protocol (OCC) tracks three timestamps for <code>Ti</code>: <code>Start(Ti)</code>, <code>Validation(Ti)</code> (used as serial order), and <code>Finish(Ti)</code>. During Validation of <code>Tj</code>, for every earlier committed/validating <code>Ti</code> with <code>TS(Ti) &lt; TS(Tj)</code>, at least one condition must hold:</p><ol><li><code>Finish(Ti) &lt; Start(Tj)</code> (<code>Ti</code> finished before <code>Tj</code> even began), OR</li><li><code>Start(Tj) &lt; Finish(Ti) &lt; Validation(Tj)</code> and <code>WriteSet(Ti) &cap; ReadSet(Tj) = empty</code> (<code>Ti</code> didn't overwrite anything <code>Tj</code> read before <code>Ti</code> finished writing).</li></ol><p>Zero locks and deadlock-free; best for read-heavy workloads.</p>"
  },
  {
    unit: 4, part: "B", num: 7,
    q: "Describe conflict serializability with an example.",
    tldr: "Swap non-conflicting ops to reach a serial schedule, or check that the precedence graph has no cycles.",
    body: "<p>Two operations conflict iff they belong to different transactions, access the same item, and at least one is a write. A schedule is conflict serializable if its precedence graph is acyclic.</p><p><strong>Example:</strong> <code>S: R1(A), R2(A), W1(A), R2(B), W2(B)</code>. Conflict pair: <code>R2(A)</code> precedes <code>W1(A)</code> -> edge <code>T2 -&gt; T1</code>. No cycle exists, so <code>S</code> is conflict serializable and equivalent to serial order <code>T2, T1</code>.</p>"
  },
  {
    unit: 4, part: "B", num: 8,
    q: "What is view serializability and why is it necessary?",
    tldr: "Captures blind-write schedules that are genuinely equivalent to a serial run even when conflict graphs have cycles.",
    body: "<p>Two schedules are <strong>view equivalent</strong> if they have identical Initial Reads, Updated Reads (reads-from), and Final Writes on all items. A schedule is <strong>view serializable</strong> if it is view equivalent to some serial schedule.</p><p><strong>Why necessary?</strong> Conflict serializability is overly conservative: schedules with <em>blind writes</em> (writing without reading first, e.g., <code>S: R1(A), W2(A), Commit1, Commit2, W1(A), W3(A)</code>) can create a cycle in the precedence graph (<code>T1 -&gt; T2 -&gt; T1</code>) even though the final DB state and reads match serial order <code>T1 -&gt; T2 -&gt; T3</code>.</p>"
  },
  {
    unit: 4, part: "B", num: 9,
    q: "Differentiate a serial schedule and a serializable schedule.",
    tldr: "Serial runs transactions one-by-one (no concurrency); Serializable interleaves ops for speed while guaranteeing serial-equivalent results.",
    body: "<table><thead><tr><th>Feature</th><th>Serial Schedule</th><th>Serializable Schedule</th></tr></thead><tbody><tr><td><strong>Execution</strong></td><td>One transaction finishes completely before next starts</td><td>Operations of multiple transactions interleave</td></tr><tr><td><strong>Concurrency</strong></td><td>None (low throughput, poor CPU/I/O overlap)</td><td>High concurrency and throughput</td></tr><tr><td><strong>Consistency</strong></td><td>Always consistent by definition</td><td>Consistent because outcome matches a serial schedule</td></tr></tbody></table>"
  },
  {
    unit: 4, part: "B", num: 10,
    q: "Explain in detail about deadlock prevention techniques.",
    tldr: "Prevent circular waits via Conservative 2PL, Wait-Die (non-preemptive), Wound-Wait (preemptive), or Lock Timeouts.",
    body: "<ul><li><strong>Conservative 2PL:</strong> Acquire all needed locks before execution begins; if any is busy, lock none.</li><li><strong>Wait-Die (Non-preemptive):</strong> Uses timestamps <code>TS(Ti)</code>. Older waits for younger; younger requesting a lock held by older <em>dies</em> (aborts and restarts with original timestamp).</li><li><strong>Wound-Wait (Preemptive):</strong> Older requesting a lock held by younger <em>wounds</em> (aborts) the younger transaction; younger waits for older.</li><li><strong>Timeout:</strong> Abort any transaction waiting longer than a threshold duration.</li></ul>"
  },
  {
    unit: 4, part: "B", num: 11,
    q: "How to implement deadlock detection and subsequent recovery.",
    tldr: "Build Wait-For Graph (cycle = deadlock), then pick a victim and roll back (total or partial).",
    body: "<p><strong>1. Detection (Wait-For Graph):</strong> Nodes are active transactions; directed edge <code>Ti -&gt; Tj</code> means <code>Ti</code> is waiting for a lock held by <code>Tj</code>. Periodically run cycle detection; a cycle confirms deadlock.</p><p><strong>2. Recovery:</strong></p><ul><li><strong>Victim Selection:</strong> Choose transaction to roll back minimizing cost (least progress, fewest locks held, fewest restarts).</li><li><strong>Rollback:</strong> Either <em>total rollback</em> (abort and restart victim) or <em>partial rollback</em> (back to a savepoint breaking the cycle).</li><li><strong>Starvation Prevention:</strong> Include rollback count in victim cost so the same transaction isn't picked repeatedly.</li></ul>"
  },
  {
    unit: 4, part: "B", num: 12,
    q: "Add lock/unlock instructions to T1 (read A, read B, if A=0 B=B+1, write B) and T2 (read B, read A, if B=0 A=A+1, write A) under 2PL. Can this result in a deadlock?",
    tldr: "Yes! T1 holds lock-S(A) waiting for lock-X(B); T2 holds lock-S(B) waiting for lock-X(A).",
    body: "<p><strong>2PL Transactions:</strong></p><pre><code>T1: lock-S(A); read(A); lock-X(B); read(B); if (A=0) B:=B+1; write(B); unlock(A); unlock(B);\nT2: lock-S(B); read(B); lock-X(A); read(A); if (B=0) A:=A+1; write(A); unlock(B); unlock(A);</code></pre><p><strong>Deadlock Execution Trace:</strong></p><ol><li><code>T1</code> acquires <code>lock-S(A)</code> and runs <code>read(A)</code>.</li><li><code>T2</code> acquires <code>lock-S(B)</code> and runs <code>read(B)</code>.</li><li><code>T1</code> requests <code>lock-X(B)</code> -> <strong>waits</strong> (<code>T2</code> holds <code>lock-S(B)</code>).</li><li><code>T2</code> requests <code>lock-X(A)</code> -> <strong>waits</strong> (<code>T1</code> holds <code>lock-S(A)</code>).</li></ol><p><strong>Result: YES, deadlock occurs</strong> (cycle <code>T1 -&gt; T2 -&gt; T1</code>).</p>"
  },
  {
    unit: 4, part: "B", num: 13,
    q: "Check whether schedules s1, s2, s3 are conflict equivalent or not: r2(a),w2(a),r3(c),w2(b),w3(a),w3(c),r1(a),r1(b),w1(b),w1(b).",
    tldr: "Precedence graph edges for the printed schedule are T2 -> T3 -> T1 (acyclic, conflict equivalent to T2 -> T3 -> T1).",
    body: "<p><em>Note: The question text mentions s1, s2, s3 while printing one schedule string <code>S</code>. Here is the exact analysis for the printed schedule (and rule to compare any others):</em></p><ol><li><strong>Find conflicting pairs in <code>S</code>:</strong><ul><li>On <code>a</code>: <code>r2(a)/w2(a)</code> before <code>w3(a)</code> -> <code>T2 -&gt; T3</code>; <code>w2(a)</code> and <code>w3(a)</code> before <code>r1(a)</code> -> <code>T2 -&gt; T1</code>, <code>T3 -&gt; T1</code>.</li><li>On <code>b</code>: <code>w2(b)</code> before <code>r1(b)/w1(b)</code> -> <code>T2 -&gt; T1</code>.</li><li>On <code>c</code>: only <code>T3</code> accesses <code>c</code>.</li></ul></li><li><strong>Precedence Graph:</strong> Edges <code>T2 -&gt; T3</code>, <code>T3 -&gt; T1</code>, <code>T2 -&gt; T1</code>. <strong>No cycles!</strong></li><li><strong>Conclusion:</strong> The printed schedule is conflict serializable and conflict equivalent to the serial schedule <strong><code>T2 -&gt; T3 -&gt; T1</code></strong>. Two schedules <code>s1, s2</code> are conflict equivalent iff they share the exact same relative order of all conflicting pairs.</li></ol>"
  },
  {
    unit: 4, part: "B", num: 14,
    q: "Explain two phase locking, conservative 2PL, rigorous 2PL, and strict 2PL with an example for each.",
    tldr: "Basic (growing/shrinking), Conservative (pre-lock all), Strict (hold X until commit), Rigorous (hold all S & X until commit).",
    body: "<ul><li><strong>Basic 2PL:</strong> Acquire all locks before releasing any. Example: <code>lock-X(A), read(A), write(A), unlock(A)</code> (can unlock <code>A</code> early before commit if no new locks follow).</li><li><strong>Conservative (Static) 2PL:</strong> Must acquire all locks at start before executing (deadlock-free). Example: acquire both <code>lock-S(A)</code> and <code>lock-X(B)</code> at line 1 before <code>read(A)</code>.</li><li><strong>Strict 2PL:</strong> Basic 2PL + holds all <strong>Exclusive (X)</strong> locks until commit/abort (cascadeless). Example: <code>lock-S(A), read(A), unlock(A), lock-X(B), write(B), COMMIT, unlock(B)</code>.</li><li><strong>Rigorous 2PL:</strong> Basic 2PL + holds <strong>ALL locks (both S and X)</strong> until commit/abort (transactions serialize in commit order). Example: unlock both <code>A</code> and <code>B</code> only after <code>COMMIT</code>.</li></ul>"
  },
  {
    unit: 4, part: "B", num: 15,
    q: "Explain the multiple granularity with an example.",
    tldr: "Lock hierarchy (DB -> Table -> Page -> Tuple) using intention locks (IS, IX, SIX) on ancestors.",
    body: "<p><strong>Multiple Granularity</strong> lets transactions lock at coarse (entire table) or fine (single row) levels using a tree: <code>Database -&gt; Area/Table -&gt; Page -&gt; Tuple</code>.</p><p><strong>Rule:</strong> To lock node <code>N</code> in <code>S</code> (or <code>X</code>), first lock all ancestors of <code>N</code> in <code>IS</code> (or <code>IX</code>) starting from the root.</p><p><strong>Example:</strong> To read row <code>r5</code> in table <code>Students</code>, acquire <code>IS(DB) -&gt; IS(Students) -&gt; IS(Page) -&gt; S(r5)</code>. Meanwhile, another transaction updating row <code>r9</code> in <code>Students</code> acquires <code>IX(DB) -&gt; IX(Students) -&gt; IX(Page2) -&gt; X(r9)</code> without blocking <code>r5</code>, because <code>IS</code> and <code>IX</code> are compatible.</p>"
  },

  // ==================== UNIT V - PART A (1 to 18) ====================
  {
    unit: 5, part: "A", num: 1,
    q: "Differentiate a logical and system error.",
    tldr: "Logical error = bad input/code inside transaction; System error = OS/DBMS deadlock or hardware fault.",
    body: "<ul><li><strong>Logical Error:</strong> Transaction cannot complete due to internal logic or data issues (e.g., bad input, division by zero, insufficient balance, record not found).</li><li><strong>System Error:</strong> System enters an undesirable state (e.g., deadlock or OS crash) forcing the DBMS to terminate the transaction even though its logic is valid.</li></ul>"
  },
  {
    unit: 5, part: "A", num: 2,
    q: "What is stable storage?",
    tldr: "Ideal storage whose data survives all crashes (approximated via RAID/mirrored disks/offsite replication).",
    body: "<p><strong>Stable storage</strong> is an abstraction of storage whose contents are never lost across power, disk, or system crashes. Implemented in practice by mirroring data across multiple independent non-volatile disks.</p>"
  },
  {
    unit: 5, part: "A", num: 3,
    q: "When is a rollback operation performed?",
    tldr: "When a transaction aborts (user ROLLBACK, constraint/logical error, deadlock victim, or crash before commit).",
    body: "<p>A <strong>rollback</strong> is performed whenever a transaction fails or is aborted before committing, restoring every modified data item back to its original pre-transaction value using log Before-Images.</p>"
  },
  {
    unit: 5, part: "A", num: 4,
    q: "What is a fuzzy checkpoint?",
    tldr: "Non-blocking checkpoint that lets transactions keep running while dirty buffers flush asynchronously.",
    body: "<p>Unlike a strict checkpoint that freezes new transactions while flushing buffers to disk, a <strong>fuzzy checkpoint</strong> logs <code>&lt;checkpoint L&gt;</code> (active txn list) and flushes dirty pages in the background without pausing live traffic.</p>"
  },
  {
    unit: 5, part: "A", num: 5,
    q: "Differentiate redo and undo operations.",
    tldr: "Redo reapplies NEW values for committed txns; Undo restores OLD values for uncommitted txns.",
    body: "<ul><li><strong>Redo(Ti):</strong> Sets every item written by committed transaction <code>Ti</code> to its <code>NEW</code> value (After-Image) in forward log order.</li><li><strong>Undo(Ti):</strong> Restores every item modified by uncommitted/aborted transaction <code>Ti</code> to its <code>OLD</code> value (Before-Image) in reverse log order.</li></ul>"
  },
  {
    unit: 5, part: "A", num: 6,
    q: "What is a log?",
    tldr: "An append-only sequence of records stored on stable storage tracking all DB updates.",
    body: "<p>A <strong>log</strong> (transaction log) is a sequential file on stable storage recording every transaction start, data modification, commit, and abort so the database can recover from crashes.</p>"
  },
  {
    unit: 5, part: "A", num: 7,
    q: "Give the structure of a log.",
    tldr: "<Ti, start>, <Ti, X, OldVal, NewVal>, <Ti, commit>, <Ti, abort>.",
    body: "<p>Standard log record formats:</p><ul><li><code>&lt;Ti, start&gt;</code>: Transaction <code>Ti</code> began.</li><li><code>&lt;Ti, X, V1, V2&gt;</code>: <code>Ti</code> updated item <code>X</code> from old value <code>V1</code> to new value <code>V2</code>.</li><li><code>&lt;Ti, commit&gt;</code> / <code>&lt;Ti, abort&gt;</code>: Outcome of <code>Ti</code>.</li></ul>"
  },
  {
    unit: 5, part: "A", num: 8,
    q: "What is a cascading rollback?",
    tldr: "Aborting one transaction forces dependent transactions that read its uncommitted writes to abort too.",
    body: "<p>A <strong>cascading rollback</strong> occurs when <code>T1</code> fails and rolls back, forcing <code>T2</code> (which read uncommitted data from <code>T1</code>) and <code>T3</code> (which read from <code>T2</code>) to also roll back.</p>"
  },
  {
    unit: 5, part: "A", num: 9,
    q: "What is the difference between deferred and immediate database modification?",
    tldr: "Deferred writes to DB only after commit (Redo only); Immediate writes during execution (Undo + Redo).",
    body: "<ul><li><strong>Deferred Modification:</strong> Delays all actual DB writes until <code>Ti</code> commits; logs only NEW values; recovery needs <strong>Redo only</strong>.</li><li><strong>Immediate Modification:</strong> Allows DB writes while <code>Ti</code> is still active (after WAL log write); logs both OLD and NEW values; recovery uses <strong>both Undo and Redo</strong>.</li></ul>"
  },
  {
    unit: 5, part: "A", num: 10,
    q: "What is a recovery system?",
    tldr: "DBMS component that restores the database to a consistent state after software, crash, or media failures.",
    body: "<p>The <strong>recovery manager/system</strong> preserves Atomicity and Durability by logging updates or keeping shadow pages, ensuring committed changes persist and uncommitted changes are erased after failure.</p>"
  },
  {
    unit: 5, part: "A", num: 11,
    q: "Write the difference among commit, rollback and checkpoint?",
    tldr: "Commit saves one txn permanently; Rollback undoes one failed txn; Checkpoint syncs buffers and log for fast recovery.",
    body: "<ul><li><strong>Commit:</strong> Marks a transaction complete and makes its updates permanent.</li><li><strong>Rollback:</strong> Reverses changes of an unsuccessful/aborted transaction.</li><li><strong>Checkpoint:</strong> Periodic system-wide sync flushing dirty buffers to disk and marking a recovery start point in the log.</li></ul>"
  },
  {
    unit: 5, part: "A", num: 12,
    q: "What is accomplished by shadow paging technique?",
    tldr: "Provides atomic commit and instant crash recovery without needing redo/undo logs.",
    body: "<p><strong>Shadow paging</strong> keeps two page tables (Current and Shadow). Modifications go to copied pages while Shadow keeps pointing to clean pages, letting a crash revert instantly by dropping the Current page table.</p>"
  },
  {
    unit: 5, part: "A", num: 13,
    q: "What is Query Optimization?",
    tldr: "Selecting the cheapest execution plan (lowest I/O and CPU cost) for a SQL query.",
    body: "<p><strong>Query optimization</strong> is the query processor phase that transforms a parsed SQL query into equivalent relational algebra plans and chooses the plan with minimum estimated execution cost.</p>"
  },
  {
    unit: 5, part: "A", num: 14,
    q: "What is an indexing and hashing?",
    tldr: "Auxiliary access methods to locate records fast without scanning the entire table.",
    body: "<ul><li><strong>Indexing:</strong> Auxiliary key-pointer structure (often B+ tree or sorted index file) speeding up both exact and range lookups.</li><li><strong>Hashing:</strong> Computes record/bucket disk address directly from search key via a hash function for O(1) equality search.</li></ul>"
  },
  {
    unit: 5, part: "A", num: 15,
    q: "What is the main difference between tree based and hash based indexes.",
    tldr: "Tree indexes keep keys sorted (great for range queries); Hash indexes scatter keys (great only for equality =).",
    body: "<p><strong>Tree-based indexes (B+ Tree)</strong> maintain keys in sorted order, supporting equality and range queries efficiently in <code>O(log N)</code> I/Os. <strong>Hash-based indexes</strong> map keys via hash functions without ordering, giving <code>O(1)</code> equality search but failing on range queries.</p>"
  },
  {
    unit: 5, part: "A", num: 16,
    q: "Why tree-structure indexes are good for searches, especially range selections.",
    tldr: "Internal nodes route down to the start key in O(log N) hops, and linked leaf pages scan the range sequentially.",
    body: "<p>In a <strong>B+ tree</strong>, internal nodes act like a binary search directory to reach the lower bound (e.g., <code>salary &gt;= 50000</code>) in a few disk reads, and doubly-linked leaf pages then allow scanning all matching keys sequentially until the upper bound.</p>"
  },
  {
    unit: 5, part: "A", num: 17,
    q: "How is data organized in a hash based index?",
    tldr: "Grouped into buckets addressed by h(k), with overflow pages if a bucket fills.",
    body: "<p>Records or data entries are grouped into <strong>buckets</strong> (each consisting of a primary page plus optional overflow pages). A hash function <code>h(k)</code> maps search key <code>k</code> directly to its bucket number.</p>"
  },
  {
    unit: 5, part: "A", num: 18,
    q: "What is the main difference between ISAM and B+Tree indexes",
    tldr: "ISAM is static (uses overflow chains that degrade); B+ Tree is dynamic and self-balancing via splits/merges.",
    body: "<p><strong>ISAM</strong> builds a static index tree once; new inserts into full leaf pages spill into unsorted <strong>overflow chains</strong>, degrading performance over time. <strong>B+ Tree</strong> is dynamic: leaf pages split and merge automatically so tree height stays balanced with zero overflow chains.</p>"
  },

  // ==================== UNIT V - PART B (1 to 18) ====================
  {
    unit: 5, part: "B", num: 1,
    q: "Explain deletion and insertion operations in linear hashing with examples.",
    tldr: "Grows linearly 1 bucket at a time using round pointer Next and family h_i(k) = k mod (2^i * N); no directory needed.",
    body: "<p><strong>Linear Hashing</strong> uses a family of hash functions <code>h_i(k) = k mod (2^i * N)</code>, a round number <code>level</code>, and a split pointer <code>Next</code> (initially 0):</p><ul><li><strong>Search:</strong> Compute <code>b = h_level(k)</code>. If <code>b &lt; Next</code>, bucket <code>b</code> was already split in this round, so re-hash using <code>h_(level+1)(k)</code>.</li><li><strong>Insertion Example (<code>N=4</code> buckets, capacity 2):</strong> Insert keys into target bucket. Whenever any bucket overflows (exceeds capacity or load factor), add an overflow page AND split the bucket currently pointed to by <code>Next</code> (even if it wasn't the overflowing bucket!) using <code>h_(level+1)</code>, then increment <code>Next</code>. When <code>Next == 2^level * N</code>, increment <code>level</code> and reset <code>Next = 0</code>.</li><li><strong>Deletion:</strong> Remove entry from bucket/overflow page. If load drops below threshold, merge the last split bucket back with its partner and decrement <code>Next</code> (wrapping to previous level if <code>Next &lt; 0</code>).</li></ul>"
  },
  {
    unit: 5, part: "B", num: 2,
    q: "Give a Comparison of various File Organizations.",
    tldr: "Compare Heap, Sorted/Sequential, Hashed, ISAM, and B+ Tree across scan, equality, range, and insert/delete.",
    body: "<table><thead><tr><th>Organization</th><th>Equality Search</th><th>Range Search</th><th>Insert / Delete</th></tr></thead><tbody><tr><td><strong>Heap (Unordered)</strong></td><td>Slow (full scan)</td><td>Slow (full scan)</td><td>Fast insert (append at end)</td></tr><tr><td><strong>Sorted / Sequential</strong></td><td>Fast (binary search)</td><td>Very fast (contiguous)</td><td>Slow (must shift records)</td></tr><tr><td><strong>Hashed</strong></td><td>Fastest O(1)</td><td>Poor (no order)</td><td>Fast O(1)</td></tr><tr><td><strong>ISAM</strong></td><td>Fast (~2-3 I/Os)</td><td>Good (degrades with overflow)</td><td>Uses overflow chains</td></tr><tr><td><strong>B+ Tree</strong></td><td>Fast O(log N)</td><td>Excellent (linked leaves)</td><td>Balanced O(log N) splits/merges</td></tr></tbody></table>"
  },
  {
    unit: 5, part: "B", num: 3,
    q: "Construct a B+ tree for {2,3,5,7,11,17,19,23,29,31} in ascending order when number of pointers per node is: a) Four b) Eight.",
    tldr: "(a) 4 pointers => Root [11], Level 1 [5] | [19,29], 5 leaves. (b) 8 pointers => Root [11], 2 leaves.",
    body: "<p>Using standard Silberschatz/Korth convention (<code>n</code> pointers = max <code>n - 1</code> keys per node; leaf splits keep <code>ceil(n/2)</code> keys on left and copy first right key up):</p><p><strong>Part (a): n = 4 pointers (max 3 keys/node, split at 2 left / 2 right):</strong></p><ol><li>Insert <code>2, 3, 5</code> -> leaf <code>[2, 3, 5]</code>.</li><li>Insert <code>7</code> -> overflows <code>[2, 3, 5, 7]</code> -> split <code>[2, 3]</code> and <code>[5, 7]</code>, copy <code>5</code> to root <code>[5]</code>.</li><li>Insert <code>11, 17</code> -> right leaf overflows <code>[5, 7, 11, 17]</code> -> split <code>[5, 7]</code> and <code>[11, 17]</code>, copy <code>11</code> -> root <code>[5, 11]</code>.</li><li>Insert <code>19, 23</code> -> overflows <code>[11, 17, 19, 23]</code> -> split <code>[11, 17]</code> and <code>[19, 23]</code>, copy <code>19</code> -> root <code>[5, 11, 19]</code>.</li><li>Insert <code>29, 31</code> -> overflows <code>[19, 23, 29, 31]</code> -> split <code>[19, 23]</code> and <code>[29, 31]</code>, push <code>29</code> up -> root overflows with 4 keys <code>[5, 11, 19, 29]</code> -> internal split pushes middle key <code>11</code> up to new root <code>[11]</code>!</li></ol><pre><code>Final Tree (n = 4):\nLevel 0 (Root):     [11]\nLevel 1 (Internal): [5]        [19, 29]\nLevel 2 (Leaves):   [2,3] [5,7] [11,17] [19,23] [29,31]</code></pre><p><strong>Part (b): n = 8 pointers (max 7 keys/node, split at 4 left / 4 right):</strong></p><ol><li>Insert <code>2, 3, 5, 7, 11, 17, 19</code> -> fits in single root leaf <code>[2, 3, 5, 7, 11, 17, 19]</code>.</li><li>Insert <code>23</code> -> overflows (8 keys) -> splits into <code>[2, 3, 5, 7]</code> and <code>[11, 17, 19, 23]</code>, copy <code>11</code> up to root <code>[11]</code>.</li><li>Insert <code>29, 31</code> -> fit in right leaf.</li></ol><pre><code>Final Tree (n = 8):\nLevel 0 (Root):   [11]\nLevel 1 (Leaves): [2, 3, 5, 7]   [11, 17, 19, 23, 29, 31]</code></pre>"
  },
  {
    unit: 5, part: "B", num: 4,
    q: "Write about recovery and atomicity.",
    tldr: "Recovery ensures failures never leave partial transactions (Atomicity) or lose committed writes (Durability).",
    body: "<p>When a crash hits mid-execution, memory buffers are lost and partial writes may already be on disk. To enforce <strong>Atomicity</strong> (all-or-nothing) and <strong>Durability</strong>, the recovery manager uses two main mechanisms:</p><ul><li><strong>Log-Based Recovery (WAL):</strong> Writes every Old/New change to stable log before modifying disk data; uses Undo for incomplete txns and Redo for committed txns.</li><li><strong>Shadow Paging:</strong> Keeps an unmodified Shadow Page Table on disk until commit, instantly discarding uncommitted changes on crash.</li></ul>"
  },
  {
    unit: 5, part: "B", num: 5,
    q: "Describe the insertion and deletion operation in B+ trees.",
    tldr: "Insert splits overflowing nodes upward; Delete borrows from sibling or merges nodes downward.",
    body: "<p><strong>Insertion:</strong> Find target leaf <code>L</code>. If <code>L</code> has space, insert sorted. If <code>L</code> is full, split into <code>L</code> and <code>L2</code>, distribute entries evenly, and <strong>copy</strong> the smallest key of <code>L2</code> into parent (note: internal splits <strong>push</strong> the middle key up without keeping a copy).</p><p><strong>Deletion:</strong> Remove entry from leaf <code>L</code>. If <code>L</code> stays at least half-full, done. If <code>L</code> underflows: (1) try <strong>redistributing/borrowing</strong> an entry from an adjacent sibling (and update parent separator), else (2) <strong>merge</strong> <code>L</code> with a sibling and remove the separator key from the parent (propagating upward if parent underflows).</p>"
  },
  {
    unit: 5, part: "B", num: 6,
    q: "Explain deletion and insertion operations in ISAM with examples.",
    tldr: "Static index levels; inserts spill into sorted/chained overflow pages; deletes simply remove or mark tombstone.",
    body: "<p><strong>ISAM Structure:</strong> Static multi-level index built over sorted primary data pages, plus chained overflow pages.</p><ul><li><strong>Insertion:</strong> Traverse static index to locate target leaf page. If space exists, insert in sorted order. If full (e.g., inserting key <code>25</code> into full leaf <code>[20, 22, 27]</code>), allocate/append to an <strong>overflow page</strong> linked from that primary page.</li><li><strong>Deletion:</strong> Locate entry in primary or overflow page and remove it (or mark deleted). If an overflow page becomes completely empty, free it and unlink it from the chain. Primary leaf pages are never merged dynamically.</li></ul>"
  },
  {
    unit: 5, part: "B", num: 7,
    q: "Explain how insert and delete operations are handled in static hash index?",
    tldr: "Bucket fixed by h(k); overflow pages handle full buckets; delete frees empty overflow pages.",
    body: "<p>In <strong>Static Hashing</strong>, the total number of primary buckets <code>M</code> is fixed:</p><ul><li><strong>Insertion:</strong> Compute bucket <code>b = h(k) mod M</code>. If primary page <code>b</code> has room, store entry there; otherwise, allocate/chain an overflow page to bucket <code>b</code> and insert there.</li><li><strong>Deletion:</strong> Compute <code>b = h(k) mod M</code>, search primary page and its overflow chain, and remove the matching entry. If that leaves an overflow page empty, deallocate it from the bucket chain.</li></ul>"
  },
  {
    unit: 5, part: "B", num: 8,
    q: "How does Extendable Hashing use a directory of buckets? How does it handle the insert and delete operation?",
    tldr: "Uses 2^d directory pointers on last d bits; splits bucket on overflow and doubles directory only when local depth d' == global depth d.",
    body: "<p><strong>Directory Structure:</strong> Maintains a directory of <code>2^d</code> bucket pointers indexed by the leading/trailing <code>d</code> (<strong>global depth</strong>) bits of <code>h(k)</code>. Multiple directory slots can point to the same bucket if its <strong>local depth</strong> <code>d' &lt; d</code>.</p><ul><li><strong>Insertion:</strong> Follow directory slot for <code>h(k)</code>. If bucket has space, insert. If full:<ul><li>If <code>d' &lt; d</code>: split the bucket into two (<code>d' + 1</code>), re-distribute entries, update directory pointers (no directory doubling!).</li><li>If <code>d' == d</code>: <strong>double the directory</strong> (<code>d = d + 1</code>), split the full bucket, and update pointers.</li></ul></li><li><strong>Deletion:</strong> Remove entry; if bucket becomes empty (or underfilled), merge with its split-image sibling and decrement <code>d'</code>. If all buckets now have <code>d' &lt; d</code>, <strong>halve the directory</strong>.</li></ul>"
  },
  {
    unit: 5, part: "B", num: 9,
    q: "Compare heap file organization with hash file organization.",
    tldr: "Heap appends anywhere (O(N) search, fast insert); Hash maps key via h(k) (O(1) equality search).",
    body: "<table><thead><tr><th>Aspect</th><th>Heap File Organization</th><th>Hash File Organization</th></tr></thead><tbody><tr><td><strong>Placement</strong></td><td>Unordered; placed wherever space exists</td><td>Placed in bucket determined by <code>h(key)</code></td></tr><tr><td><strong>Equality Search</strong></td><td>O(N) full file scan</td><td>O(1) direct bucket lookup</td></tr><tr><td><strong>Range Search</strong></td><td>O(N) full scan</td><td>O(N) full scan (hash breaks order)</td></tr><tr><td><strong>Space / Overflow</strong></td><td>High space utilization; no collisions</td><td>Bucket fragmentation / overflow chains on collision</td></tr></tbody></table>"
  },
  {
    unit: 5, part: "B", num: 10,
    q: "Make a comparison between primary index and secondary index.",
    tldr: "Primary is built on ordered primary key (often sparse, 1 per block); Secondary is on non-ordering fields (always dense).",
    body: "<table><thead><tr><th>Feature</th><th>Primary Index</th><th>Secondary Index</th></tr></thead><tbody><tr><td><strong>Search Key</strong></td><td>Ordering primary key (unique)</td><td>Non-ordering candidate or non-key field</td></tr><tr><td><strong>Type</strong></td><td>Usually <strong>Sparse</strong> (1 entry per data block)</td><td>Always <strong>Dense</strong> (1 entry per record/key value)</td></tr><tr><td><strong>Physical Order</strong></td><td>Data file is sorted by this key</td><td>Data file is NOT sorted by this key</td></tr><tr><td><strong>Limit</strong></td><td>At most 1 per table</td><td>Many per table</td></tr></tbody></table>"
  },
  {
    unit: 5, part: "B", num: 11,
    q: "Compare linear hashing and extendable hashing.",
    tldr: "Extendible uses a 2^d directory (doubles suddenly, zero overflow pages); Linear has no directory (splits 1 bucket at a time, uses overflow pages).",
    body: "<table><thead><tr><th>Feature</th><th>Extendible Hashing</th><th>Linear Hashing</th></tr></thead><tbody><tr><td><strong>Directory</strong></td><td>Requires a <code>2^d</code> pointer directory</td><td>No directory needed</td></tr><tr><td><strong>Overflow Pages</strong></td><td>Avoided (splits full bucket immediately)</td><td>Allowed (chained on overflow)</td></tr><tr><td><strong>Growth</strong></td><td>Directory doubles all at once when <code>d' == d</code></td><td>Grows smoothly one bucket at a time via <code>Next</code></td></tr><tr><td><strong>Skew Handling</strong></td><td>Handles skew well (only affected bucket splits)</td><td>Skew can create long overflow chains in unsplit buckets</td></tr></tbody></table>"
  },
  {
    unit: 5, part: "B", num: 12,
    q: "Explain the mechanisms of log-based recovery.",
    tldr: "Write-Ahead Logging (WAL) records Old/New values before disk writes; Restart runs Analysis -> Redo -> Undo.",
    body: "<p><strong>Core Mechanism:</strong> Every write appends <code>&lt;Ti, X, Old, New&gt;</code> to the log on stable storage <em>before</em> dirty buffer pages reach disk (<strong>WAL</strong>).</p><ul><li><strong>Normal Run:</strong> Writes log records <code>start</code>, updates, <code>commit</code>/<code>abort</code>; periodic checkpoints flush buffers.</li><li><strong>Crash Recovery:</strong> Scan backward from end of log to last checkpoint to build <strong>Redo-list</strong> (txns with <code>commit</code>) and <strong>Undo-list</strong> (active txns without <code>commit</code>/<code>abort</code>).</li><li><strong>Undo Phase:</strong> Scan backward, restoring <code>Old</code> values for Undo-list txns.</li><li><strong>Redo Phase:</strong> Scan forward from checkpoint, reapplying <code>New</code> values for Redo-list txns.</li></ul>"
  },
  {
    unit: 5, part: "B", num: 13,
    q: "Compare the deferred- and immediate-modification versions of the log-based recovery scheme.",
    tldr: "Deferred updates DB post-commit (Redo only); Immediate updates anytime post-WAL (Undo + Redo).",
    body: "<table><thead><tr><th>Property</th><th>Deferred Modification</th><th>Immediate Modification</th></tr></thead><tbody><tr><td><strong>When DB is updated</strong></td><td>Only after transaction reaches commit</td><td>During active execution (after WAL log write)</td></tr><tr><td><strong>Log contents</strong></td><td><code>&lt;Ti, X, NewVal&gt;</code> (no old value needed)</td><td><code>&lt;Ti, X, OldVal, NewVal&gt;</code></td></tr><tr><td><strong>Crash Recovery</strong></td><td><strong>Redo only</strong> (uncommitted changes never hit DB)</td><td><strong>Both Undo and Redo</strong></td></tr><tr><td><strong>Buffer limit</strong></td><td>Modified pages must fit in memory until commit</td><td>Dirty pages can be flushed to disk anytime</td></tr></tbody></table>"
  },
  {
    unit: 5, part: "B", num: 14,
    q: "Explain the purpose of checkpoint mechanism. How does the frequency of checkpoints affect the recovery process?",
    tldr: "Checkpoints bound how far back logs must be scanned on crash; too frequent slows runtime, too rare slows recovery.",
    body: "<p><strong>Purpose:</strong> Without checkpoints, crash recovery would have to scan and redo the entire transaction log since database creation. A checkpoint flushes dirty buffers to disk and records <code>&lt;checkpoint L&gt;</code> so recovery only scans logs from the latest checkpoint onward.</p><p><strong>Effect of Frequency:</strong></p><ul><li><strong>Too Frequent:</strong> High disk I/O overhead during normal operation (flushing buffers repeatedly reduces runtime throughput).</li><li><strong>Too Infrequent:</strong> Very low runtime overhead, but crash recovery takes much longer scanning huge log histories.</li></ul>"
  },
  {
    unit: 5, part: "B", num: 15,
    q: "Explain about shadow paging recovery scheme.",
    tldr: "Uses Current and Shadow page tables; copies modified pages to new blocks; commits by switching page table.",
    body: "<p><strong>Working Principle:</strong> Maintains two page tables during a transaction: <strong>Shadow Page Table</strong> (saved on disk, never altered) and <strong>Current Page Table</strong>.</p><ol><li><strong>Start:</strong> Both tables point to identical disk pages.</li><li><strong>Write:</strong> First write to page <code>P</code> allocates a fresh disk block <code>P'</code>, copies data, and updates only the Current Page Table.</li><li><strong>Commit:</strong> Flush Current Page Table to disk and make it the new Shadow Page Table; reclaim old blocks.</li><li><strong>Crash:</strong> Simply discard Current Page Table and revert to Shadow Page Table.</li></ol><p><strong>Drawback:</strong> Destroys physical data clustering on disk, leaves garbage blocks, and struggles with concurrent transactions.</p>"
  },
  {
    unit: 5, part: "B", num: 16,
    q: "Explain the Cost based Query optimization in detail.",
    tldr: "Enumerates equivalent relational plans using equivalence rules and selects lowest-cost plan using catalog statistics.",
    body: "<p><strong>Steps in Cost-Based Optimization:</strong></p><ol><li><strong>Plan Generation:</strong> Apply equivalence rules (e.g., push selections/projections down, reorder joins) to produce logically equivalent expression trees.</li><li><strong>Access Path &amp; Algorithm Selection:</strong> Assign physical operators (index scan vs table scan; hash join vs sort-merge join vs nested-loop join).</li><li><strong>Statistics Lookup:</strong> Read system catalog stats (tuple count <code>nr</code>, block count <code>br</code>, distinct values <code>V(A, r)</code>, histograms).</li><li><strong>Cost Estimation &amp; Pruning:</strong> Estimate I/O + CPU cost for each sub-plan using dynamic programming (System R / Selinger approach) and pick the globally cheapest execution plan.</li></ol>"
  },
  {
    unit: 5, part: "B", num: 17,
    q: "Explain the procedure to evaluate the cost of a Query?",
    tldr: "Total cost = block transfers (b * tT) + disk seeks (S * tS) + CPU/network, driven by selectivity and join size.",
    body: "<p>Query cost is dominated by disk I/O and measured using catalog statistics:</p><ol><li><strong>Identify Cost Components:</strong> <code>Cost = (b * tT) + (S * tS)</code> where <code>b</code> = blocks transferred, <code>tT</code> = transfer time per block, <code>S</code> = number of disk seeks, and <code>tS</code> = seek time.</li><li><strong>Estimate Selectivity:</strong> Compute expected output rows for selections (e.g. equality on key = 1 row; equality on attribute <code>A</code> = <code>nr / V(A, r)</code>).</li><li><strong>Estimate Operator Costs:</strong> Evaluate each operator (Linear scan = <code>br</code> blocks; B+ tree equality = <code>(height + 1)</code> seeks/transfers; Block Nested-Loop Join = <code>br + ceil(br / (M-2)) * bs</code> transfers).</li><li><strong>Sum Pipeline Cost:</strong> Add costs across tree nodes, accounting for pipelining vs materializing intermediate results.</li></ol>"
  },
  {
    unit: 5, part: "B", num: 18,
    q: "Explain different database recovery techniques.",
    tldr: "Log-based (Deferred & Immediate WAL), Checkpointing/Fuzzy Checkpoints, Shadow Paging, and Disk Mirroring/Backups.",
    body: "<ul><li><strong>1. Log-Based Deferred Modification:</strong> Delays DB writes until commit; recovery performs Redo only.</li><li><strong>2. Log-Based Immediate Modification (WAL):</strong> Writes DB pages anytime after log hits disk; recovery performs Undo + Redo.</li><li><strong>3. Checkpointing (Strict &amp; Fuzzy / ARIES):</strong> Bounds log scan via Analysis, Redo, and Undo phases.</li><li><strong>4. Shadow Paging:</strong> Copy-on-write page tables avoiding log overhead for single-user/simple systems.</li><li><strong>5. Media Recovery (RAID Mirroring &amp; Archival Dumps):</strong> Combines full backups with archived logs to recover from physical disk failure.</li></ul>"
  }
];
