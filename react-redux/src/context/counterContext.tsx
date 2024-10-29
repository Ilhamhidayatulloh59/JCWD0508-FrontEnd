import { createContext, ReactNode, useContext, useState } from "react"

interface ICounterContext {
    count: number;
    increment: () => void;
    decrement: () => void;
}

const CounterContext = createContext<ICounterContext | undefined>(undefined)

interface ICounterProvider {
    children: ReactNode
}

export const CounterProvider = ({ children }: ICounterProvider) => {
    const [count, setCount] = useState<number>(0)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)

    return (
        <CounterContext.Provider value={{ count, increment, decrement }}>
            { children }
        </CounterContext.Provider>
    )
}

export const useCounter = (): ICounterContext => {
    const context = useContext(CounterContext)
    if (!context) {
        throw new Error('useCounter must be used within a CounterProvider')
    }
    return context
}