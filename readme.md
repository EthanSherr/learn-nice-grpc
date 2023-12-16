# Learning how to use nice-grpc :)

Finally a grpc framework that's just nice. [link](https://github.com/deeplay-io/nice-grpc/tree/master/packages/nice-grpc)

Run it with:

```sh
./node_modules/.bin/grpc_tools_node_protoc   --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto   --ts_proto_out=./compiled_proto   --ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false   --proto_path=./proto   ./proto/example.proto
```

or like

```sh
pnpm grpc_tools_node_protoc \
  --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_out=./compiled_proto \
  --ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false \
  --proto_path=./proto   ./proto/example.proto
```

```sh
pnpm grpc_tools_node_protoc \
  --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_out=./compiled_proto \
  --ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=true \
  --proto_path=./proto   ./proto/example.proto
```

```sh
pnpm grpc_tools_node_protoc \
  --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_out=./compiled_proto \
  --ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=true,useOptionals=none \
  --proto_path=./proto   ./proto/example.proto
```

<!-- I like this one because outputPartialMethods=false makes it so my client & service implementation methods type check on the message, not a DeepPartial of the messages -->

```sh
pnpm grpc_tools_node_protoc \
  --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_out=./compiled_proto \
  --ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false,outputPartialMethods=false \
  --proto_path=./proto   ./proto/example.proto
```

the ts_proto_opts come from [ts-proto](https://github.com/stephenh/ts-proto)
