# Description

NestJS에서 security를 적용하는 방법에 대해 학습하는 프로젝트입니다.

#1. Authentication

### 1) passport 모듈 설치
passport 모듈을 아래와 같이 설치합니다.
```bash
> yarn add @nestjs/passport passport passport-local
> yarn add @types/passport-local -D 
```
@nestjs/passport, passport는 공통적으로 설치하는 모듈이며, passport-local, passport-jwt 와 같은 구체적인 전략을 선택적으로 설치하여 사용할 수 있습니다.

전략의 경우, 위와 같이 @types/{}를 설치해줌으로써 typescript code 를 작성함에 있어 assistance 를 제공받을 수 있습니다. 

