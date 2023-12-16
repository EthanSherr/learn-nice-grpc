# Learning how to use nice-grpc :)

Finally a grpc framework that's just nice. [link](https://github.com/deeplay-io/nice-grpc/tree/master/packages/nice-grpc)

Run it with:

```sh
pnpm grpc_tools_node_protoc \
  --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_out=./compiled_proto \
  --ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=true,outputPartialMethods=false \
  --proto_path=./proto   ./proto/example.proto
```

or `pnpm protos` script.

PS:
the ts_proto_opts come from [ts-proto](https://github.com/stephenh/ts-proto), but I really like `useExactTypes=true` and `outputPartialMethods=false`. useExactTypes controls whether the service implementation is returning a deep partial of the response message, and outputPartialMethods controls whether or not the inputs messages (in clients) are deep partials. In both cases I prefer not dealing with DeepPartials because it's just easier to understand. Without it you will be fine if you only return {} from a service returning {name: string} - but there will be a default "" value, it will come out like {name: ""}. this is probably good nough, and could still happen! I just don't like all the deep partials. Makes it confusing on the clientside and serviec side; is the property required? or optional?
