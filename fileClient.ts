import { createChannel, createClient } from "nice-grpc"
import { FileServiceClient, FileServiceDefinition } from "./compiled_proto/filestream"


const channel = createChannel("localhost:8090")

const client: FileServiceClient = createClient(
  FileServiceDefinition,
  channel
)

const main = async () => {
  for await (const {metadata, chunk} of client.getFile({name: "foo.mp4"})) {
    if (metadata) {
      console.log("start writing file", metadata)
    } else if (chunk) {
      console.log("chunk streaming", chunk.chunkData)
    }
  }
}
main()

main()
