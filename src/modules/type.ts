export interface ICounter {
    number: number
}

export interface Todo {

}

export interface State {
    counter: ICounter
    todo: Todo
}

export interface CounterProps {
    number: number,

    increase(): void,

    decrease(): void
}
