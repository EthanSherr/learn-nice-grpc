import { createServer } from "nice-grpc"
import {
  ExampleServiceDefinition,
  ExampleServiceImplementation,
} from "./compiled_proto/example"

const exampleServiceImpl: ExampleServiceImplementation = {
  greeter: async (input) => {
    return {
      greeting: `Hey ${input.name}`,
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
