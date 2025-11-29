# Project: Umay Şamlı - Tactical Operations Terminal (MW2/C4ISR Style)
**Domain:** umaysamli.com
**Codename:** TASK_FORCE_141_PORTFOLIO
**Operator Class:** Computer Scientist // System Manipulator
**Design Concept:** "Modern Warfare 2 Mission Briefing" meets "Classified Military Intelligence Terminal".

---

## 1. Design Philosophy & Atmosphere (CRITICAL)
**OBJECTIVE:** Create a portfolio that feels like a piece of military hardware, not a website. The user is not "scrolling a page"; they are **operating a terminal**.

* **The Vibe:** High-stakes, somber, precise, "War Room" aesthetic.
* **Visual Language (FUI - Fictional User Interface):**
    * **Depth:** The screen should feel like it has layers (Glass > Text > Grid > Background).
    * **Imperfections:** Subtle **Scanlines** (CRT TV effect), slight **Chromatic Aberration** (RGB split) on text, vignette edges.
    * **Palette:**
        * *Background:* Deep Void Black (`#050505`) to Dark Gunmetal (`#0a0f0d`).
        * *Primary:* Night Vision Green (`#00ff41`) OR Tactical Cyan (`#00f3ff`).
        * *Alerts:* Warning Amber (`#ffae00`) for specific highlights.
        * *Dim:* Low-opacity gray (`rgba(255,255,255, 0.3)`) for grid lines.
* **Typography:**
    * *Headers:* `Share Tech Mono`, `Orbitron` (Uppercase, wide letter-spacing).
    * *Data/Code:* `Fira Code`, `JetBrains Mono` (Monospaced, tight).

---

## 2. Technical Stack
* **Core:** React / Next.JS / tsx
* **Styling Engine:** **SCSS (Sass)** (Preferred over Tailwind for this specific project).
    * *Reason:* We need deep nesting, complex mixins for "glitch" animations, and precise control over pseudo-elements (`::before`, `::after`) to create scanlines and CRT curvature effects.
* **Motion Controller:** `Framer Motion`
    * *Usage:* Staggered text reveals (typewriter effect), sliding panels, layout transitions.
* **3D Elements:** `React Three Fiber` (R3F)
    * *Asset:* A low-poly, wireframe globe rotating slowly in the background, pinpointing "Ankara" and "Brussels".
* **Icons:** `Lucide React` (Stroke width: 1.5px, sharp edges).

---

## 3. UI Components & System Behavior

### A. The "BIOS Boot" (Loading Sequence)
* **Trigger:** On first load.
* **Visuals:** Black screen. White monospaced text streaming rapidly.
* **Log Sequence:**
    1.  `> CHECKING_INTEGRITY... OK`
    2.  `> ESTABLISHING_UPLINK (MIT_SECURE_NODE_01)...`
    3.  `> DECRYPTING_BIOMETRICS: UMAY_ŞAMLI...`
    4.  `> CLEARANCE_LEVEL: WORLD_ATOMIC... VERIFIED.`
    5.  `> WELCOME, OPERATOR.`
* **Transition:** Screen flashes white, then "powers on" into the main interface.

### B. The "HUD" (Heads-Up Display) Layout
* **Fixed Overlay:** A CSS overlay `pointer-events-none` that adds the scanlines and vignette.
* **Top Bar (Status):**
    * *Left:* `COORDS: 39.9334° N, 32.8597° E` (Ankara)
    * *Center:* `ZULU_TIME: [Live UTC Clock]`
    * *Right:* `NET_STATUS: ENCRYPTED` (Blinking Green Dot)
* **Sidebar (Tactical Menu):** Vertical navigation resembling a weapon selection menu.
    * `[01] // INTEL` (About)
    * `[02] // OPS_LOG` (Experience)
    * `[03] // ARSENAL` (Skills/Stack)
    * `[04] // COMMS` (Contact)

---

## 4. Content Database (The Intel)

### SECTION 01: OPERATOR_PROFILE (Hero)
* **ID:** UMAY ŞAMLI
* **Role:** COMPUTER SCIENTIST // SYSTEM MANIPULATOR
* **Clearance:** WORLD ATOMIC
* **Directive:** "Architecting secure systems via AI exploitation and Cyber Defense. **Subject executes operations based on a covert theological agenda.**"
* **Tactical Focus (Tags):**
    * `[NEURO-SYMBOLIC AI]`
    * `[AI RED TEAMING]`
    * `[DISCRETE MATH]`
    * `[SECURE_BY_DESIGN]`

### SECTION 02: OPERATIONS_LOG (Experience Timeline)
*Style: Vertical timeline. Each node is a "Mission Checkpoint".*

* **[CURRENT] :: INFINITUM_IT (Ankara)**
    * *Role:* Software Engineer
    * *Status:* ACTIVE (Nov 2024 - Present)
    * *Brief:* Execution of high-level software development and system engineering protocols.
* **[MISSION] :: NATO (Brussels, BE)**
    * *Role:* Cyber Security Engineer
    * *Status:* COMPLETED (May 2024 - Nov 2024)
    * *Brief:* Deployed Zero-Trust architectures. Established AI Governance frameworks ISO/IEC 42001.
* **[MISSION] :: HISTOCAN (Ankara)**
    * *Role:* Lead Software Engineer
    * *Status:* COMPLETED (Jan 2025 - Apr 2025)
    * *Brief:* Pathology Platform DevOps. Microservices deployment via K8s.
* **[MISSION] :: NATO (Mons, BE)**
    * *Role:* Cyber Security Engineer
    * *Status:* COMPLETED (Nov 2024 - Dec 2024)
    * *Brief:* Automated PII detection pipelines. Cloud Security mapping.
* **[MISSION] :: TUSAS / TAI**
    * *Role:* Software Engineer
    * *Status:* COMPLETED (Nov 2024 - Dec 2024)
    * *Brief:* IIoT Factory Tracing for UAV assembly lines.
* **[MISSION] :: ASELSAN & SAVRONIK**
    * *Brief:* Defense industry resource optimization and railway testing frameworks.

### SECTION 03: ACADEMIC_RECORD (Education)
* **M.Sc. COMPUTER SCIENCE** | TED University
    * *Performance:* **GPA 4.0** (Full Scholarship)
    * *Focus:* Explainable AI, RL, Red-Teaming.
* **B.Sc. COMPUTER ENGINEERING** | TED University
    * *Performance:* **GPA 3.8** (High Honor)
* **MINOR: APPLIED DATA SCIENCE**
    * *Performance:* **GPA 4.0**

### SECTION 04: BLUEPRINTS (Projects)
*Style: Grid cards that look like technical schematics/blueprints.*

1.  **PROJECT: TPF (Tactical Planning Framework)**
    * *Class:* LIFE_OS // ADHD_OPTIMIZED
    * *Algo:* "Realism Point" Calculation (RP = RT/FreeTime).
    * *Stack:* `Java Spring Boot` `React` `Docker`
2.  **PROJECT: FHR (Vision Research)**
    * *Class:* COMPUTER_VISION // ML
    * *Tech:* PyTorch based De-hazing algorithms.
3.  **PROJECT: ROOAPSEA**
    * *Class:* DATA_SCIENCE // PREDICTION
    * *Tech:* Airline Satisfaction Prediction Models.

### SECTION 05: OFFICER_EVALUATIONS (References)
*Style: Decrypted transmission logs.*

> **LOG_ENTRY_001 // DR. BURAK EKICI (OXFORD)**
> "Subject demonstrates exceptional theoretical knowledge. Strong analytical foundation in formal verification."
> *Rating:* OUTSTANDING

> **LOG_ENTRY_002 // HOLGER SPOHN (CISO, NATO)**
> "Technical capabilities are superb. An engaged team player willing to tackle high-threat challenges."
> *Rating:* COMMENDED

> **LOG_ENTRY_003 // DR. EMIN KUGU (TEDU)**
> "Displays unique leadership traits. Dedication to task completion is absolute."
> *Rating:* LEADERSHIP_MATERIAL

### SECTION 06: COMMS_UPLINK (Contact)
* **ENCRYPTED CHANNEL (Primary):**
    * `secureconnection.anthem001@passinbox.com`
    * *Visual:* Display with a "Lock" icon and pulsing glow.
* **NON-SECURE CHANNELS:**
    * Email: `samliumay965@gmail.com`
    * LinkedIn: `linkedin.com/in/umaysamli`
    * GitHub: `github.com/samliumay`

---

## 5. Implementation Directives for AI (SCSS Specifics)
1.  **The "CRT" Mixin:** Create a SCSS mixin that adds a repeating linear gradient (scanlines) and a slight flicker animation (`@keyframes flicker`). Apply this to the `body::after`.
2.  **Text Glow:** Use `text-shadow` extensively. Primary text should have a slight green/cyan bloom.
    * `text-shadow: 0 0 5px #00ff41, 0 0 10px #00ff41;`
3.  **Glitch Effect:** Create a generic `.glitch` class in SCSS that uses `clip-path` and `transform` to shift pixels randomly on hover.
4.  **Responsiveness:** On mobile, collapse the sidebar into a "Tactical Hamburger Menu" (bottom-aligned).

**EXECUTE BUILD.**