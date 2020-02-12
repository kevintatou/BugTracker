/*
 * BugPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H2 from 'components/H2';
import messages from './messages';
import CenteredSection from './CenteredSection';


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

      <div>
      <CenteredSection>
          <H2>
            <FormattedMessage {...messages.helloWorld} />
          </H2>

        </CenteredSection>
      </div>
     

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

