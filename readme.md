## 関数型プログラミング
- 状態管理と処理を分離
  - 状態と処理は切り離す
- 純粋関数(副作用を排除する)
  - `特定の入力`には`特定の出力`を返す
- 不変性(Immutability)
  - 一度設定した値は書き換えない


## useLayoutEffectについて
```javascript
useLayoutEffect(() => {},[input]);
```
### 特徴
- `useLayoutEffect`は`useEffect`よりも先に実行される
-  `画面への反映`よりも`先に`実行されるので、ちらつきが発生した場合、使う 


## useEffect-cleanUP処理
```javascript
useEffect(() => {
  return () => {
    //  コンポーネントが削除される時に実行される
    effect
  };
}, [input]);
```


## event Type
```javascript
<div 
    onChange={()=> console.log("入力が変わった時に発火する")}
    onMouseEnter={()=> console.log("カーソルが入った")}
　　 onMouseLeave={()=> console.log("カーソルが出た")}/>
```


## class Componentのライフサイクル
### Mounting
1回目のrender()が呼ばれてDOMがレンダーされた後に1度だけ実行される
```javascript
componentDidMount()

//対応
useEffect(() => {}, []);
```
### Updating
stateが更新された直後に実行
```javascript
componentDidUpdate()

//対応
useEffect(() => {}, [val]);
```

### Unmounting
コンポーネントが破棄される直前に実行される
```javascript
componentWillUnmount()

//対応
useEffect(() => {
  return () => {...}}, []);
```


## React画面更新の流れ

### トリガー
何らかの契機にレンダリングを予約する

### レンダリング
コンポーネントを実行すること

### コミット
DOMへの更新を行う