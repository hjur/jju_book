## java.lang 패키지

> 자바프로그래밍에 가장 기본이 되는 클래스을 포함한 패키지로 
> import문 없이 사용 가능 

### Object클래스 
```
- 모든 클래스의 최고 조상이기 때문에 Object클래스의 멤버들은 모든 클래스에서 바로 사용 가능
- 멤버변수는 없고 오직 11개의 메서드만 가지고 있다.
```
#### equals(Object obj)<br>
- 매개변수는 Object > 모든 객체가 매개변수로 대입가능<br>
(Object가 최상위 타입이므로 모든 객체는 Object 타입으로 자동 타입 변환 가능)

- 주소값을 비교하기 때문에 value가 같으면 false 리턴<br>
String, Date, File 클래스 등의 메서드에서 값 비교가 되는 이유는 각 클래스에서 equals 를 오버라이딩했기 때문.

- == 연산자는 주소값을 비교

#### hashCode()<br>
- 데이터관리기법 중의 하나로 다량의 데이터를 저장/검색하는데 유용<br>
- 입력 : 검색값 , 리턴 : 입력값이 저장된 위치의 해시코드 <br>
객체의 주소값으로 해시코드를 반환하기 때문에 같은 해시코드는 없지만,<br>
String클래스는 값으로 해시코드를 반환하도록 오버라이딩되어 있어 값이 같으면 동일한 해시코드를 반환한다.

#### toString()<br>
- 인스턴스에 대한 정보를 문자열로 제공할 목적을 정의한 것<br>
- 오버라이딩하지 않으면 클래스이름@16진수 해시코드 리턴<br>
String, Date클래스 등 별도 오버라이딩되어 있음

#### clone()
- 자신을 복제하여 새로운 인스턴스를 생성<br>
- 단순 값만 복제(얕은 복사, 깊은 복사가 필요할 경우 오버라이딩 할 때 별도 코딩 필요) <br>
super.clone(); <br>
newRetVal = new ReturnValue(retVal);<br>
return newRetVal;<br>
- 오버라이딩 할 경우 <br>
1. Cloneable I/F 구현
2. 접근제어자 protected > public
3. try-catch 내에서 조상클래스 clone() 호출 

### getClass()
- 자신이 속한 클래스의 Class객체를 반환, 이름이 "Class" 인 객체
- 클래스 당 1개만 존재 
- 클래스 파일이 '클래스 로더(Class Loader)에 의해 메모리에 올라갈 때 자동으로 생성<br>
클래스로더 : 실행 시에 필요한 클래스를 동적으로 메모리에 로드<br>
- 클래스 파일을 읽어서 사용하기 편한 형태로 저장<br>
클래스 객체가 메모리에 존재하는지 클래스 패스(path) 따라서 확인<br>
있으면 : 객체의 참조를 반환, 클래스 파일을 읽어서 Class객체로 변환<br>
없으면 : ClassNotFound Ex 발생

### String클래스 
(은지님 심화과정으로 예습한 부분~)
- 생성방법 
1. new 연산자 ; 메모리 할당, 매번 새 인스턴스 생성
2. 리터럴 방법 ; 기 존재 인스턴스 재사용, == 연산자 true 반환

> ```
> String a = "test";
> String b = "test";
> 
> System.out.println(a == b); // true
> 
> b = "test test";
> 
> System.out.println(a); // test 
> System.out.println(b); // test test
> 
> System.out.println(a == b); // false
> ```

- 변경 불가 클래스, 읽기 O, 변경 X 
- '+' 문자열 결합은 새로운 String 인스턴스가 생성되는 것(메모리에 올라감) <br>
때문에 문자열 결합할 때 StringBuffer 이용이 좋다
- join(), StringJoiner<br>
JDK1.8 추가<br>
split() 반대 작업 <br>
![java_lang_001](../../../assets/images/note/java/java_lang_001.png)<br>

- [StringBuffer, StringJoiner 예제 ↗](https://futurecreator.github.io/2018/06/02/java-string-joiner/)
- [StringBuffer, StringJoiner 성능 비교 ↗](https://data-traveler.tistory.com/22)

#### 문자 인코딩 변환 
```
byte[] utf8_str = "가".getBytes("UTF-8");  // 문자열 > utf-8
String str = new String(utf8_str, "UTF-8") // byte 배열 > 문자열 

```

#### String.format()
String str = String.format("%d 더하기 %d는 %d", 3, 5, 3+5)

#### String 형변환 
- 기본형 > String <br>
String str = 10 + ""; // 편리<br>
String str = String.valueOf(10); // 성능 ↗<br>
- String > 기본형 <br>
int i = Integer.parseInt("-100");//JDK1.7부터 부호 허용<br>
int i = Integer.valueOf("100");//반환 타입은 integer, 내부에서 parseInt 를 호출하고 있기 때문에 성능은 동일 <br>

### StringBuffer / StringBuilder
#### StringBuffer
- 생성할 때 지정된 문자열 변경 가능 

- 생성할 때 버퍼 크기 지정이 가능하다 <br>
생성된 크기 = 지정된 크기 + 16(기본 크기 16)

- append() 이용한 크기 변경도 가능 <br>
과정 : new char[] > arraycopy  ; 작업효율 떨어짐

- equals메서드 오버라이딩 되어 있지 않아서, toString() 으로 새로운 string 인스턴스를 생성해야 값 비교 가능 

- 멀티쓰레드에 안전 (동기화) > 멀티쓰레드로 작성된 프로그램이 아닌 경우 불필요하게 성능 저하를 야기한다고 함

#### StringBuilder
- StringBuffer의 단일쓰레드에 안전
- 선언부분만 바꾸면 될 정도로 완전 동일하게 구현되어 있다. <br>
StringBuffer도 성능이 좋기 때문에 반드시 성능향상이 필요한 경우가 아니면 굳이 변경할 필요는 없음 

### Math클래스 
- 성능을 위해 JVM이 설치된 OS의 메서드를 사용 <br>
컴퓨터마다 결과가 상이할 수 있음 

- 정수 / 정수 는 소숫점을 반환하지 않는다. <br>
System.out.println(1097/100);   // 10
System.out.println(1097/100.0); // 10.97

- Exact ; JAK1.8 추가 , 정수형 연산에서 발생할 수 있는 오버플로우 감지 > 예외 발생 

#### StricMath클래스 
- 성능은 다소 포기하고, OS 타지 않는 클래스 

### 래퍼(wrapper)클래스 
- 객체가 아닌 8개의 기본형의 값을 객체로 사용할 때 필요 <br>
boolean > Boolean <br>
char > Character <br>
byte > Byte <br>
short > Short <br>
int > Integer <br>
long > Long <br>
float > Float <br>
double > Double  <br>

### 오토박싱 / 언박싱 
- 기본형 > 래퍼클래스 : 오토박싱(autoboxing)
- 래퍼클래스 > 기본형 : 언박싱(unboxing)
- 기본형과 참조형 간의 연산 가능 <br>
컴파일러가 자동으로 변환하는 코드를 넣어준다.  <br>
JDK 1.5 이전에는 기본형과 참조형 간 연산이 불가 <br>

### 유용한 클래스 
#### java.util.Objects클래스 
```
Objects.equals ; null 체크 가능
    if(a != null && a.equals(b))
    ↓
    if(Objects.equals(a, b)) 
    //a,b 가 모두 null 일 때 true 반환

Objects.deepEquals : 다차원 비교 가능 
    String[][] str2D = new String[][]{{"a","b"}{"A","B"}};
    String[][] str2D2 = new String[][]{{"a","b"}{"A","B"}};
    Objects.equals(str2D,str2D2) // false
    Objects.deepEquals(str2D,str2D2) // true 
```
#### java.util.Random 클래스
- 난수 생성<br>
Math.random()이 내부적으로 Random 클래스를 사용하고 있어서 별 차이 없음 

#### java.util.regex 정규식(Regular Expression)
- 텍스트 데이터 중 원하는 패턴으로 문자열 찾음

#### java.util.Scanner 클래스 
- 화면, 파일, 문자열과 같은 입력소스로부터 문자데이터를 읽어오는데 도움을 줌

#### java.util.StringTokenizer 클래스 
- 구분자 기준으로 문자열 자르는데 사용, 복잡한 정규식은 불가 
split, Scanner 등이 있지만 전체 토큰수(countTokens(), 남은 토큰 유무(hasTokens()), 다음 토큰 반환(nextTokens()) 등 유용한 메서드 지원
```
String req = "1,2,3,4"
String[] res1 = req.split(",");
Scanner res2 = new Scanner(req.useDelimiter(","));
StringTokenizer res3 = new StringTokenizer(req, ",");
```
#### java.math.BigInteger클래스 
- long(가장 큰 정수형) 타입보다 큰 값을 다룰 수 있지만 성능은 떨어진다. 

#### java.math.BigDecimal클래스 
- 정수를 이용해 실수를 표현, 실수를 정수와 10의 제곱의 곱으로 표현한다. 

