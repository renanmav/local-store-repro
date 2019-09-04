/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type App_query$ref = any;
export type App_query = {
    readonly menu: {
        readonly isOpen: boolean;
    };
    readonly " $refType": App_query$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "App_query",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "menu",
          "storageKey": null,
          "args": null,
          "concreteType": "Menu",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "isOpen",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
(node as any).hash = '6660a1067e4149c6997b7b83b1d03639';
export default node;
