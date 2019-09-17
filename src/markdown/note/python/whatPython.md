> "Life is short, You need Python"

## 파이썬이란 ?

Python이란 1991년 귀도 반 로섬(Guido van Rossum)이 개발한 고급 프로그래밍 언어.

프로그래머가 바로 사용할 수 있는 라이브러리들과 통합 환경을 제공하는 ‘Battery Included’ 개념을 기본으로 삼고 있다

- **인터프리터 기반의 객체지향 언어**
  > 파이썬 코드를 파이썬 바이트코드(bytecode)로 변환(컴파일) 후 해석(인터프리트) ; like JVM
- **플랫폼에 구애받지 않는 언어**
  > 컴파일된 바이트코드는 플랫폼에 구애받지 않아서 재 컴파일이 필요없다
- **동적 타이핑 방식의 언어**
  > 프로그램을 실행할 때 타입 검사를 수행(ex; 자바스트립트)
  > (정적 타이핑 : 컴파일할 때 타입 검사(ex; c/c++))
- **리플렉션을 지원하는 언어**
  > 런타임 중 자신의 구조와 행위를 검사/수정할 수 있는 프로세스
  > 동적 객체 생성 및 함수 호출 등의 행위를 수행 가능함
- **확장성이 뛰어난 언어**
  > 외부 라이브러리로 쉽게 확장 가능
  > 컴파일된 모듈을 이용해 새로운 데이터 타입으로 이용 가능
  > 새로운 모듈은 대부분 플랫폼에서 새롭게 컴파일된 모듈을 파이썬 인터프리터 내부로 동적 로딩 가능

**라이브러리**
배포판에 바로 사용할 수 있는 라이브러리와 통합 환경이 함께 제공.<br>
os 시스템 호출, xml 처리, 직렬화, http, ftp 등 각종 프로토콜, 정규표현식, CSV 파일 처리, DB접속, GUI, html, 파이썬 코드 구문 북석 도구 등을 포함<br>
패키지 관리는 [PyPI(python package index) - 파이썬 관련 패키지들이 모여있는 저장소](https://pypi.org/) 에서..<br>
<br>
<br>

## 문법 주의사항

파이썬은 **들여쓰기를 이용한 블록 구조**로 되어있다. <br>

> ```
> def factorial(x):
>   if x == 0:
>       return 1
>   else:
>       return x \* factorial(x - 1)
> ```

> 괄호를 사용한 블록구조
>
> ```
> int factorial(int x) {
> if(x == 0) {
> return 1;
> } else {
> return x \* factorial(x - 1);
> }
> }
> ```