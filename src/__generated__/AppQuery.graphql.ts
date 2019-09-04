/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type App_query$ref = any;
export type AppQueryVariables = {};
export type AppQueryResponse = {
    readonly __typename: string;
    readonly " $fragmentRefs": App_query$ref;
};
export type AppQuery = {
    readonly response: AppQueryResponse;
    readonly variables: AppQueryVariables;
};



/*
query AppQuery {
  __typename
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      (v0/*: any*/),
      {
        "kind": "FragmentSpread",
        "name": "App_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": [
      (v0/*: any*/),
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
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery {\n  __typename\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '432768266e0f26e782b79ac082bb6415';
export default node;
