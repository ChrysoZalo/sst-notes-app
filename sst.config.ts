import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";
import { StorageStack } from "./stacks/StorageStack";

export default {
  config(_input) {
    return {
      name: "notes",
      region: "eu-central-1",
    };
  },
  stacks(app) {
    app.stack(API);
    app.stack(StorageStack)
  }
} satisfies SSTConfig;
