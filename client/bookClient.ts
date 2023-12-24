import { createChannel, createClient } from "nice-grpc"
import {
  BookServiceClient,
  BookServiceDefinition,
} from "../compiled_proto/book"

const channel = createChannel("localhost:8090")

const client: BookServiceClient = createClient(BookServiceDefinition, channel)

const main = async () => {
  for await (const result of client.getBooks({})) {
    console.log("book result", result)
  }
}

main()
