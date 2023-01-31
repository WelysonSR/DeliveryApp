import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';

function renderWithRouter(componentRender) {
  const customHistory = createMemoryHistory();

  return {
    ...render(
      <Router history={ customHistory }>
        { componentRender }
      </Router>,
    ),
    history: customHistory,
  };
}

export default renderWithRouter;
