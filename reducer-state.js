import {useState, useReducer} from "react"


// useReducerはuseStateの書き換えに使用する
// useStateは、呼び出す側時に、処理を書く。
// useReducerは、呼び出す前から、どの処理を行うか決まってる。

const ReducerState = () => {
    const [state, setState] = useState(0)

    //更新用処理を分離させることも可能
    const reducer =(prev, {type}) => {
        // if (action === "プラス") return ++prev
        // else if (action === "マイナス") return --prev
        switch (type){
            case "プラス":
                return ++prev
            case "マイナス":
                return --prev
            default:
                throw new Error("不明なactionです。")
        }
    }
    const [restate, dispatch] = useReducer(reducer, 0);


    const countUp = () => {
        setState(prev => ++prev)
    }

    const rcountUp = () => {
        //　dispatchを実行すると、useReducerの第一引数が実行される
        //　第二引数actionにdispatchでわたしたものが入る
        dispatch({type: "プラス"})
    }

    const countDown = () => {
        dispatch({type: "マイナス"})
    }

    return (
        <>
            <button onClick={countUp}>カウントアップ</button>
            <button onClick={rcountUp}>カウントアップ</button>
        </>
    )


}