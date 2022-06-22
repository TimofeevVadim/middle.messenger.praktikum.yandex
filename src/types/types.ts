export type Components = {
    [key: string]: () => void | string
}
export type Methods = {
    [key: string]: (any) => void
}
export type CreatePage = () => string
