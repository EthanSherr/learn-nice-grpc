import fs from "fs"
import { createChannel, createClient } from "nice-grpc"
import {
  FileServiceClient,
  FileServiceDefinition,
} from "../compiled_proto/filestream"

const channel = createChannel("localhost:8090")

const client: FileServiceClient = createClient(FileServiceDefinition, channel)

const main = async () => {
  let writeStream: fs.WriteStream | undefined
  for await (const { response } of client.getFile({ name: "foo.mp4" })) {
    switch (response?.$case) {
      case "metadata":
        console.log(response.metadata)
        writeStream = fs.createWriteStream(
          `./client/files/${response.metadata.filename}`
        )
        break
      case "chunk":
        writeStream?.write(response.chunk.chunkData)
        break
    }
  }
  writeStream?.end()
}

main()
