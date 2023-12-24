import fs from "fs"
import { FileServiceImplementation } from "../../compiled_proto/filestream"

export const fileServiceImpl: FileServiceImplementation = {
  getFile: async function* (_) {
    const filename = "sample.mp4"

    yield {
      response: {
        $case: "metadata",
        metadata: { filename, mimeType: "video/mp4" },
      },
    }

    const filePath = `./server/files/${filename}`
    const chunkSize = 1024

    const readStream = fs.createReadStream(filePath, {
      highWaterMark: chunkSize,
    })

    for await (const buffer of readStream) {
      yield {
        response: {
          $case: "chunk",
          chunk: {
            chunkData: new Uint8Array(buffer),
          },
        },
      }
    }
  },
}
