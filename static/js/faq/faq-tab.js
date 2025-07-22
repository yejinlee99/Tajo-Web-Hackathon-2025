// faq 탭 기능에 대한 JavaScript 코드

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-menu li');
  const questions = document.querySelectorAll('.faq-section details');

  function showCategory(category) {
    questions.forEach(q => {
      const qCategory = q.dataset.category;
      q.style.display = (qCategory === category) ? 'block' : 'none';
    });
  }

  // 초기화: 현재 active 탭 기준
  const initialTab = document.querySelector('.tab-menu li.active a');
  if (initialTab) {
    const initialCategory = initialTab.getAttribute('href').replace('#', '');
    showCategory(initialCategory);
  }

  // 탭 클릭 이벤트
  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      e.preventDefault();

      // 탭 스타일 업데이트
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // 카테고리 필터링
      const selectedCategory = tab.querySelector('a').getAttribute('href').replace('#', '');
      showCategory(selectedCategory);
    });
  });
});

