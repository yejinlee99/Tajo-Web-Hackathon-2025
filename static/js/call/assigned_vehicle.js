
window.addEventListener("DOMContentLoaded", () => {
  const cancelBtn = document.querySelector(".cancel-btn");
  if (cancelBtn) {
    cancelBtn.addEventListener("click", () => {
      document.getElementById("cancelModal").style.display = "flex";
    });
  }

  // 모달 보이기
  const arriveModal = document.getElementById("arriveModal");
  if (arriveModal) {
    arriveModal.style.display = "flex";
  }
});

function closeModal() {
  const arriveModal = document.getElementById("arriveModal");
  if (arriveModal) {
    arriveModal.style.display = "none";
  }
  document.querySelector(".assigned-main-content")?.classList.remove("blur-when-modal");
}

function closeCancelModal() {
  const cancelModal = document.getElementById("cancelModal");
  if (cancelModal) {
    cancelModal.style.display = "none";
  }
}

function goHome() {
  window.location.href = "/";  // Django 템플릿 태그는 HTML에서 넣어줘야 함
}
