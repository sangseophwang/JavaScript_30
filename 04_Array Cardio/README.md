# 자바스크립트 30 - Array Cardio 🏃🏻

- Cardio란 유산소 운동(Cardiovascular Exercise)을 뜻한다. 배열 강화 훈련 정도로 해석하면 될까..?

### 배운 점

1. 1500년대에 태어난 발명가 필터링하기 (filter)

- filter란 주어진 함수의 조건에 맞는 데이터를 모아 새로운 배열로 반환하는 것이다.

```javascript
const fifteen = inventors.filter(function (inventor) {
  if ((inventor.year >= 1500) & (inventor.year < 1600)) {
    return true;
  }
});
console.table(fifteen);

// 코드 줄이기
const fifteen = inventor.filter(
  (inventer) => inventor.year >= 1500 && inventor.year < 1600
);
console.table(fifteen);
```

2. 발명가들의 성과 이름을 배열로 달라. (map)

- map이란 배열 내의 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아 새 배열을 만드는 것이다.

```javascript
const fullNames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
console.log(fullNames);
```

3.  발명가들을 생일 기준으로 내림차순으로 정렬하라. (sort)

- sort() 메서드는 배열을 적절하게 정렬한 후 배열을 반환하는 것이다.
- 아래와 같이 삼항연산자를 사용하면 코드 길이를 많이 줄일 수 있다.

```javascript
const ordered = inventors.sort(function (a, b) {
  if (a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});

const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

console.table(ordered);
```

4. 발명가들이 살아계셨던 모든 기간의 합? (reduce)

- 각 배열의 요소에 대해 reducer 함수를 실행하고, 하나의 결과값을 반환한다.
- 반환값은 누적 계산의 결과 값이라고 하는데, 각 요소의 결과를 for문과 같은 형식으로 계산해 결과를 도출하는 방법이다.
- for문과 비교하자면 inventors.reduce((i, 배열) => {return i + 각 배열 목록당 계산한 값}, i = 0); 이다.

```javascript
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
```

5. 발명가들이 살아계셨던 기간 순으로 정리해라. (sort)

- 돌아가신 날과 태어나신 날을 빼서 살아계셨던 기간을 만들었다.
- a.passed - a.year을 변수로 만들어서 작성하면 코드를 이해하기 더 쉬울 것 같다.

```javascript
const livedYear = inventors.sort((a, b) =>
  a.passed - a.year > b.passed - a.year ? -1 : 1
);

console.table(livedYear);
```

6. 이름에 'de'가 포함된 파리 대로 목록 만들기

- [...] : rest parameter, 점 3개 뒤에 오는 내용들이 배열로 저장된다. 또는 배열 안에서 사용하면 배열이 풀어진다.
- 즉 배열을 만들었다가 풀었다가 하는 스위치같은 역할을 한다.
- rest parameter로 만든 배열을 map으로 함수를 적용해 새로 배열을 만들고 거기에 filter를 거쳐 원하는 데이터만 추출한다.

```javascript
const category = document.querySelector(".mw-category");
const links = [...category.querySeelctorAll("a")];
const de = links
  .map((link) => link.textContent)
  .filter((stName) => stName.includes("de"));
```

7. 사람들의 이름을 알파벳 기준으로 분류하라. (sort)

- 첫번째 방법을 보면

```javascript
const alpha = people.sort(function (lastOne, nextOne) {
  const [aLast, aFirst] = lastOne.split(", ");
  const [bLast, bFirst] = nextOne.split(", ");
  return aLast > bLast ? 1 : -1;
});
console.log(alpha);

people.sort((a, b) => {
  return a.split(", ")[1] > b.split(". ")[1] ? 1 : -1;
});
```

8. 배열 안에 각 요소가 몇개씩 있는지 카운팅하라.

- 빈 객체를 만들고 key와 value를 받도록 설정한다. 그리고 확인될 때마다 value에 +1을 함으로써 각 요소별 개수를 확인할 수 있다.
- 리턴 값은 {item : count} 이다.

```javascript
const transportation = data.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
```
