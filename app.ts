import { createServer } from "nice-grpc"
import {
  ExampleServiceDefinition,
} from "./compiled_proto/example"
import { BookServiceDefinition } from "./compiled_proto/book"
import { exampleServiceImpl } from "./services/ExampleService"
import { bookServiceImpl } from "./services/BookService"

const main = async () => {
  const PORT = `8090`
  const server = createServer()

  server.add(ExampleServiceDefinition, exampleServiceImpl)
  server.add(BookServiceDefinition, bookServiceImpl)

  await server.listen(`0.0.0.0:${PORT}`)
  console.log("listening on port ", PORT)
}

main()
