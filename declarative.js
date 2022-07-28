//関数型プログラム
const Declarative = () => {
    const nums = [1, 2, 3];
    const sum = (array) => array.reduce((acc, curr) => acc + curr)
}

const PureFunction = () => {
    //純粋関数
    // fn(決まった引数)　-> 決まった戻り値
    //・関数外に影響を及ぼさない
    //・引数で渡された値を変更しない
    const val1 = 2
    const val2 = 2

    const Pure = (val1, val2) => val1 + val2;

    //外部スコープからval2をとってきている
    const noPure = (val1) => val1 + val2;

    return (<>
            <div>純粋関数{Pure(val1, val2)}</div>
            <div>純粋関数でない{noPure(val1)}</div>
        </>
    )
}

