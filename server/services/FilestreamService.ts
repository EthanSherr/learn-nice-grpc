import fs from "fs"
import fsPromise from "fs/promises"
import { FileServiceImplementation } from "../../compiled_proto/filestream"

export const fileServiceImpl: FileServiceImplementation = {
  getFile: async function* (_) {
    const filename = "sample.mp4"
    const filePath = `./server/files/${filename}`

    const { size } = await fsPromise.stat(filePath)

    yield {
      response: {
        $case: "metadata",
        metadata: { filename, mimeType: "video/mp4", fileSize: size },
      },
    }

    const highWaterMark = 1024

    const readStream = fs.createReadStream(filePath, {
      highWaterMark,
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
