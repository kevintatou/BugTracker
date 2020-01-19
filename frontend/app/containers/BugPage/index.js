/*
 * BugPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';

export default function BugPage() {

  return (
    <div>
      <Helmet>
        <title>Bug Page</title>
        <meta
          name="description"
          content="Bug page of React.js Boilerplate application"
        />
      </Helmet>
     

    </div>
  );
}
function getData() {
  // create a new XMLHttpRequest
  var xhr = new XMLHttpRequest()

  // get a callback when the server responds
  xhr.addEventListener('load', () => {
    // update the state of the component with the result here
    console.log(xhr.responseText)
  })
  // open the request with the verb and the url
  xhr.open('GET', 'https://dog.ceo/api/breeds/list/all')
  // send the request
  xhr.send()
}

