import { FileServiceImplementation } from "../compiled_proto/filestream"

export const fileServiceImpl: FileServiceImplementation = {
  getFile: async function* (req) {
    yield {metadata: {filename: "cool.mp4", mimeType: "vid"}}
    
    for (let i = 0; i < 100; i++) {
      const arr = new Uint8Array(100)
      for (let j = 0; j < 100; j++) {
        arr[j] = Math.random() * 10
      }
      yield { chunk: { chunkData: arr }}
    }
  }
}