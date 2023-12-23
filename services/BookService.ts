import { BookServiceImplementation } from "../compiled_proto/book"

export const bookServiceImpl: BookServiceImplementation = {
  getBooks: async function* (_) {
    for (let i = 0; i < 100; i++) {
      yield {
        author: "Ethan",
        title: "Sherr"
      }
    }
  }
}