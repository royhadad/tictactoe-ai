const isRunningOnClient = (): boolean => {
    return typeof window !== 'undefined'
}

export default isRunningOnClient;