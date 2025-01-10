# NextJs Todo

> 코드잇 프론트엔드 단기캠프 과제 제출용 Next.js Todo

### 마감 날짜 이후로 수정해도 된다는 연락을 받기 전까지는 수정되지 않을 예정입니다.

<br />

## Stack

## 보완점

- layout

  - 반응형은 헤더 제외 거의 넣지 못했습니다. 모든 레이아웃은 Large 기준입니다.
  - 박스 그림자를 넣지 못했습니다.
  - 그 외의 세세한 부분들도 넣지 못했습니다.

- function
  - 메인화면(/)
    - 전역을 사용하지 않아 / 화면에서 Todo 클릭 시 화면에서는 변경되는 것처럼 보이나 실상은 변경되지 않습니다.
  - 세부화면(/items/${id})
    - 할 일의 이름, 상태 변경이 구현되지 않았습니다.
    - 이미지 첨부 및 전송은 가능하나 다시 들어왔을 때 뜨지 않습니다. 대신 미리보기로 등록한 당시에는 뜹니다.
- deploy
  - 배포에 실패했습니다.

## 파일 구조

### public

- image 폴더 속에 필요한 이미지 요소들이 있습니다.

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

### tailwind.config.ts

- 색 코드들이 선언되어 있습니다.

## 실행

(시도해보지 않았음)

> git clone
> root에서 npm run dev

## 디자인

https://www.figma.com/design/zcM3VfCNbtiqt5aLhlv4sV/%5BKDT-%EB%8B%A8%EA%B8%B0%EC%8B%AC%ED%99%94%5D-%EC%A7%80%EC%9B%90%EC%9E%90-%EA%B3%BC%EC%A0%9C?node-id=53-2&p=f&t=SJydEEwgfIwSAGxL-0
