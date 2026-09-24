const KEY = "tin9.v4";
const OLD_KEY = "tin9.v3";

function loadState() {

  const fallback = {
    user: null,
    done: [],
    level: null,
    history: [],
    diagnostic: null,
    essayResponses: []
  };

  try {

    const raw =
      localStorage.getItem(KEY) ||
      localStorage.getItem(OLD_KEY);

    const parsed =
      raw ? JSON.parse(raw) : {};

    return {
      ...fallback,
      ...(parsed || {}),
      done: Array.isArray(parsed?.done)
        ? parsed.done
        : [],
      history: Array.isArray(parsed?.history)
        ? parsed.history
        : [],
      essayResponses:
        Array.isArray(parsed?.essayResponses)
          ? parsed.essayResponses
          : []
    };

  } catch (error) {

    console.warn(
      "Không đọc được dữ liệu cũ, hệ thống khởi tạo dữ liệu mới.",
      error
    );

    return fallback;
  }
}

let S = loadState();

const save = () => {

  try {

    localStorage.setItem(
      KEY,
      JSON.stringify(S)
    );

  } catch (error) {

    console.warn(
      "Không thể lưu dữ liệu trên thiết bị.",
      error
    );

  }
};

const $ = id =>
  document.getElementById(id);

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
        ? `${S.user.name}${S.user.className ? " • " + S.user.className : ""} • ${S.user.role === "teacher" ? "Giáo viên" : "Học sinh"}`
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

function lessonText(id) {

  const text = {

    "1":
      "Thế giới kĩ thuật số là môi trường trong đó dữ liệu và thông tin được tạo lập, lưu trữ, xử lí và trao đổi bằng công nghệ số. Công nghệ số tác động mạnh đến học tập, lao động, giao tiếp và đời sống.",

    "2":
      "Thông tin hỗ trợ con người xác định vấn đề, lựa chọn phương án và đưa ra quyết định. Khi giải quyết vấn đề cần xác định thông tin cần thiết, tìm kiếm, chọn lọc và sử dụng thông tin phù hợp.",

    "3":
      "Đánh giá chất lượng thông tin cần xem xét nguồn cung cấp, tác giả, thời điểm, mục đích, bằng chứng và mức độ phù hợp. Khi cần nên đối chiếu với các nguồn độc lập khác.",

    "4":
      "Việc sử dụng dịch vụ Internet cần tuân thủ pháp luật, tôn trọng quyền riêng tư, quyền tác giả, bản quyền và các quy định về sử dụng thông tin trong môi trường số.",

    "5":
      "Phần mềm mô phỏng cho phép mô hình hóa đối tượng hoặc quá trình trên máy tính để người học quan sát, thay đổi tham số và tìm hiểu kết quả.",

    "6":
      "Khai thác phần mềm mô phỏng cần xác định mục tiêu, lựa chọn các tham số phù hợp, tiến hành thao tác, quan sát kết quả và rút ra nhận xét.",

    "7":
      "Công cụ trực quan như sơ đồ, hình ảnh và biểu đồ giúp tổ chức và trình bày thông tin rõ ràng, hỗ trợ trao đổi và hợp tác.",

    "8":
      "Khi sử dụng công cụ trực quan cần lựa chọn hình thức phù hợp với dữ liệu và mục đích truyền đạt, đồng thời kiểm tra tính chính xác và dễ hiểu của sản phẩm.",

    "9a":
      "Xác thực dữ liệu giúp kiểm soát dữ liệu được nhập vào bảng tính, hạn chế sai sót và góp phần tạo dữ liệu thống nhất.",

    "10a":
      "Hàm COUNTIF dùng để đếm số ô trong một vùng dữ liệu thỏa mãn một điều kiện xác định.",

    "11a":
      "Hàm SUMIF dùng để tính tổng các giá trị thỏa mãn điều kiện trong dữ liệu.",

    "12a":
      "Hàm IF cho phép tạo kết quả khác nhau tùy theo điều kiện đúng hoặc sai.",

    "13a":
      "Khi hoàn thiện một bảng tính cần tổ chức dữ liệu rõ ràng, sử dụng công thức phù hợp, kiểm tra kết quả và trình bày để người dùng dễ theo dõi.",

    "9b":
      "Phần mềm làm video cung cấp các chức năng tổ chức hình ảnh, âm thanh, văn bản, hiệu ứng và các thành phần của sản phẩm video.",

    "10b":
      "Chuẩn bị dữ liệu và dựng video cần xác định kịch bản, thu thập tư liệu, tổ chức các cảnh và sắp xếp nội dung theo mục đích.",

    "11b":
      "Dựng video theo kịch bản là quá trình đưa hình ảnh, âm thanh, văn bản và các thành phần khác vào dòng thời gian theo trình tự đã thiết kế.",

    "12b":
      "Hoàn thành video cần kiểm tra nội dung, hình ảnh, âm thanh, thời lượng và sự phù hợp với kịch bản.",

    "13b":
      "Biên tập và xuất video là bước hoàn thiện sản phẩm, kiểm tra chất lượng và tạo tệp video phù hợp với mục đích sử dụng.",

    "14":
      "Giải quyết vấn đề với máy tính cần xác định vấn đề, phân tích yêu cầu, xây dựng phương án, thực hiện và kiểm tra kết quả.",

    "15":
      "Bài toán tin học cần xác định dữ liệu vào, dữ liệu ra và cách biến đổi dữ liệu từ Input thành Output.",

    "16":
      "Lập chương trình máy tính cần chuyển ý tưởng giải quyết vấn đề thành thuật toán và chương trình, sau đó chạy thử, kiểm tra và sửa lỗi.",

    "17":
      "Tin học mở ra nhiều nhóm nghề nghiệp. Người học cần phát triển năng lực sử dụng công nghệ, tư duy giải quyết vấn đề, giao tiếp và học tập liên tục."
  };

  return text[id] ||
    "Nội dung bài học đang được cập nhật. Em hãy xem mục tiêu, thực hành và tự đánh giá để tiếp tục lộ trình.";

}

function complete(id) {

  if (!id) return;

  const exists =
    T9.lessons.some(
      lesson => String(lesson.id) === String(id)
    );

  if (!exists) return;

  if (!Array.isArray(S.done))
    S.done = [];

  const index =
    S.done.indexOf(id);

  if (index >= 0) {

    S.done.splice(index, 1);

  } else {

    S.done.push(id);

  }

  save();

  openLesson(id);
}

function openLesson(id) {

  const l =
    T9.lessons.find(
      x => String(x.id) === String(id)
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

  const total =
    Array.isArray(T9.questions)
      ? T9.questions.length
      : 0;

  const essays =
    Array.isArray(T9.essayQuestions)
      ? T9.essayQuestions.length
      : 0;

  return `

  <div class="panel">

    <div class="section-head">

      <div>

        <h2>
          📝 LUYỆN TẬP TIN HỌC 9
        </h2>

        <p class="muted">
          Bài luyện tập tổng hợp giúp học sinh tự kiểm tra,
          nhận phản hồi và điều chỉnh lộ trình học tập.
        </p>

      </div>

    </div>

    <div class="cards">

      <div class="card">
        📝 Trắc nghiệm
        <div class="num">
          ${total}
        </div>
      </div>

      <div class="card">
        ✍️ Tự luận
        <div class="num">
          ${essays}
        </div>
      </div>

      <div class="card">
        📚 Bài học
        <div class="num">
          ${lessonTotal()}
        </div>
      </div>

      <div class="card">
        📊 Lượt làm
        <div class="num">
          ${S.history.length}
        </div>
      </div>

    </div>

    <div class="callout blue">

      <b>
        📌 Cấu trúc bài luyện tập
      </b>

      <p>
        <b>Phần A:</b>
        ${total} câu trắc nghiệm, hệ thống tự chấm.
      </p>

      <p>
        <b>Phần B:</b>
        ${essays} câu tự luận, lưu câu trả lời để giáo viên xem và đánh giá.
      </p>

    </div>

    <div class="toolbar">

      <button
        class="btn primary"
        onclick="startQuiz()">

        🚀 Bắt đầu làm bài

      </button>

      <button
        class="btn"
        onclick="view('lessons')">

        📚 Về bài học

      </button>

    </div>

    <div
      id="quizArea"
      style="margin-top:18px">

    </div>

  </div>

  `;
}

function startQuiz(sourceLessonId) {

  const qs =
    Array.isArray(T9.questions)
      ? T9.questions.slice(0, 20)
      : [];

  const essays =
    Array.isArray(T9.essayQuestions)
      ? T9.essayQuestions.slice(0, 3)
      : [];

  if (qs.length < 20) {

    const area = $("quizArea");

    if (area) {

      area.innerHTML = `

      <div class="callout orange">

        ⚠️ Ngân hàng câu hỏi chưa đủ 20 câu.
        Hiện có ${qs.length} câu.

      </div>
      `;

    }

    return;
  }

  window._quiz = {

    id: "tong-hop",

    sourceLessonId:
      sourceLessonId || null,

    qs: qs,

    essays: essays,

    ans: [],

    submitted: false

  };

  const source =
    sourceLessonId
      ? T9.lessons.find(
          l => l.id === sourceLessonId
        )
      : null;

  const sourceText =
    source
      ? `Luyện tập sau bài ${source.code} – ${source.title}. Bộ đề gồm 20 câu tổng hợp và 03 câu tự luận.`
      : "Bộ đề tổng hợp toàn chương trình gồm 20 câu trắc nghiệm và 03 câu tự luận.";

  const area = $("quizArea");

  if (!area) return;

  area.innerHTML = `

  <div class="callout blue">

    <b>
      📌 Hướng dẫn làm bài
    </b>

    <p>
      ${esc(sourceText)}
    </p>

    <p>
      Mỗi câu trắc nghiệm có một đáp án đúng.
      Em có thể chọn lại trước khi nộp.
    </p>

  </div>

  <div class="panel">

    <h2>
      📝 PHẦN A. 20 CÂU TRẮC NGHIỆM
    </h2>

    ${qs.map((q, i) => `

      <div class="quiz-q">

        <p>
          <b>
            Câu ${i + 1}.
          </b>

          ${esc(q.text)}
        </p>

        ${q.opts.map((o, j) => `

          <button
            type="button"
            class="option"
            data-quiz-q="${i}"
            data-quiz-a="${j}"
            onclick="qans(${i},${j},this)">

            ${String.fromCharCode(65 + j)}.
            ${esc(o)}

          </button>

        `).join("")}

      </div>

    `).join("")}

  </div>

  <div class="panel">

    <h2>
      ✍️ PHẦN B. 03 CÂU TỰ LUẬN
    </h2>

    <div class="callout orange">

      <b>
        📌 Lưu ý:
      </b>

      <span>
        Câu tự luận không tự chấm nội dung.
        Câu trả lời được lưu trên thiết bị để giáo viên xem và đánh giá.
      </span>

    </div>

    ${essays.map((q, i) => `

      <div class="quiz-q">

        <p>
          <b>
            Câu tự luận ${i + 1}.
          </b>
        </p>

        <p>
          ${esc(q.text)}
        </p>

        <textarea
          id="essay_${i}"
          rows="7"
          aria-label="Câu tự luận ${i + 1}"
          style="width:100%;box-sizing:border-box;padding:14px;border-radius:10px;border:1px solid #d6dce5;font-size:16px;resize:vertical;"
          placeholder="Nhập câu trả lời của em..."></textarea>

      </div>

    `).join("")}

  </div>

  <div class="toolbar">

    <button
      type="button"
      class="btn primary"
      onclick="submitQuiz()">

      📤 Nộp bài

    </button>

    <button
      type="button"
      class="btn"
      onclick="view('lessons')">

      📚 Về bài học

    </button>

  </div>

  <div id="quizResult"></div>

  `;

  window.scrollTo(0, 0);
}

function qans(i, j, button) {

  const quizState =
    window._quiz;

  if (
    !quizState ||
    quizState.submitted
  ) return;

  quizState.ans[i] = j;

  document
    .querySelectorAll(
      `[data-quiz-q="${i}"]`
    )
    .forEach(
      element =>
        element.classList.remove(
          "selected"
        )
    );

  if (button)
    button.classList.add("selected");
}

function submitQuiz() {

  const x =
    window._quiz;

  if (!x || x.submitted)
    return;

  const unanswered =
    x.qs.filter(
      (q, i) =>
        x.ans[i] === undefined
    ).length;

  if (unanswered > 0) {

    const ok =
      confirm(
        `Bạn còn ${unanswered} câu trắc nghiệm chưa trả lời. Vẫn nộp bài?`
      );

    if (!ok) return;
  }

  const score =
    x.qs.reduce(
      (total, q, i) =>
        total +
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

  x.submitted = true;

  x.qs.forEach(
    (q, i) => {

      document
        .querySelectorAll(
          `[data-quiz-q="${i}"]`
        )
        .forEach(
          (button, j) => {

            button.disabled = true;

            if (j === q.ans)
              button.classList.add(
                "correct"
              );

            if (
              j === x.ans[i] &&
              x.ans[i] !== q.ans
            )
              button.classList.add(
                "wrong"
              );

          }
        );

    }
  );

  const level =
    percent >= 80
      ? "advanced"
      : percent >= 50
        ? "standard"
        : "support";

  const essayAnswers =
    (x.essays || []).map(
      (q, i) => ({
        id: q.id,
        question: q.text,
        answer:
          $(`essay_${i}`)?.value.trim() || ""
      })
    );

  if (!Array.isArray(S.essayResponses))
    S.essayResponses = [];

  S.essayResponses.push({

    time:
      new Date()
        .toLocaleString("vi-VN"),

    user:
      S.user?.name || "",

    className:
      S.user?.className || "",

    answers:
      essayAnswers

  });

  if (!Array.isArray(S.history))
    S.history = [];

  S.history.push({

    time:
      new Date()
        .toLocaleString("vi-VN"),

    lesson:
      x.sourceLessonId || "tong-hop",

    score:
      score,

    total:
      x.qs.length,

    percent:
      percent,

    level:
      level,

    essayCount:
      essayAnswers.length

  });

  S.level = level;

  save();

  let message = "";

  if (percent >= 80) {

    message =
      "🌟 Em đã nắm khá tốt kiến thức. Hãy tiếp tục vận dụng và mở rộng.";

  } else if (percent >= 50) {

    message =
      "👍 Em đã đạt yêu cầu cơ bản. Hãy xem lại những câu chưa chính xác.";

  } else {

    message =
      "💡 Em nên quay lại bài học, củng cố kiến thức rồi luyện tập lại.";

  }

  const result =
    $("quizResult");

  if (!result) return;

  result.innerHTML = `

  <div class="callout green">

    <h3>
      🎉 KẾT QUẢ LUYỆN TẬP
    </h3>

    <div
      style="
        font-size:30px;
        font-weight:850;
      ">

      ${score}/${x.qs.length}

    </div>

    <p>
      Kết quả trắc nghiệm:
      <b>${percent}%</b>
    </p>

    <p>
      Mức độ:
      <b>
        ${
          T9.levels.find(
            item => item.id === level
          )?.name || ""
        }
      </b>
    </p>

    <p>
      ${message}
    </p>

  </div>

  <div class="callout blue">

    <h3>
      ✍️ Phần tự luận
    </h3>

    <p>
      Đã lưu
      <b>${essayAnswers.length}</b>
      câu trả lời tự luận trên thiết bị.
    </p>

    <p>
      Giáo viên có thể xem trong
      <b>Góc giáo viên</b>.
    </p>

  </div>

  <div class="toolbar">

    <button
      type="button"
      class="btn primary"
      onclick="startQuiz()">

      🔄 Làm lại

    </button>

    <button
      type="button"
      class="btn"
      onclick="view('progress')">

      📊 Xem tiến bộ

    </button>

    <button
      type="button"
      class="btn"
      onclick="view('lessons')">

      📚 Về bài học

    </button>

  </div>

  `;

  result.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
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

  const essays =
    Array.isArray(S.essayResponses)
      ? S.essayResponses
      : [];

  const recent =
    Array.isArray(S.history)
      ? S.history.slice(-10).reverse()
      : [];

  return `

  <div class="panel">

    <h2>
      👨‍🏫 GÓC GIÁO VIÊN
    </h2>

    <p class="muted">
      Khu vực theo dõi dữ liệu học tập được lưu trên thiết bị hiện tại.
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
        👤 Người học hiện tại
      </b>

      <p>
        ${
          S.user
            ? `${esc(S.user.name)}${S.user.className ? " – Lớp " + esc(S.user.className) : ""}`
            : "Chưa đăng nhập"
        }
      </p>

    </div>

  </div>

  <div class="panel">

    <h2>
      📈 Lịch sử luyện tập gần đây
    </h2>

    ${
      recent.length
      ? `
      <table class="table">

        <thead>

          <tr>
            <th>Thời gian</th>
            <th>Nội dung</th>
            <th>Kết quả</th>
            <th>Mức</th>
          </tr>

        </thead>

        <tbody>

          ${recent.map(item => `

            <tr>

              <td>
                ${esc(item.time || "")}
              </td>

              <td>
                ${
                  item.lesson === "tong-hop"
                    ? "Bộ đề tổng hợp"
                    : `Bài ${esc(item.lesson || "")}`
                }
              </td>

              <td>
                ${item.score ?? 0}/${item.total ?? 0}
                (${item.percent ?? 0}%)
              </td>

              <td>
                ${
                  T9.levels.find(
                    x => x.id === item.level
                  )?.name || ""
                }
              </td>

            </tr>

          `).join("")}

        </tbody>

      </table>
      `
      : `
      <div class="callout orange">
        Chưa có lượt luyện tập.
      </div>
      `
    }

  </div>

  <div class="panel">

    <h2>
      ✍️ Bài tự luận đã lưu
    </h2>

    ${
      essays.length
      ? essays.slice().reverse().map((record, ri) => `

        <div class="callout blue">

          <b>
            ${
              esc(record.user || "Học sinh")
            }
            ${
              record.className
                ? " – Lớp " + esc(record.className)
                : ""
            }
          </b>

          <div class="muted">
            ${esc(record.time || "")}
          </div>

          ${
            (record.answers || []).map((answer, i) => `

              <div
                class="quiz-q">

                <p>
                  <b>
                    Câu tự luận ${i + 1}
                  </b>
                </p>

                <p>
                  ${esc(answer.question || "")}
                </p>

                <div class="callout green">

                  ${
                    answer.answer
                      ? esc(answer.answer)
                      : "Học sinh chưa nhập câu trả lời."
                  }

                </div>

              </div>

            `).join("")
          }

        </div>

      `).join("")
      : `
      <div class="callout orange">
        Chưa có câu trả lời tự luận nào được lưu trên thiết bị này.
      </div>
      `
    }

  </div>

  <div class="callout orange">

    <b>
      🔐 Lưu ý về dữ liệu
    </b>

    <p>
      Phiên bản hiện tại lưu dữ liệu bằng localStorage trên thiết bị.
      Dữ liệu không tự động đồng bộ giữa nhiều máy hoặc nhiều học sinh.
    </p>

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

    if ($("search"))
      $("search").oninput =
        drawLessons;

    drawLessons();

  }

  if (v === "diagnostic") {

    renderDiag();

  }

  if (v === "ai") {

    const messages =
      $("messages");

    if (
      messages &&
      !messages.children.length
    ) {

      say(
        "👋 Chào em! Hãy nêu bài đang học và phần chưa hiểu. Trợ lý sẽ gợi ý từng bước.",
        "bot"
      );

    }

  }

}

/* =========================
   KẾT NỐI HÀM GIAO DIỆN
========================= */

window.view = view;
window.openLesson = openLesson;
window.complete = complete;
window.setBranch = setBranch;

window.startQuiz = startQuiz;
window.qans = qans;
window.submitQuiz = submitQuiz;

window.diagAns = diagAns;
window.finishDiag = finishDiag;

window.ask = ask;
window.say = say;

window.enter = enter;
window.logout = logout;
window.toggleClassField = toggleClassField;

/* =========================
   KHỞI ĐỘNG
========================= */

if (!S.user) {

  login();

} else {

  shell();

  view("dashboard");

}
