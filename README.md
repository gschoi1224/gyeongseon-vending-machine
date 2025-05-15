# Gyeongseon Vending Machine

## 프로젝트 구조

```
gyeongseon-vending-machine/
├── public/             # 정적 파일
├── src/                # 소스 코드
│   ├── assets/         # 이미지, 스타일 등 에셋 파일
│   ├── components/     # 재사용 가능한 컴포넌트
│   ├── pages/          # 페이지 단위 컴포넌트
│   ├── hooks/          # 커스텀 훅
│   ├── utils/          # 유틸리티 함수
│   └── main.tsx        # 애플리케이션 진입점
├── .gitignore          # Git 무시 파일 설정
├── package.json        # 프로젝트 의존성 및 스크립트
├── pnpm-lock.yaml      # pnpm 잠금 파일
├── tsconfig.json       # TypeScript 설정
└── vite.config.ts      # Vite 설정
```

## 실행 방법

1. **의존성 설치**

```bash
pnpm install
```

2. **개발 서버 실행**

```bash
pnpm dev
```

3. **프로덕션 빌드**

```bash
pnpm build
```

4. **빌드 결과물 미리보기**

```bash
pnpm preview
```

## 기술 스택

- **프론트엔드 프레임워크**: React
- **번들러**: Vite
- **패키지 매니저**: pnpm
- **언어**: TypeScript
