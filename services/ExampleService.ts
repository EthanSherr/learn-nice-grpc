import { createServer } from "nice-grpc"
import {
  ExampleServiceImplementation,
} from "../compiled_proto/example"
import { Book, BookServiceDefinition, BookServiceImplementation } from "../compiled_proto/book"

export const exampleServiceImpl: ExampleServiceImplementation = {
  greeter: async (message) => {
    const { name, lastName } = message
    return {
      greeting: `hey ${[name, lastName].join(" ")}`,
    }
  },
}