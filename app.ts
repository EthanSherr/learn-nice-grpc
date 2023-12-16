import { createServer } from "nice-grpc"
import {
  ExampleServiceDefinition,
  ExampleServiceImplementation,
} from "./compiled_proto/example"

const exampleServiceImpl: ExampleServiceImplementation = {
  greeter: async (message) => {
    const { name, lastName } = message
    return {
      greeting: `hey ${[name, lastName].join(" ")}`,
    }
  },
}

const main = async () => {
  const PORT = `8090`
  const server = createServer()

  server.add(ExampleServiceDefinition, exampleServiceImpl)

  await server.listen(`0.0.0.0:${PORT}`)
  console.log("listening on port ", PORT)
}

main()
