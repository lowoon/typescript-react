import React from 'react';
import Counter from "../components/Counter";
import {CounterProps, State} from "../modules/type";
import {Action, Dispatch} from "redux";
import {decrease, increase} from "../modules/counter";
import {connect} from "react-redux";

function CounterContainer({number, increase, decrease}: CounterProps) {
    return (
        <Counter number={number}
                 increase={increase}
                 decrease={decrease}/>
    );
}

const mapStateToProps = (state: State) => ({
    number: state.counter.number
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    increase: () => {
        dispatch(increase())
    },
    decrease: () => {
        dispatch(decrease())
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterContainer)
