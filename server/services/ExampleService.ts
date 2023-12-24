import { ExampleServiceImplementation } from "../../compiled_proto/example"

export const exampleServiceImpl: ExampleServiceImplementation = {
  greeter: async (message) => {
    const { name, lastName } = message
    return {
      greeting: `hey ${[name, lastName].join(" ")}`,
    }
  },
}
