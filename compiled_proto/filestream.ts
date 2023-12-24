/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "filestream";

export interface FileRequest {
  name: string;
}

export interface FileResponse {
  response?: { $case: "chunk"; chunk: FileChunk } | { $case: "metadata"; metadata: FileMetadata } | undefined;
}

export interface FileChunk {
  chunkData: Uint8Array;
}

export interface FileMetadata {
  filename: string;
  mimeType: string;
}

function createBaseFileRequest(): FileRequest {
  return { name: "" };
}

export const FileRequest = {
  encode(message: FileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FileRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: FileRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },
};

function createBaseFileResponse(): FileResponse {
  return { response: undefined };
}

export const FileResponse = {
  encode(message: FileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.response?.$case) {
      case "chunk":
        FileChunk.encode(message.response.chunk, writer.uint32(10).fork()).ldelim();
        break;
      case "metadata":
        FileMetadata.encode(message.response.metadata, writer.uint32(18).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.response = { $case: "chunk", chunk: FileChunk.decode(reader, reader.uint32()) };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.response = { $case: "metadata", metadata: FileMetadata.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FileResponse {
    return {
      response: isSet(object.chunk)
        ? { $case: "chunk", chunk: FileChunk.fromJSON(object.chunk) }
        : isSet(object.metadata)
        ? { $case: "metadata", metadata: FileMetadata.fromJSON(object.metadata) }
        : undefined,
    };
  },

  toJSON(message: FileResponse): unknown {
    const obj: any = {};
    if (message.response?.$case === "chunk") {
      obj.chunk = FileChunk.toJSON(message.response.chunk);
    }
    if (message.response?.$case === "metadata") {
      obj.metadata = FileMetadata.toJSON(message.response.metadata);
    }
    return obj;
  },
};

function createBaseFileChunk(): FileChunk {
  return { chunkData: new Uint8Array(0) };
}

export const FileChunk = {
  encode(message: FileChunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chunkData.length !== 0) {
      writer.uint32(10).bytes(message.chunkData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileChunk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chunkData = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FileChunk {
    return { chunkData: isSet(object.chunkData) ? bytesFromBase64(object.chunkData) : new Uint8Array(0) };
  },

  toJSON(message: FileChunk): unknown {
    const obj: any = {};
    if (message.chunkData.length !== 0) {
      obj.chunkData = base64FromBytes(message.chunkData);
    }
    return obj;
  },
};

function createBaseFileMetadata(): FileMetadata {
  return { filename: "", mimeType: "" };
}

export const FileMetadata = {
  encode(message: FileMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filename !== "") {
      writer.uint32(10).string(message.filename);
    }
    if (message.mimeType !== "") {
      writer.uint32(18).string(message.mimeType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filename = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mimeType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FileMetadata {
    return {
      filename: isSet(object.filename) ? globalThis.String(object.filename) : "",
      mimeType: isSet(object.mimeType) ? globalThis.String(object.mimeType) : "",
    };
  },

  toJSON(message: FileMetadata): unknown {
    const obj: any = {};
    if (message.filename !== "") {
      obj.filename = message.filename;
    }
    if (message.mimeType !== "") {
      obj.mimeType = message.mimeType;
    }
    return obj;
  },
};

export type FileServiceDefinition = typeof FileServiceDefinition;
export const FileServiceDefinition = {
  name: "FileService",
  fullName: "filestream.FileService",
  methods: {
    /** rpc GetFileFake (FileRequest) returns (stream FileResponse); */
    getFile: {
      name: "GetFile",
      requestType: FileRequest,
      requestStream: false,
      responseType: FileResponse,
      responseStream: true,
      options: {},
    },
  },
} as const;

export interface FileServiceImplementation<CallContextExt = {}> {
  /** rpc GetFileFake (FileRequest) returns (stream FileResponse); */
  getFile(request: FileRequest, context: CallContext & CallContextExt): ServerStreamingMethodResult<FileResponse>;
}

export interface FileServiceClient<CallOptionsExt = {}> {
  /** rpc GetFileFake (FileRequest) returns (stream FileResponse); */
  getFile(request: FileRequest, options?: CallOptions & CallOptionsExt): AsyncIterable<FileResponse>;
}

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };
