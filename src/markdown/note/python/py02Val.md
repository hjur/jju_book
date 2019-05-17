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

> -
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
> ```

## 튜플 Tuple

- 여러 값을 저장
- 값의 변경이 **불가**하며, 순서가 있다.

> ```
> my_tuple1 = ()
> my_tuple2 = (1,)
> my_tuple3 = ('a', 'b', 'c')
> my_tuple4 = 3.14, 'Python', True
> ```

## 딕셔너리 Dictionary

- 관련된 정보를 서로 연관시켜 놓은 것
- k, v로 이루어져 있다.

> ```
> my_dict = {}  # {}
> my_dict[1] = 'a'  # {1: 'a'}
> my_dict['b'] = 2  # {1: 'a', 'b': 2}
> my_dict['c'] = 'd'  # {1: 'a', 'b': 2, 'c': 'd'}
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
