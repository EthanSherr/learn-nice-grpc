/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "book";

export interface Book {
  author: string;
  title: string;
}

export interface BookRequest {
}

function createBaseBook(): Book {
  return { author: "", title: "" };
}

export const Book = {
  encode(message: Book, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.author !== "") {
      writer.uint32(10).string(message.author);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Book {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.author = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.title = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Book {
    return {
      author: isSet(object.author) ? globalThis.String(object.author) : "",
      title: isSet(object.title) ? globalThis.String(object.title) : "",
    };
  },

  toJSON(message: Book): unknown {
    const obj: any = {};
    if (message.author !== "") {
      obj.author = message.author;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    return obj;
  },
};

function createBaseBookRequest(): BookRequest {
  return {};
}

export const BookRequest = {
  encode(_: BookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BookRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBookRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): BookRequest {
    return {};
  },

  toJSON(_: BookRequest): unknown {
    const obj: any = {};
    return obj;
  },
};

export type BookServiceDefinition = typeof BookServiceDefinition;
export const BookServiceDefinition = {
  name: "BookService",
  fullName: "book.BookService",
  methods: {
    /** Unary RPC method for greeting */
    getBooks: {
      name: "GetBooks",
      requestType: BookRequest,
      requestStream: false,
      responseType: Book,
      responseStream: true,
      options: {},
    },
  },
} as const;

export interface BookServiceImplementation<CallContextExt = {}> {
  /** Unary RPC method for greeting */
  getBooks(request: BookRequest, context: CallContext & CallContextExt): ServerStreamingMethodResult<Book>;
}

export interface BookServiceClient<CallOptionsExt = {}> {
  /** Unary RPC method for greeting */
  getBooks(request: BookRequest, options?: CallOptions & CallOptionsExt): AsyncIterable<Book>;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };
