// dashboard 탭을 시각화하기 위한 JavaScript 코드

const tabButtons = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-tab');

        // 탭 버튼 active 처리
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // 모든 콘텐츠 숨기고, 선택한 것만 보여줌
        tabContents.forEach(content => {
        content.style.display = 'none';
        });

        document.getElementById(targetId).style.display = 'block';
    });
});