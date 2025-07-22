// 호출 취소 모달 창

function openCancelModal() {
    document.getElementById("cancelModal").style.display = "flex";
}

function closeCancelModal() {
    document.getElementById("cancelModal").style.display = "none";
}

function goToHome() {
    window.location.href = redirectTo;
}