import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { createQueryRendererModern } from "./relay";

const App: React.FC = () => {
  return <div>Hello world</div>;
};

const AppFragment = createFragmentContainer(App, {
  query: graphql`
    fragment App_query on Query {
      menu {
        isOpen
      }
    }
  `
});

export default createQueryRendererModern(AppFragment, App, {
  query: graphql`
    query AppQuery {
      __typename
      ...App_query
    }
  `
});

