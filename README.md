# KPF
KPF는 어떠한 특정 키가 눌렸는지를 감지해주는 기능을 갖고있습니다.


# 사용하기
**1**

먼저, KPF객체를 생성해줍니다.
```javascript
const aKey = new KPF('a');
```
여기서는 a키를 감지하기로 설정했네요.

**2**

그 다음 이용법은 간단합니다.
```javascript
console.log( aKey.test() );
```
다음을 실행하면, 현재 a키가 눌려져있는지 알수있습니다.

# 예제코드

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>KPF TEST</title>
  </head>
  <body>
    A key was pressed : <span id='aLbl'></span>
    B key was pressed : <span id='bLbl'></span>
    <script src="kpf.js"></script>
    <script>
      const aKey = new KPF('a');
      const bKey = new KPF('b');

      setInterval(()=>{
        const $ = v=>document.querySelector(v);
        $('aLbl').innerHTML = aKey;
        $('bLbl').innerHTML = bKey;
      });
    </script>
  </body>
</html>
```
위의 코드를 실행하면, 실시간으로 a키와 b키가 눌려져있는지 알려줄것입니다.
