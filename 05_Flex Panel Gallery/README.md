# 자바스크립트 30 - Flex Panel Gallery🖼

- 자바스크립트를 이용해 (실은 대부분은 CSS이긴 하다.) 각 장면마다 클릭하면 늘어나는 페이지를 만든다.
- 이번 편에는 사실상 자바스크립트는 클래스를 추가하는 Toggle의 역할만을 담당했다. 나머지는 CSS의 몫!

### 배운 점

1. (CSS) flex : 1 0 auto;

- flex-grow, flex-shrink, flex-basis를 한 번에 쓸 수 있는 축약형 속성.

- ex) flex: 1 1 auto; => flex-grow: 1; flex-shrink: 1; flex-basis: auto;

2. flex: 1 => flex: 5

- 기본 설정은 1로 해놓고 .open 클래스가 추가되면 5로 변경한다.
- 즉 JavaScript 토글 기능으로 각 box를 클릭하면 그 페이지가 flex-grow: 5 로 커지고 나머지 box들은 자연스럽게 조금씩 작아진다.

3. includes

```javascript
function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
```

- e.propertyName에 'flex'라는 단어가 포함돼있으면 open-active 클래스를 토글하는 기능이다.
- 그래서 작동하는 순서를 보면 먼저 .open 클래스를 통해 flex-grow가 작동하면 그 후에 'flex' 단어를 감지하고 .open-active를 작동시킨다.
- propertyName을 이렇게도 쓸 수 있다는 사실을 알게 됐다!
