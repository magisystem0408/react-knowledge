import {Component} from "react"

class Example extends Component {
    constructor(props) {
        super(props);
        // Stateの定義
        this.state = {
            switch: true,
            label: "On"
        }
    }

    changeSwitch() {
        console.log("click")

        // useState
        this.setState(prevState => {
            //return後があたらしいのstate
            return {
                switch: !prevState.switch,
                label: !prevState.switch ? "On" : "Off"
            }
        })
    }

    render() {
        //stateの呼び出し
        const {label} = this.state
        return (
            <>
                <h3>I'm class component</h3>
                <div>{label}</div>
                <button onClick={this.changeSwitch}>{label}</button>
            </>
        )
    }
}