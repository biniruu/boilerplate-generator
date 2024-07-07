const getSocketFile = () => {
  /**
   * Checkout the {@link https://socket.io/docs/v4/typescript/#types-for-the-server tutorial} on the Socket.io website.
   */
  const file = `export interface ServerToClientEvents {
  noArg: () => void
  basicEmit: (a: number, b: string, c: Buffer) => void
  withAck: (d: string, callback: (e: number) => void) => void
  hello: (prop: string) => void
}

export interface ClientToServerEvents {
  hello: () => void
}

export interface InterServerEvents {
  ping: () => void
}

export interface SocketData {
  name: string
  age: number
}`

  return file
}

export default getSocketFile
