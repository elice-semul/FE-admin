# 새물 어드민

- 동네 세탁소와 소비자를 연결하는 우리 동네 세탁 O2O 플랫폼 프로젝트입니다.
- 해당 프로젝트는 PC 플랫폼을 지원합니다.
- 해당 레포는 어드민 레포입니다.
- [서비스 레포](https://github.com/elice-semul/FE-semul)

## 1. 서비스 주요 기능 설명

https://user-images.githubusercontent.com/116259958/210035048-d6d40816-5c77-42d9-a827-1f84d16c5861.mp4

- 로그인 기능

https://user-images.githubusercontent.com/116259958/210035075-e0a2974b-284a-4a63-a5ad-30ff97fc96bb.mp4

- 유저 조회, 삭제 기능

https://user-images.githubusercontent.com/116259958/210035089-88958e3a-bbf0-45fe-a2f8-839e653f38fc.mp4

- 상품 등록, 조회, 수정, 삭제 기능

https://user-images.githubusercontent.com/116259958/210035112-1c09afdf-ac45-4332-b801-0969e21a6b99.mp4

- 파트너 승인, 조회, 수정, 삭제 기능

https://user-images.githubusercontent.com/116259958/210035128-ca4f396d-495c-42e0-92f0-0207dde64cce.mp4

- 이용 내역 조회, 수정, 삭제 기능

## 2. 서비스 구성도

<img width="1155" alt="화면 캡처 2022-12-30 134749" src="https://user-images.githubusercontent.com/116259958/210035974-3c7445fd-6a2a-4b8b-a11a-c2c104aaec4d.png">

## 3. 프로젝트 팀원 역할 분담

| 이름                                       | 담당 업무  |
| ------------------------------------------ | ---------- |
| [김영범](https://github.com/ybeom)         | 프론트엔드 |
| [김유범](https://github.com/ubububububub)  | 프론트엔드 |
| [박재현](https://github.com/Velo248)       | 프론트엔드 |
| [조혜인](https://github.com/chi0518)       | 프론트엔드 |
| [신현규](https://github.com/HyeonGyu-Shin) | 백엔드     |
| [홍정완](https://github.com/eoaooeoa)      | 백엔드     |

## 4. 폴더 구조

```bash
├── .vscode
├── src
│   ├── apis
│   ├── components
│   ├── hocs
│   ├── hooks
│   ├── mocks
│   ├── portals
│   ├── router
│   ├── store
│   ├── styles
│   ├── utils
│   ├── App.tsx
│   └── main.tsx
├── .eslintignore
├── .eslintrc.js
├── .prettierrc.js
├── index.html
├── package.json
├── jsconfig.json
├── vite.config.js
├── README.md
└── .gitignore
```

## 5. 커밋 컨벤션

- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서 수정
- style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- refactor : 코드 리펙토링
- test : 테스트 코드, 리펙토링 테스트 코드 추가
- chore : 빌드 업무 수정, 패키지 매니저 수정
- remove: 파일 삭제

## 6. 브랜치 전략

![Untitled-2022-07-19-1846](https://user-images.githubusercontent.com/116259958/210034919-ca31af01-19c4-4387-b24b-2a5be8eb0b85.png)

## 7. 실행 방법

```bash
  yarn dev
```

## 9. 버전

- 1.0.0
