const KEY = "tin9.v3";

let S = JSON.parse(
  localStorage.getItem(KEY) ||
  '{"user":null,"done":[],"level":null,"history":[],"diagnostic":null}'
);

const save = () =>
  localStorage.setItem(KEY, JSON.stringify(S));

const $ = id => document.getElementById(id);

/* =========================
   NHÁNH CHƯƠNG TRÌNH
========================= */

const BRANCH_KEY = "tin9.branch";

let BRANCH =
  localStorage.getItem(BRANCH_KEY) || "9a";

function curriculumLessons() {
  return T9.lessons.filter(
    l => !l.branch || l.branch === BRANCH
  );
}

function lessonTotal() {
  return curriculumLessons().length;
}

function curriculumDone() {
  const ids = curriculumLessons().map(l => l.id);

  return S.done.filter(id => ids.includes(id));
}

function progressPercent() {
  const total = lessonTotal();

  if (!total) return 0;

  return Math.round(
    curriculumDone().length / total * 100
  );
}

function setBranch(branch) {

  BRANCH = branch;

  localStorage.setItem(
    BRANCH_KEY,
    branch
  );

  view("lessons");
}

/* =========================
   TIỆN ÍCH
========================= */

function esc(s) {

  return String(s).replace(
    /[&<>"']/g,
    m => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[m])
  );
}

/* =========================
   KHUNG HỆ THỐNG
========================= */

function shell() {

  $("app").innerHTML = `

  <header class="top">

    <button class="btn" id="menu">
      ☰
    </button>

    <div class="brand">

      <div class="logo">
        💻
      </div>

      <div>
        TIN9 PHÚ THÀNH 3.0
        <small>
          Hệ sinh thái học tập cá nhân hóa
        </small>
      </div>

    </div>

    <div class="spacer"></div>

    <span
      id="userLabel"
      class="muted">
    </span>

    <button
      class="btn"
      onclick="logout()">
      Đăng xuất
    </button>

  </header>

  <div class="shell">

    <aside id="side">

      <div class="nav-title">
        Học tập
      </div>

      <button
        class="nav active"
        data-v="dashboard">
        🏠 Tổng quan
      </button>

      <button
        class="nav"
        data-v="lessons">
        📚 Bài học
      </button>

      <button
        class="nav"
        data-v="diagnostic">
        🎯 Khảo sát đầu vào
      </button>

      <button
        class="nav"
        data-v="quiz">
        📝 Luyện tập
      </button>

      <button
        class="nav"
        data-v="ai">
        🤖 Trợ lý học tập
      </button>

      <div class="nav-title">
        Theo dõi
      </div>

      <button
        class="nav"
        data-v="progress">
        📊 Tiến bộ
      </button>

      <button
        class="nav"
        data-v="teacher">
        👨‍🏫 Góc giáo viên
      </button>

      <div class="nav-title">
        Hệ thống
      </div>

      <button
        class="nav"
        data-v="about">
        ℹ️ Về 3.0
      </button>

    </aside>

    <main id="main"></main>

  </div>
  `;

  $("menu").onclick = () =>
    $("side").classList.toggle("open");

  document
    .querySelectorAll(".nav")
    .forEach(btn => {

      btn.onclick = () =>
        view(btn.dataset.v);

    });
}

/* =========================
   ĐĂNG NHẬP
========================= */

function login() {

  $("app").innerHTML = `

  <div class="login card">

    <div style="text-align:center">

      <div
        class="logo"
        style="margin:auto">
        💻
      </div>

      <h1>
        TIN9 PHÚ THÀNH 3.0
      </h1>

      <p class="muted">
        Hệ sinh thái học tập Tin học 9
      </p>

    </div>

    <div class="field">

      <label>
        Họ và tên
      </label>

      <input
        id="name"
        placeholder="Ví dụ: Nguyễn Văn An">

    </div>

    <div class="field">

      <label>
        Lớp
      </label>

      <input
        id="className"
        placeholder="Ví dụ: 9A1"
        autocomplete="off">

    </div>

    <div class="field">

      <label>
        Vai trò
      </label>

      <select id="role" onchange="toggleClassField()">

        <option value="student">
          Học sinh
        </option>

        <option value="teacher">
          Giáo viên
        </option>

      </select>

    </div>

    <button
      class="btn primary"
      style="width:100%"
      onclick="enter()">

      Vào hệ thống

    </button>

    <div class="callout blue">

      Dữ liệu phiên bản thử nghiệm được
      lưu trên thiết bị của người dùng.

    </div>

  </div>
  `;

  toggleClassField();
}

function toggleClassField() {

  const role = $("role")?.value;
  const field = $("className");

  if (!field) return;

  field.disabled = role === "teacher";

  if (role === "teacher") {
    field.value = "";
    field.placeholder = "Không bắt buộc đối với giáo viên";
  } else {
    field.placeholder = "Ví dụ: 9A1";
  }
}

function enter() {

  const name =
    $("name").value.trim();

  const className =
    $("className")?.value.trim() || "";

  const role =
    $("role").value;

  if (!name) {

    alert(
      "Vui lòng nhập họ tên."
    );

    $("name").focus();
    return;
  }

  if (role === "student" && !className) {

    alert(
      "Vui lòng nhập lớp."
    );

    $("className").focus();
    return;
  }

  S.user = {
    name: name,
    className: className,
    role: role
  };

  save();

  shell();

  view("dashboard");
}

function logout() {

  S.user = null;

  save();

  login();
}

/* =========================
   ĐIỀU HƯỚNG
========================= */

function view(v) {

  document
    .querySelectorAll(".nav")
    .forEach(x =>
      x.classList.toggle(
        "active",
        x.dataset.v === v
      )
    );

  let html = "";

  if (v === "dashboard")
    html = dashboard();

  if (v === "lessons")
    html = lessons();

  if (v === "diagnostic")
    html = diagnostic();

  if (v === "quiz")
    html = quiz();

  if (v === "ai")
    html = ai();

  if (v === "progress")
    html = progress();

  if (v === "teacher")
    html = teacher();

  if (v === "about")
    html = about();

  $("main").innerHTML = html;

  if ($("userLabel")) {

    $("userLabel").textContent =
      S.user
        ? `${S.user.name}${S.user.className ? " • " + S.user.className : ""}`
        : "";

  }

  bind(v);

  window.scrollTo(0, 0);

  if ($("side"))
    $("side").classList.remove("open");
}

/* =========================
   TRANG TỔNG QUAN
========================= */

function dashboard() {

  const p =
    progressPercent();

  return `

  <div class="hero">

    <h1>
      Chào ${esc(S.user.name)} 👋
    </h1>

    ${S.user.className ? `
      <p class="muted">
        Lớp: <b>${esc(S.user.className)}</b>
      </p>
    ` : ""}

    <p>
      TIN9 Phú Thành 3.0 xây dựng
      vòng học tập:
      khảo sát → học → luyện tập →
      phản hồi → điều chỉnh.
    </p>

    <button
      class="btn"
      onclick="view('diagnostic')">

      🎯 Xác định lộ trình

    </button>

  </div>

  <div class="cards">

    <div class="card">

      📚 Bài học

      <div class="num">
        ${lessonTotal()}
      </div>

    </div>

    <div class="card">

      ✅ Hoàn thành

      <div class="num">
        ${curriculumDone().length}
      </div>

    </div>

    <div class="card">

      📝 Lượt luyện

      <div class="num">
        ${S.history.length}
      </div>

    </div>

    <div class="card">

      🎯 Tiến độ

      <div class="num">
        ${p}%
      </div>

    </div>

  </div>

  <div class="grid2">

    <div class="panel">

      <div class="section-head">

        <h2>
          🧭 Lộ trình đề xuất
        </h2>

      </div>

      ${recommendation()}

    </div>

    <div class="panel">

      <div class="section-head">

        <h2>
          ⚡ Bắt đầu nhanh
        </h2>

      </div>

      <div class="toolbar">

        <button
          class="btn primary"
          onclick="view('lessons')">
          📚 Học bài
        </button>

        <button
          class="btn"
          onclick="view('quiz')">
          📝 Luyện tập
        </button>

        <button
          class="btn"
          onclick="view('ai')">
          🤖 Hỏi trợ lý
        </button>

      </div>

    </div>

  </div>
  `;
}

function recommendation() {

  if (!S.level) {

    return `
    <p class="muted">

      Chưa có hồ sơ đầu vào.
      Hãy làm khảo sát để hệ thống
      đề xuất cách học.

    </p>`;
  }

  let text = "";

  if (S.level === "support") {

    text =
      "Củng cố kiến thức nền, học từng bước và luyện câu hỏi cơ bản.";

  } else if (S.level === "standard") {

    text =
      "Hoàn thành bài học theo thứ tự, ưu tiên thực hành và vận dụng.";

  } else {

    text =
      "Mở rộng kiến thức bằng thử thách, dự án và sản phẩm cá nhân.";

  }

  return `

  <div class="callout blue">

    <strong>

      ${
        T9.levels.find(
          x => x.id === S.level
        )?.name || ""
      }

    </strong>

    <br>

    ${text}

  </div>

  <div class="progress">

    <span
      style="width:${progressPercent()}%">
    </span>

  </div>
  `;
}

/* =========================
   BÀI HỌC
========================= */

function lessons() {

  return `

  <div class="section-head">

    <div>

      <h2>
        📚 Bài học Tin học 9
      </h2>

      <div class="muted">

        6 chủ đề – 17 bài học
        theo lộ trình

      </div>

    </div>

  </div>

  <div class="callout blue">

    <b>
      📌 Chủ đề 4 có hai nhánh lựa chọn
    </b>

    <div
      class="toolbar"
      style="margin-top:10px">

      <button
        class="btn ${BRANCH === "9a" ? "primary" : ""}"
        onclick="setBranch('9a')">

        📊 Nhánh 9a – Bảng tính

      </button>

      <button
        class="btn ${BRANCH === "9b" ? "primary" : ""}"
        onclick="setBranch('9b')">

        🎬 Nhánh 9b – Làm video

      </button>

    </div>

  </div>

  <div class="callout green">

    Lộ trình hiện tại:

    <b>
      ${lessonTotal()} bài
    </b>

    – Nhánh:

    <b>
      ${BRANCH.toUpperCase()}
    </b>

  </div>

  <input
    class="search"
    id="search"
    placeholder="🔎 Tìm bài học hoặc chủ đề...">

  <div id="lessonList"></div>
  `;
}

function drawLessons() {

  const q =
    ($("search")?.value || "")
      .toLowerCase();

  const lessons =
    curriculumLessons();

  $("lessonList").innerHTML =
    T9.topics.map(topic => {

      const list =
        lessons.filter(l =>
          l.topic === topic.id &&
          (
            l.title +
            " " +
            l.code
          )
            .toLowerCase()
            .includes(q)
        );

      if (!list.length)
        return "";

      return `

      <div class="topic">

        <div class="topic-head">

          <h3>
            📘 CHỦ ĐỀ ${topic.id}.
            ${topic.name}
          </h3>

          <div class="muted">
            ${topic.desc}
          </div>

        </div>

        ${list.map(l => `

          <div class="lesson">

            <div>

              <b>
                ${l.code} • ${l.title}
              </b>

              <div>

                ${
                  l.branch
                  ? `
                  <span class="tag branch">
                    Nhánh ${l.branch}
                  </span>
                  `
                  : ""
                }

                ${
                  S.done.includes(l.id)
                  ? `
                  <span class="tag good">
                    ✓ Hoàn thành
                  </span>
                  `
                  : ""
                }

              </div>

            </div>

            <button
              class="btn primary"
              onclick="openLesson('${l.id}')">

              ${
                S.done.includes(l.id)
                ? "Xem lại"
                : "Học bài"
              }

            </button>

          </div>

        `).join("")}

      </div>

      `;

    }).join("");
}

function openLesson(id) {

  const l =
    T9.lessons.find(
      x => x.id === id
    );

  if (!l) return;

  const completed =
    S.done.includes(l.id);

  const content =
    lessonText(l.id);

  $("main").innerHTML = `

    <div class="lesson-page">

      <!-- QUAY LẠI -->
      <div class="toolbar">

        <button
          class="btn"
          onclick="view('lessons')">

          ← Danh sách bài học

        </button>

        <span class="muted">
          ${BRANCH === "9a"
            ? "Nhánh 9a – Bảng tính"
            : "Nhánh 9b – Làm video"}
        </span>

      </div>


      <!-- TIÊU ĐỀ BÀI -->
      <div class="hero">

        <span class="tag">
          ${l.code}
        </span>

        <h1>
          ${esc(l.title)}
        </h1>

        <p>
          Học tập theo tiến trình:
          <b>
            Khởi động → Khám phá → Thực hành
            → Thử thách → Tự đánh giá
          </b>
        </p>

        ${
          completed
          ? `
          <div class="callout green">

            ✅ Em đã hoàn thành bài học này.

          </div>
          `
          : ""
        }

      </div>


      <!-- MỤC TIÊU -->
      <div class="panel">

        <h2>
          🎯 1. Mục tiêu học tập
        </h2>

        <div class="callout blue">

          <p>
            Sau bài học, học sinh cần:
          </p>

          <ul>

            <li>
              Hiểu được kiến thức trọng tâm
              của bài học.
            </li>

            <li>
              Biết liên hệ kiến thức với
              tình huống thực tế.
            </li>

            <li>
              Biết thực hành và tự kiểm tra
              mức độ hiểu bài.
            </li>

          </ul>

        </div>

      </div>


      <!-- KHỞI ĐỘNG -->
      <div class="panel">

        <h2>
          🚀 2. Khởi động
        </h2>

        <p>
          Hãy suy nghĩ về một tình huống
          trong học tập hoặc cuộc sống có
          liên quan đến nội dung của bài học.
        </p>

        <div class="callout orange">

          <b>Câu hỏi gợi mở:</b>

          <p>
            Em đã từng gặp vấn đề này chưa?
            Em đã giải quyết như thế nào?
          </p>

        </div>

      </div>


      <!-- KHÁM PHÁ -->
      <div class="panel">

        <h2>
          📖 3. Khám phá kiến thức
        </h2>

        <div class="callout blue">

          <b>Nội dung trọng tâm</b>

          <p>
            ${esc(content)}
          </p>

        </div>

      </div>


      <!-- EM CẦN NHỚ -->
      <div class="panel">

        <h2>
          🧠 4. Em cần nhớ
        </h2>

        <div class="callout green">

          <p>
            Hãy tự diễn đạt kiến thức
            bằng lời của mình.
          </p>

          <p>
            Nếu chưa thể giải thích lại,
            em nên đọc lại phần kiến thức
            trọng tâm trước khi chuyển sang
            thực hành.
          </p>

        </div>

      </div>


      <!-- THỰC HÀNH -->
      <div class="panel">

        <h2>
          🛠️ 5. Thực hành
        </h2>

        <p>
          Hãy thực hiện một nhiệm vụ nhỏ
          liên quan đến nội dung vừa học.
        </p>

        <div class="callout blue">

          <b>Nhiệm vụ:</b>

          <p>
            Hãy tạo một ví dụ gần với
            hoạt động học tập hoặc đời sống
            của em và giải thích cách thực hiện.
          </p>

        </div>

      </div>


      <!-- THỬ THÁCH -->
      <div class="panel">

        <h2>
          🌟 6. Thử thách
        </h2>

        <div class="callout orange">

          <b>Dành cho học sinh muốn mở rộng</b>

          <p>
            Hãy tìm một tình huống thực tế
            khác có thể áp dụng kiến thức
            của bài học.
          </p>

          <p>
            Em có thể trình bày bằng văn bản,
            hình ảnh, bảng tính, video hoặc
            sản phẩm số phù hợp.
          </p>

        </div>

      </div>


      <!-- TỰ ĐÁNH GIÁ -->
      <div class="panel">

        <h2>
          ✅ 7. Tự đánh giá
        </h2>

        <div class="quiz-q">

          <p>
            <b>
              Em đã hiểu nội dung bài học
              ở mức nào?
            </b>
          </p>

          <label>
            <input
              type="radio"
              name="selfLevel">
            Em còn cần hỗ trợ
          </label>

          <br>

          <label>
            <input
              type="radio"
              name="selfLevel">
            Em đã hiểu kiến thức cơ bản
          </label>

          <br>

          <label>
            <input
              type="radio"
              name="selfLevel">
            Em có thể vận dụng và mở rộng
          </label>

        </div>

      </div>


      <!-- HÀNH ĐỘNG -->
      <div class="panel">

        <h2>
          📌 8. Hoạt động tiếp theo
        </h2>

        <div class="toolbar">

          <button
            class="btn primary"
            onclick="
              view('quiz');
              setTimeout(
                () => startQuiz('${l.id}'),
                50
              );
            ">

            📝 Luyện tập bài này

          </button>


          <button
            class="btn success"
            onclick="complete('${l.id}')">

            ${
              completed
              ? "✓ Đã hoàn thành"
              : "☑ Đánh dấu đã hoàn thành"
            }

          </button>

        </div>

      </div>


      <!-- ĐIỀU HƯỚNG -->
      <div class="toolbar">

        <button
          class="btn"
          onclick="view('lessons')">

          ← Về danh sách bài

        </button>

        <button
          class="btn primary"
          onclick="view('progress')">

          📊 Xem tiến bộ

        </button>

      </div>

    </div>

  `;
}

/* =========================
   KHẢO SÁT ĐẦU VÀO
========================= */

function diagnostic() {

  return `

  <div class="panel">

    <h2>
      🎯 Khảo sát đầu vào
    </h2>

    <p>
      Khảo sát nhanh giúp hệ thống
      đề xuất lộ trình học tập.
    </p>

    <div id="diag"></div>

  </div>
  `;
}

function renderDiag() {

  const qs =
    T9.questions.slice(0, 8);

  $("diag").innerHTML =

    qs.map((q, i) => `

      <div class="quiz-q">

        <b>
          ${i + 1}.
          ${q.text}
        </b>

        ${q.opts.map((o, j) => `

          <button
            class="option"
            onclick="
              diagAns(
                ${i},
                ${j},
                this
              )
            ">

            ${String.fromCharCode(65 + j)}.
            ${o}

          </button>

        `).join("")}

      </div>

    `).join("") +

    `

    <button
      class="btn primary"
      onclick="finishDiag()">

      🎯 Phân tích lộ trình

    </button>

    <div id="diagResult"></div>
    `;

  window._da = [];
}

function diagAns(i, j, button) {

  window._da[i] = j;

  document
    .querySelectorAll(
      `[onclick^="diagAns(${i},"]`
    )
    .forEach(x =>
      x.classList.remove("selected")
    );

  button.classList.add(
    "selected"
  );
}

function finishDiag() {

  const qs =
    T9.questions.slice(0, 8);

  const score =
    qs.reduce(
      (a, q, i) =>
        a +
        (
          window._da[i] === q.ans
            ? 1
            : 0
        ),
      0
    );

  S.level =
    score <= 3
      ? "support"
      : score <= 6
      ? "standard"
      : "advanced";

  S.diagnostic = {
    score: score,
    total: qs.length,
    time:
      new Date()
        .toLocaleString("vi-VN")
  };

  save();

  $("diagResult").innerHTML = `

  <div class="callout green">

    <h3>
      🎯 Kết quả khảo sát
    </h3>

    <b>
      ${score}/${qs.length}
    </b>

    <br><br>

    Mức đề xuất:

    <b>
      ${
        T9.levels.find(
          x => x.id === S.level
        )?.name
      }
    </b>

    <p>
      Hệ thống sẽ sử dụng kết quả
      này để gợi ý cách học phù hợp.
    </p>

  </div>
  `;
}

/* =========================
   LUYỆN TẬP
========================= */

function quiz() {

  const available =
    T9.lessons.filter(
      l =>
        T9.questions.some(
          q => q.lesson === l.id
        )
    );

  return `

  <div class="panel">

    <h2>
      📝 Khu vực luyện tập
    </h2>

    <p class="muted">

      Chọn bài có ngân hàng câu hỏi
      để luyện tập và tự kiểm tra.

    </p>

    <select
      id="quizSelect"
      class="search">

      <option value="">
        -- Chọn bài luyện tập --
      </option>

      ${available.map(l => `

        <option value="${l.id}">

          ${l.code} –
          ${l.title}

        </option>

      `).join("")}

    </select>

    <div
      id="quizArea"
      style="margin-top:18px">
    </div>

  </div>
  `;
}

function startQuiz(id) {

  id =
    id ||
    $("quizSelect")?.value;

  if (!id) return;

  const qs =
    T9.questions.filter(
      q => q.lesson === id
    );

  if (!qs.length) {

    $("quizArea").innerHTML = `

      <div class="callout orange">

        ⚠️ Bài này chưa có ngân hàng
        câu hỏi.

      </div>
    `;

    return;
  }

  window._quiz = {
    id: id,
    qs: qs,
    ans: []
  };

  $("quizArea").innerHTML = `

  <div class="callout blue">

    <b>
      📌 Hướng dẫn
    </b>

    <p>
      Đọc kỹ từng câu và chọn đáp án.
      Sau khi hoàn thành hãy bấm
      <b>Nộp bài</b>.
    </p>

  </div>

  ${qs.map((q, i) => `

    <div class="quiz-q">

      <b>
        Câu ${i + 1}.
        ${q.text}
      </b>

      ${q.opts.map((o, j) => `

        <button
          class="option"
          onclick="
            qans(
              ${i},
              ${j},
              this
            )
          ">

          ${String.fromCharCode(65 + j)}.
          ${o}

        </button>

      `).join("")}

    </div>

  `).join("")}

  <div class="toolbar">

    <button
      class="btn primary"
      onclick="submitQuiz()">

      📤 Nộp bài

    </button>

    <button
      class="btn"
      onclick="view('lessons')">

      📚 Về bài học

    </button>

  </div>

  <div id="quizResult"></div>
  `;
}

function qans(i, j, button) {

  if (!window._quiz)
    return;

  window._quiz.ans[i] = j;

  document
    .querySelectorAll(
      `[onclick^="qans(${i},"]`
    )
    .forEach(x =>
      x.classList.remove(
        "selected"
      )
    );

  button.classList.add(
    "selected"
  );
}

function submitQuiz() {

  const x = window._quiz;

  if (!x) return;

  const unanswered =
    x.qs.filter(
      (q, i) =>
        x.ans[i] === undefined
    ).length;

  if (unanswered > 0) {

    const ok =
      confirm(
        `Bạn còn ${unanswered} câu chưa trả lời. Vẫn nộp bài?`
      );

    if (!ok) return;
  }

  const score =
    x.qs.reduce(
      (a, q, i) =>
        a +
        (
          x.ans[i] === q.ans
            ? 1
            : 0
        ),
      0
    );

  const percent =
    Math.round(
      score / x.qs.length * 100
    );

  x.qs.forEach((q, i) => {

    document
      .querySelectorAll(
        `[onclick^="qans(${i},"]`
      )
      .forEach((button, j) => {

        button.disabled = true;

        if (j === q.ans) {

          button.classList.add(
            "correct"
          );

        }

        if (
          j === x.ans[i] &&
          x.ans[i] !== q.ans
        ) {

          button.classList.add(
            "wrong"
          );

        }

      });

  });

  let level =
    percent >= 80
      ? "advanced"
      : percent >= 50
      ? "standard"
      : "support";

  S.history.push({

    time:
      new Date()
        .toLocaleString("vi-VN"),

    lesson: x.id,

    score: score,

    total: x.qs.length,

    percent: percent,

    level: level

  });

  save();

  let message = "";

  if (percent >= 80) {

    message =
      "🌟 Em đã nắm khá tốt nội dung. Hãy thử vận dụng và mở rộng kiến thức.";

  } else if (percent >= 50) {

    message =
      "👍 Em đã đạt yêu cầu cơ bản. Hãy xem lại những câu chưa chính xác.";

  } else {

    message =
      "💡 Em nên quay lại bài học, củng cố kiến thức rồi luyện tập lại.";

  }

  $("quizResult").innerHTML = `

  <div class="callout green">

    <h3>
      🎉 KẾT QUẢ LUYỆN TẬP
    </h3>

    <div
      style="
        font-size:30px;
        font-weight:bold;
      ">

      ${score}/${x.qs.length}

    </div>

    <p>
      Kết quả:
      <b>${percent}%</b>
    </p>

    <p>
      Mức độ:

      <b>
        ${
          T9.levels.find(
            x => x.id === level
          )?.name
        }
      </b>

    </p>

    <p>
      ${message}
    </p>

  </div>

  <div class="toolbar">

    <button
      class="btn primary"
      onclick="startQuiz('${x.id}')">

      🔄 Làm lại

    </button>

    <button
      class="btn"
      onclick="view('progress')">

      📊 Xem tiến bộ

    </button>

  </div>
  `;
}

/* =========================
   TRỢ LÝ AI
========================= */

function ai() {

  return `

  <div class="panel chat">

    <h2>
      🤖 Trợ lý AI học Tin học 9
    </h2>

    <p class="muted">

      Trợ lý gợi ý từng bước,
      không làm bài thay học sinh.

    </p>

    <div
      id="messages"
      class="messages">
    </div>

    <div class="chatbar">

      <textarea
        id="aiq"
        placeholder="Ví dụ: Em chưa hiểu COUNTIF, hãy gợi ý...">
      </textarea>

      <button
        class="btn primary"
        onclick="ask()">

        Gửi

      </button>

    </div>

  </div>
  `;
}

function say(text, cls) {

  const div =
    document.createElement(
      "div"
    );

  div.className =
    "msg " + cls;

  div.textContent = text;

  $("messages")
    .appendChild(div);

  $("messages").scrollTop =
    $("messages").scrollHeight;
}

function ask() {

  const q =
    $("aiq").value.trim();

  if (!q) return;

  say(q, "user");

  $("aiq").value = "";

  const z =
    q.toLowerCase();

  let answer = "";

  if (z.includes("countif")) {

    answer =
      "💡 COUNTIF dùng để đếm các ô thỏa mãn điều kiện. Em hãy xác định vùng dữ liệu và điều kiện trước.";

  } else if (
    z.includes("sumif")
  ) {

    answer =
      "💡 SUMIF dùng để tính tổng các giá trị thỏa mãn điều kiện. Hãy xác định vùng điều kiện, điều kiện và vùng cần tính tổng.";

  } else if (
    z.includes("python")
  ) {

    answer =
      "💡 Trước khi viết Python, hãy xác định Input – Process – Output rồi mới chuyển thành thuật toán.";

  } else if (
    z.includes("thông tin")
  ) {

    answer =
      "💡 Khi đánh giá thông tin, hãy kiểm tra nguồn, tác giả, thời điểm, bằng chứng và đối chiếu với nguồn khác.";

  } else {

    answer =
      "💡 Em hãy cho biết bài đang học, điều em đã thử và chỗ đang vướng. Trợ lý sẽ gợi ý từng bước thay vì làm bài thay em.";

  }

  setTimeout(
    () => say(answer, "bot"),
    250
  );
}

/* =========================
   TIẾN BỘ
========================= */

function progress() {

  const done =
    curriculumDone();

  const p =
    progressPercent();

  return `

  <div class="cards">

    <div class="card">

      <b>
        Hoàn thành
      </b>

      <div class="num">
        ${done.length}/${lessonTotal()}
      </div>

    </div>

    <div class="card">

      <b>
        Tiến độ
      </b>

      <div class="num">
        ${p}%
      </div>

    </div>

    <div class="card">

      <b>
        Lượt luyện tập
      </b>

      <div class="num">
        ${S.history.length}
      </div>

    </div>

    <div class="card">

      <b>
        Mức đề xuất
      </b>

      <div
        class="num"
        style="font-size:18px">

        ${
          S.level
          ? T9.levels.find(
              x => x.id === S.level
            )?.name
          : "Chưa khảo sát"
        }

      </div>

    </div>

  </div>

  <div class="panel">

    <h2>
      📊 Tiến độ theo chủ đề
    </h2>

    ${T9.topics.map(topic => {

      const lessons =
        curriculumLessons()
          .filter(
            l =>
              l.topic === topic.id
          );

      if (!lessons.length)
        return "";

      const d =
        lessons.filter(
          l =>
            S.done.includes(l.id)
        ).length;

      const pc =
        Math.round(
          d / lessons.length * 100
        );

      return `

      <div
        style="margin:18px 0">

        <div class="kpi">

          <b>
            Chủ đề ${topic.id}.
            ${topic.name}
          </b>

          <span>
            ${d}/${lessons.length}
          </span>

        </div>

        <div class="progress">

          <span
            style="width:${pc}%">
          </span>

        </div>

      </div>
      `;

    }).join("")}

  </div>
  `;
}

/* =========================
   GÓC GIÁO VIÊN
========================= */

function teacher() {

  const done =
    curriculumDone();

  return `

  <div class="panel">

    <h2>
      👨‍🏫 GÓC GIÁO VIÊN
    </h2>

    <p class="muted">

      Dashboard theo dõi tiến độ
      học tập trên thiết bị.

    </p>

    <div class="cards">

      <div class="card">

        📚 Bài học

        <div class="num">
          ${lessonTotal()}
        </div>

      </div>

      <div class="card">

        ✅ Hoàn thành

        <div class="num">
          ${done.length}
        </div>

      </div>

      <div class="card">

        📝 Lượt luyện

        <div class="num">
          ${S.history.length}
        </div>

      </div>

      <div class="card">

        📊 Tiến độ

        <div class="num">
          ${progressPercent()}%
        </div>

      </div>

    </div>

    <div class="callout blue">

      <b>
        Phân nhóm học tập
      </b>

      <p>
        🟢 Khá – giỏi:
        có khả năng vận dụng và mở rộng.
      </p>

      <p>
        🟡 Đạt chuẩn:
        đạt yêu cầu cơ bản.
      </p>

      <p>
        🔴 Cần hỗ trợ:
        cần củng cố và hướng dẫn thêm.
      </p>

    </div>

    <div class="callout orange">

      <b>
        Giai đoạn tiếp theo
      </b>

      <p>
        Có thể phát triển thành dashboard
        lớp học, danh sách học sinh,
        thống kê điểm và báo cáo giáo viên
        khi có hệ thống tài khoản và máy chủ.
      </p>

    </div>

  </div>
  `;
}

/* =========================
   GIỚI THIỆU
========================= */

function about() {

  return `

  <div class="panel">

    <h2>
      ℹ️ Về TIN9 Phú Thành 3.0
    </h2>

    <p>
      Hệ thống hỗ trợ học Tin học 9
      theo hướng cá nhân hóa.
    </p>

    <div class="callout blue">

      <b>
        🔄 Vòng phản hồi học tập
      </b>

      <p>
        Khảo sát → Học →
        Luyện tập → Phản hồi →
        Điều chỉnh.
      </p>

    </div>

    <div class="callout green">

      <b>
        📚 Cấu trúc chương trình
      </b>

      <p>
        6 chủ đề – 17 bài học,
        trong đó Chủ đề 4 có hai
        lựa chọn 9a hoặc 9b.
      </p>

    </div>

  </div>
  `;
}

/* =========================
   KẾT NỐI SỰ KIỆN
========================= */

function bind(v) {

  if (v === "lessons") {

    if ($("search")) {

      $("search").oninput =
        drawLessons;

    }

    drawLessons();
  }

  if (v === "diagnostic") {

    renderDiag();

  }

  if (v === "quiz") {

    if ($("quizSelect")) {

      $("quizSelect").onchange =
        () => startQuiz();

    }

  }

  if (v === "ai") {

    say(
      "👋 Chào em! Hãy nêu bài đang học và phần chưa hiểu. Trợ lý sẽ gợi ý từng bước.",
      "bot"
    );

  }
}

/* =========================
   KHỞI ĐỘNG
========================= */

if (!S.user) {

  login();

} else {

  shell();

  view("dashboard");

}
