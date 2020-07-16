import React from "react";

type GreetingProps = {
    name: string,
    optional?: string
}

const Greeting = ({name}: GreetingProps) => {
    return <div>hello, {name}</div>
}

export default Greeting;
