# NextJs Todo

> 코드잇 프론트엔드 단기캠프 과제 제출용 Next.js Todo

## Stack

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 파일 구조

### public

- image: 필요한 이미지 요소들이 있습니다.
- fonts: 폰트 파일이 저장되어 있습니다.

### src

- app
  - items: items/{id} 의 page.tsx가 있습니다.
  - global.css, layout, page.tsx: 기본적인 css, 레이아웃, / 페이지가 있습니다.
- components
  - detail: 상세 페이지의 컴포넌트들입니다.
    - Todo: 상단의 Todo 객체의 내용, 완료 여부 등을 표시합니다.
    - MemoInput: 이미지 추가, 메모 추가 등의 컴포넌트와 수정 및 삭제 버튼이 포함됩니다.
  - layout: 헤더의 컴포넌트입니다.
    - Header: 상단의 로고가 표시됩니다.
  - todo: / 페이지의 Todo들의 컴포넌트들입니다.
    - List: 완료된 일과 완료되지 않은 일을 통합한 컴포넌트입니다. 각자 그 안에서 Todo를 불러오는 방식입니다.
    - Todo: 개별의 Todo입니다. Todo의 내용만 표시됩니다. 내용 클릭 시 세부 내용으로 넘어가며, 앞의 동그라미 버튼 클릭 시 완료 상태가 변경됩니다.
    - TodoInput: 상단의 Todo 입력 및 생성 컴포넌트입니다. Enter을 누르거나 추가하기 / + 버튼 클릭 시 생성됩니다.
- state
  - detailState: 상세 페이지의 Todo 상태를 담았습니다. 외에도 이미지 Post를 제외한 API 함수들이 포함되어 있습니다.
  - listState: 전체 Todo 리스트의 상태를 담았습니다. API 함수들도 포함되었습니다.

### tailwind.config.ts

- 색 코드들이 선언되어 있습니다.
- 반응형 웹을 위한 break point들이 선언되어 있습니다.

## 실행

(시도해보지 않았음)

> git clone 후 root에서 npm run dev

## 디자인

https://www.figma.com/design/zcM3VfCNbtiqt5aLhlv4sV/%5BKDT-%EB%8B%A8%EA%B8%B0%EC%8B%AC%ED%99%94%5D-%EC%A7%80%EC%9B%90%EC%9E%90-%EA%B3%BC%EC%A0%9C?node-id=53-2&p=f&t=SJydEEwgfIwSAGxL-0
