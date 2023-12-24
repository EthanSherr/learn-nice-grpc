import { createChannel, createClient } from "nice-grpc"
import {
  ExampleServiceClient,
  ExampleServiceDefinition,
  GreeterRequest,
} from "../compiled_proto/example"

const channel = createChannel("localhost:8090")

const client: ExampleServiceClient = createClient(
  ExampleServiceDefinition,
  channel
)

const main = async () => {
  const result = await client.greeter({
    name: "Ethan",
    lastName: undefined,
  })
  console.log("result", result)
}

main()
