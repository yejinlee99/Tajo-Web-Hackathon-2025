// guide 탭 기능에 대한 JavaScript 코드

document.querySelectorAll('.tab-menu li a').forEach(tab => {
  tab.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelectorAll('.tab-menu li').forEach(li => li.classList.remove('active'));
    document.querySelectorAll('.tab-section').forEach(section => section.classList.remove('active'));

    const parentLi = this.closest('li');
    parentLi.classList.add('active');

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add('active');
    }
  });
});
