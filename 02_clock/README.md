# 자바스크립트 30 - 시계 ⏱

- 시, 분, 초 침이 각 시간에 맞춰 돌아가게 하는 페이지
- 침이 움직일 때마다 틱✨ 틱✨ 하는 효과와 함께 움직인다.

### 배운 점

1. cubic-bezier

- cubic-bezier() function은 CSS에서 transition 속성 혹은 transition-timing-function 속성에서
  전환 시작과 끝까지의 효과를 제어하는데 쓰인다.
- 곡선 그래프로 에니메이션이 진행되는 느낌을 설정할 수 있는데, 여기서는 ^ <- 이런 느낌의 그래프를 만들어서 침이
  넘어갔다가 다시 돌아오는 효과를 만들어 틱✨ 틱✨ 하는 모션을 만들었다.

2. transform-origin

- 어느 쪽을 중심으로 회전할지를 정하는 CSS 속성이다.
- 0%(left), 50%(center), 100%(right) 으로 회전축을 정할 수 있다. 여기서는 100%로 설정해서 시계 중심을
  기준으로 돌도록 설정했다.

3. const secondsDegrees = (seconds / 60) \* 360 + 90;

- JS의 setInterval로 매 1초마다 작동하도록 설정했으니 침의 각도를 그 때마다 바꿔주면 된다.
- 이 떄 60초(분은 60, 시는 12) 를 60으로 나눠 원을 기준으로 움직이도록 360을 곱해준다.
- 90을 더해주는건 시작점을 12부터 시작하도록 만들기 위함이다.
