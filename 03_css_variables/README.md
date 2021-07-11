# 자바스크립트 30 - CSS Variables 🌍

- Spacing, Blur, Base Color 항목을 통해 보이는 이미지를 바로바로 바꿀 수 있다.

## 배운 점

### 1. :root, --변수명, var()

- CSS에서 특정 설정을 저장해놓고 계속 사용하고자 할 때, 혹은 그 속성에 의미를 붙이고 계속 사용하고 싶을 때 :root 가상선택자를 쓴다.
- :root는 최상위 엘리먼트를 의미한다. HTML의 <html> 태그와 비슷한 위치라고 보면 된다. 변수를 만드는 방법은 다음과 같다.

```CSS
:root {
  --blue: #007bff;
  --red: #DC3545;
}
```

- 그리고 이 변수를 사용할 때는 다음과 같이 하면 된다.

```CSS
.container {
  background-color: var(--red);
}
```

### 2. <label> 태그

- label 태그는 input과 연관되어 사용할 수 있다. 이 때 label 태그 안에는 for, input 태그 안에는 id에 같은 이름을 넣어서 서로를 이어준다.
- 처음에는 input 태그 안에 name과 id 둘 다 입력해야하는 것으로 알고 있었는데, name은 없어도 괜찮다는 사실을 알게 됐다.

```HTML
<label for="cheese">Cheese</label>
<input type="button" id="cheese">
```

### 3-1. change, mousemove

```javascript
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
```

- 본 강의에서 Spacing, Blur 부분의 range를 움직일 때마다 값이 실시간으로 바뀌도록 설정하기 위해 change 와 mousemove 이벤트를 동시에 만들었다.
- change는 Value값이 변경되었을 때 발생하는 이벤트이다. input, textarea, select 태그 등이 그 예다.
- mousemove는 마우스 위치 값이 바뀔 때마다 이벤트가 발생한다. 여기서는 range가 변경될 때마다 인식하는 용도로 사용했다.
-

### 3-2. forEach

- forEach를 좀 더 깊이 이해하기 위해 파고들다 알게 된 사실들부터 역순으로 정리해보고자 한다.
- 우선 동기, 비동기의 의미를 알아야한다고 생각한다.

* 동기(synchronous)란 국어사전에서는 '같은 시기, 또는 같은 기간'이라는 뜻을 갖고 있으며, 영어로는 'happening, existing, or arising at precisely the same time'의 의미라고 한다.

* 즉 동시에 작업을 진행한다는 개념이라고 보통 이야기하지만 찾아보니 현재 작업의 응답과 다음 작업의 요청의 타이밍이 일치해서 동시에 일어나는 것처럼 보이는 것으로 해석하는게 맞는 것 같다.
* 정리하자면 하나로 연결되어 쭈우욱 이어져서 프로그램이 진행되는거라 그걸 동시에 일어난다고 표현한 것이지 경주마가 출발선에서 '준비, 시작!' 하고 출발해 실시간으로 진행되는 개념은 아닌 것이다. 그리고 상위 프로세스는 하위 프로세스가 끝날 때까지 기다렸다가 하위 프로세스가 끝나면 마지막에 끝낼 수 있다는 특징이 있다. 이상한 비유이긴 하지만 한 회사의 사장이 제일 일찍 와서 직원들에게 일을 지시해서 시키고 직원들이 일을 다 끝내고 퇴근하면 그 때서야 퇴근하는 느낌..이랄까?
