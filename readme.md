# description

an example project using nice-grpc, a ts friendly grpc library. My ./proto/example.proto is going to produce ./compiled_proto/example.ts when you run `pnpm protos` (see more info bellow). The compiled_proto contains nice ts definitions for messages, and easy client / service stubs with lovely type definitions. See the `app.ts` which runs with `pnpm app`, which defines the service definition and starts the server. Then see `cleint.ts` which runs with `pnpm client` to send a simple request to the client. Very basic rpc.

TODOS: extend with grpc-web example

# installation

```sh
pnpm i
```

# start it up

Start up the app with

```sh
pnpm app
```

Send a message to the running grpc node server with

```sh
pnpm client
```

# protos generation

you can generate the protos with

```sh
pnpm protos
```

Which will read the `./proto/example.proto` and output `./compiled_proto/example.ts`

The `pnpm protos script` is running the following from grpc_tools_node_protoc, using nice-grpc service to ts-protos lib.

```sh
pnpm grpc_tools_node_protoc \
  --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_out=./compiled_proto \
  --ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=true,outputPartialMethods=false \
  --proto_path=./proto   ./proto/example.proto
```

### I like these ts_proto_opts because...

the ts_proto_opts can be found [here in the ts-proto readme](https://github.com/stephenh/ts-proto), but I really like `useExactTypes=true` and `outputPartialMethods=false`. useExactTypes controls whether the service implementation is returning a deep partial of the response message, and outputPartialMethods controls whether or not the inputs messages (in clients) are deep partials. In both cases I prefer not dealing with DeepPartials because it's just easier to understand. Without it you will be fine if you only return {} from a service returning {name: string} - but there will be a default "" value, it will come out like {name: ""}. this is probably good nough, and could still happen! I just don't like all the deep partials. Makes it confusing on the clientside and serviec side; is the property required? or optional?
