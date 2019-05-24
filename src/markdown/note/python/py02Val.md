## 숫자 Numeric

- 정수, 실수
- 연산 가능

> ```
> my_int1 = 1
> my_int2 = -2
> my_int3 = 4096
> my_float1 = 1.0
> my_float2 = 2.0
> my_float3 = 3.14
> ```

## 문자열 String

- 큰 따옴표, 작은 따옴표로 구분
- 리스트같은 시퀀스 자료형

> ```
> my_str1 = 'a'
> my_str2 = '3.14'
> my_str3 = 'coding'
> my_str4 = "coding"
> ```

- 따옴표가 포함된 문자열을 사용하고 싶을 경우 서로 다른 따옴표를 함께 사용

> ```
> print("Let's go!")
> print('I said, "Hello!"')
> ```

- 여러줄 표현 -> 같은 따옴표를 세번씩 사용

> ```
> my_str = """버스
>             지하철
>             택시
>          """
> ```

### 포맷팅

> % 사용
>
> - % 연사자를 이용해 문자열에 숫자, 문자열 등을 대입
> - %d : 정수형 숫자
> - %f : 실수형 숫자
> - %s : 문자열
>
> ```
> print('My name is %s' % 'Tom')
> My name is Tom
> print('x = %d, y = %d' % (1, 2))
> x = 1, y = 2
> print('%d x %d = %d' % (2, 3, 2 * 3))
> 2 x 3 = 6
> ```

> { } 사용
>
> - '{}'.format()
> - 포맷팅을 수행하는 문자열 메소드
> - 괄호 안에 숫자를 넣어 순서 지정 가능
>
> ```
> print('My name is {}'.format('Tom'))
> My name is Tom
> print('{} x {} ={}'.format(2, 3, 2 * 3))
> 2 x 3 = 6
> print('{1} x {0} ={2}'.format(2, 3, 2 * 3))  # 괄호 안의 숫자는 순서를 지정
> 3 x 2 = 6
> ```

### 인덱싱

> - index를 이용해 각 문자에 접근 (공백 포함, 음수 가능)
> - 음수를 사용할 경우 가장 뒤에서 거꾸로 셈
>
> ```
> alphabet = 'abcde'
> print(alphabet[0])
> a
> print(alphabet[5])
> string index out of range error 발생, 없는 index
> print(alphabet[-1])
> e
> ```

### 슬라이싱

> - : 콜론을 사용하여 여러값을 한 번에 잘라옴, [startIdx:endIdx]
> - 앞/뒤 숫자 생략 가능
>
> ```
> my_str = 'Hello Python!'
> print(my_str[0:2])
> He
> print(my_str[3:7])
> lo P
> my_name = '김왼손의 왼손코딩'
> print(my_name[5:7])
> 왼손
> my_name[:2]
> 김왼
> my_name[7:]
> 코딩
> ```

### string.split() 메서드

> - 공백 기준으로 분리
>
> ```
> my_name = '김왼손의 왼손코딩'
> print(my_name.split())
> ['김왼손의', '왼손코딩']
> splitNm = my_name.split()
> print(splitNm[0])
> 김왼손의
> ```

### 독스트링 (document String)

> - 문서화 문자열(document string)
> - 함수주석
> - 보통 큰 따옴표 3개 사용
>
> ```
> def 함수이름(인자1, ...):
>    """함수에 대한 설명"""
>    실행할 명령1
>    실행할 명령2
>    ...
>    return 결과
> ```

### end , print('', end='')

> - print() 함수에서 출력의 끝을 지정
> - 기본 값은 줄바꿈(\n), 개행문자가 아닌 다른 문자를 지정하고가 할 때 사용
> - 특정 기능을 수행하기 위해 미리 지정하여 사용
>
> ```
> print("가")
> print("가", end="//")
> print("나")
> 가
> 가//나
> ```

> - 문서화 문자열(document string)
> - 함수주석
> - 보통 큰 따옴표 3개 사용
>
> ```
> def 함수이름(인자1, ...):
>    """함수에 대한 설명"""
>    실행할 명령1
>    실행할 명령2
>    ...
>    return 결과
> ```

## 불린 Boolean

- 논리 연산자 (T/F)

> ```
> my_bool1 = True  # True
> my_bool2 = False  # False
> my_bool3 = 1 < 2  # True
> my_bool4 = 1 == 2  # False
> ```

## 리스트 List

- 여러 값을 저장
- 값의 변경이 가능하며, 순서가 있다.

> ```
> my_list = []  # []
> my_list.append(123)  # [123]
> my_list.append('abc') # [123, 'abc']
> my_list.append(True)  # [123, 'abc', True]
> animals =['코알라', '하이에나', '바다소', '땅다람쥐', '바다코끼리', '스컹크', '아나콘다']
> print(animals[1:3])
> ['하이에나', '바다소']
> del animals[2] #delete , sort, count 등 많이 있음
> print(animals[1:3])
> ['하이에나', '땅다람쥐']
> ```

## 튜플 Tuple

- 여러 값을 저장
- 값의 변경이 **불가**하며, 순서가 있다.
- 괄호를 사용하지 않아도 된다

> ```
> my_tuple1 = ()
> my_tuple2 = (1,)
> my_tuple3 = ('a', 'b', 'c')
> my_tuple4 = 3.14, 'Python', True
> ```

### 패킹, 언패킹(packing, unpacking)

- 패킹(packing) : 여러 값을 한 번에 묶는 것
- 언패킹(unpacking) : 묶여 있는 값을 풀어 놓는 것

> ```
> tp = 1,2,3
> tmp1 , tmp2 , tmp3= tp  # 선언되는 변수의 수와 튜플의 size는 같아야 한다, 안그럼 error 발생
> print(tmp1)
> 1
> print(tmp2)
> 2
>
> 두 값을 서로 변경할 때도 사용
> num1 = 1
> num2 = 2
> num1, num2 = num2, num1
> print(num1, nul2)
> 2 1
> ```

## 형변환

- int()

> ```
> print(int(3.14))
> 3
> ```

- float()

> ```
> print(float(3))
> 3.0
> ```

- str()

> ```
> print(str(3.0))
> 3.0
> print(type(str(3.0)))
> <class 'str'>
> ```

- list(string)

> ```
> print(list('3.0'))
> ['3','.','0']]
> ```
