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
