/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "example";

export interface GreeterRequest {
  name: string;
  lastName?: string | undefined;
}

export interface GreeterResponse {
  greeting: string;
}

function createBaseGreeterRequest(): GreeterRequest {
  return { name: "", lastName: undefined };
}

export const GreeterRequest = {
  encode(message: GreeterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.lastName !== undefined) {
      writer.uint32(18).string(message.lastName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GreeterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGreeterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.lastName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GreeterRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      lastName: isSet(object.lastName) ? globalThis.String(object.lastName) : undefined,
    };
  },

  toJSON(message: GreeterRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.lastName !== undefined) {
      obj.lastName = message.lastName;
    }
    return obj;
  },
};

function createBaseGreeterResponse(): GreeterResponse {
  return { greeting: "" };
}

export const GreeterResponse = {
  encode(message: GreeterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.greeting !== "") {
      writer.uint32(10).string(message.greeting);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GreeterResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGreeterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.greeting = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GreeterResponse {
    return { greeting: isSet(object.greeting) ? globalThis.String(object.greeting) : "" };
  },

  toJSON(message: GreeterResponse): unknown {
    const obj: any = {};
    if (message.greeting !== "") {
      obj.greeting = message.greeting;
    }
    return obj;
  },
};

export type ExampleServiceDefinition = typeof ExampleServiceDefinition;
export const ExampleServiceDefinition = {
  name: "ExampleService",
  fullName: "example.ExampleService",
  methods: {
    /** Unary RPC method for greeting */
    greeter: {
      name: "Greeter",
      requestType: GreeterRequest,
      requestStream: false,
      responseType: GreeterResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ExampleServiceImplementation<CallContextExt = {}> {
  /** Unary RPC method for greeting */
  greeter(request: GreeterRequest, context: CallContext & CallContextExt): Promise<GreeterResponse>;
}

export interface ExampleServiceClient<CallOptionsExt = {}> {
  /** Unary RPC method for greeting */
  greeter(request: GreeterRequest, options?: CallOptions & CallOptionsExt): Promise<GreeterResponse>;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
