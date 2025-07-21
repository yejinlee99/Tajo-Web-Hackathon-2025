// dashboard 차트를 시각화하기 위한 JavaScript 코드
// 이 파일은 차트 데이터를 처리하고 시각화하는 데 사용됩니다.

const ctx = document.getElementById('user-growth').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['월', '화', '수', '목', '금'],
        datasets: [{
          label: '가입자 수',
          data: [5, 10, 7, 12, 8],
          borderColor: 'blue',
          backgroundColor: 'lightblue',
          fill: false
        }]
      }
    });
