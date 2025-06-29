name: 이슈 템플릿
description: 팀원들이 요구사항 기반 이슈를 작성할 때 사용하는 템플릿입니다.
title: ''
labels: []
assignees: []

body:
  - type: markdown
    attributes:
      value: |
        ## 🌈 Success criteria
        요구사항을 상세히 설명해주세요. 글/사진/그림(흐름도) 모두 사용해봅시다.  
        예: 요구사항명세서를 참고해서 Main 시트의 메뉴 정보(전체)기능을 만들어주세요.

  - type: textarea
    id: success-criteria
    attributes:
      label: 요구사항 설명
      description: 어떤 기능을 구현해야 하는지 상세히 적어주세요.
      placeholder: ex) 메뉴 리스트 화면을 테이블로 보여주기
    validations:
      required: true

  - type: textarea
    id: to-do
    attributes:
      label: 👷 To-do
      description: 세부 작업 단계를 체크리스트 형태로 작성해주세요.
      placeholder: |
        - [ ] 기능1 준비
        - [ ] 기능2 구현
        - [x] 일부 완료
        - [ ] 테스트
    validations:
      required: false

  - type: textarea
    id: review
    attributes:
      label: 🧶 Review
      description: 작업 결과, 고민거리, 테스트 결과, 화면 캡처 등을 자유롭게 적어주세요.
      placeholder: 여기에 회고, 테스트 결과, 공유 사항 등을 적어주세요.
    validations:
      required: false
