// 호출 대기를 위한 JavaScript 코드

// DOM이 로드되면 실행
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    // 일정 시간 후 redirectTo 변수에 있는 URL로 이동
    window.location.href = redirectTo;
  }, 3000); // 3초 후 이동 (ms 단위)
});

