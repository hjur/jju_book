## 함수 스코프

모든 변수 선언이 함수 수준에서 이루어 짐

if문 안에서 var temp 하여도 선언은 함수 수준에서 이루어지기 때문에 값 변경<br>
function.temp == if.temp

> ```
>  function fn1(){
>   var temp = "temp1";
>       if(true){
>           var temp =  "temp2";
>       }
>   }
> ```

해당 코드를 감싼 가장 가까운 함수가 다를 경우 새로운 스코프 생성
fn1.temp =/= fn2.temp

> ```
>  function fn1(){
>   var temp = "temp1";
>       function fn2(){
>           var temp =  "temp2";
>       }
>   }
> ```

## 호이스팅 hoisting

**hoist ?** <br>
끌어올리기

호이스팅은 브라우저가 js 파싱 단계에서 확보해둘 메모리를 측정하기 위해 발생하는 단계로 <br>
소스 상 변수가 정의(선언/할당)되어 있는 경우, 자바스크립트 인터프리터가 변수의 선언을 함수(또는 전역)의 맨 위로 이동시키는 동작

> ```
>  function fn1(){
>       console.log(temp);   // 다른 문법은 이 때 에러가 발생하겠지만, js 는 undefined 발생
>       var temp = "temp1";  // 선언문은 js 엔진 구동시 가장 최우선 해석, (할당 구문은 호이스팅 안됨)
>   }
> ```

아래와 같이 동작 ↓↓↓↓↓↓↓↓↓↓↓↓↓

> ```
>  function fn1(){
>       var temp ;
>       console.log(temp);
>       temp = "temp1"
>   }
> ```

## let/const - 블록 스코프

> ```
>  function fn1(){
>       let temp = true;
>       if(1==1) {
>          let temp = false
>       }
>       console.log(temp) // true
>   }
>   console.log(temp) // ReferenceError: temp is not defined
> ```

let/const 으로 선언한 변수는 엄밀한 의미에서 호이스팅 된다고 볼 수 있다.<br>
다만 var 와 달리 TDZ(Temporary Dead Zone) 영역때문에 접근 못함

**TDZ** <br>
not be accessed in any way until the variable’s LexicalBinding is evaluated

**재할당** <br>
let : 한 블록 내에서 한 번만 가능 <br>
SyntaxError: Identifier 'a' has already been declared<br><br>
const : 재할당 불가능,불변은 아님.<br>
선언과 할당(초기화)은 함께! <br>

> ```
> const a = 3;
> a = 4; // TypeError: Assignment to constant variable.
> const obj = {};
> obj.a = 42; // OK
> const arr = [];
> arr.push(3); // OK
> ```

const 선언으로 막을 수 있는 것은 오로지 블록 내 값의 재할당 뿐이다.
