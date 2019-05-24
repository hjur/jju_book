## 반복문

- for : 횟 수 기준
- while : 조건 기준

### for

- 문법

> ```
> - 코드블럭을 구분하기 위해 : 과 들여쓰기를 사용
> - 파이선에서 들여쓰기는 선택이 아닌 필수!
>
> for 변수 in 컨테이너:
>     실행할 명령1
>     실행할 명령2
>     ...
> ```

> ```
> my_int1 = 1
> my_int2 = -2
> my_int3 = 4096
> my_float1 = 1.0
> my_float2 = 2.0
> my_float3 = 3.14
> ```

- range() : for와 함께 자주 사용되는 내장 함수

> - range(stop)는 0부터 stop 전까지 숫자를 나열
> - range(start, stop)는 start ~ stop 전 까지의 숫자를 나열
>
> ```
> for n in range(3):
>     print(n)
>
> 0
> 1
> 2
>
> for n in range(4, 6):
>     print(n)
>
> 4
> 5
> ```

- for x 2 : for 중첩

> ```
> for j in range(2, 10):
>     for i in range(1, 10):
>         print('{}x{}={}'.format(j, i, j \* i))
> ```

- 컴프리헨션 (comprehension) : 리스트를 만드는 강력하고 간결한 방법

> ```
> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
> odd_numbers = [number for number in numbers if number % 2 == 1]
> print(odd_numbers)
> ```

### while

- 문법

> ```
> while 조건:
>     실행할 문장 1
>     실행할 문장 2
>     ...
> ```

> ```
> - continue : 다시 조건으로 돌아감
> - break : 반복문 종료
>
> count = 0
> while count < 10:
>    count += 1
>    if count < 4:
>        continue
>    if count == 8:
>        break
> ```

## 연산자

### 특수 연산자

> print(3 ** 2) # 3의 2제곱
> print(4 ** 3) # 4의 3제곱
> print(7 // 3) # 7 나누기 3의 몫
> print(7 % 3) # 7 나누기 3의 나머지
> 9  
> 64  
> 2  
> 1

### 문자열 연산자

> ```
> - + : 연결
> - * : 반복
>
> print('김왼손'+ 'X' + '집단지성들')
> 김왼손X집단지성들
> print('안녕 ' * 5)
> 안녕 안녕 안녕 안녕 안녕
> ```

### 논리 연산자

- and , or, not

### 멤버쉽 연산자

- 리스트, 튜플 등 안에 값이 있는지 확인
- in, not in

> ```
> fruits = ['사과', '딸기', '망고', '브로콜리', '바나나']
> print('딸기' in fruits)
> True
> print('딸기' not in fruits)
> False
> print('상추' in fruits)
> False
> print('상추' not in fruits)
> True
> ```

## 조건문

- 문법

> ```
> if 조건:
>    실행할 명령1
>    실행할 명령2
> elif 조건:
>    실행할 명령3
>    실행할 명령4
> else:
>    실행할 명령5
>    실행할 명령6
>
>
> name = 'Bob'
> if name == 'Alice':
>    print('당신이 Ailce이군요.')
> elif name == 'Bob':
>    print('당신이 Bob이군요.')
> else:
>    print('아니 당신은!?')
>
> 당신이 Bob이군요.
> ```

## 딕셔너리 Dictionary

- 관련된 정보를 서로 연관시켜 놓은 것
- k, v로 이루어져 있다.
- 리스트와의 차이첨은 관련된 정보를 연관시킨다는 것
- 리스트는 값을 다루리 위해 인덱스를 사용, 딕셔너리는 키를 사용

> ```
> my_dict = {}  # {}
> my_dict[1] = 'a'  # {1: 'a'}
> my_dict['b'] = 2  # {1: 'a', 'b': 2}
> my_dict['c'] = 'd'  # {1: 'a', 'b': 2, 'c': 'd'}
> ```

- dict method

> ```
> - dict.values() : 값만 뽑아서 리턴
>
> students = {'학생1': 'Tom', '학생2': 'Sally', '학생3': 'Betty'}
> print(students.values() , students.keys())
>
> dict_values(['Tom', 'Sally', 'Betty']) dict_keys(['학생1', '학생2', '학생3'])
>
> for key, val in students.items():
>     print(key, val)
>
> 학생1 Tom
> 학생2 Sally
> 학생3 Betty
>
> ```

## 함수

- 문법

> ```
> def 함수이름(인자1, ...):
>     실행할 명령1
>     실행할 명령2
>     ...
>     return 결과
> ```
>
> ```
> - return 여러 개하기
> - 여러개를 리턴할 경우 튜플로 묶어서 return 됨
>
> def add_mul(num1, num2):
>     return num1 + num2, num1 * num2
>
> my_add, my_mul = add_mul(1, 2)  # 3, 2
> ```

## 모듈

- 문법

> ```
> import 모듈이름
> ```
