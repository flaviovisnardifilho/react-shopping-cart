import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { About } from '../About';

describe('The About screen', () => {
  const MockAbout = () => {
    return (
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
  };

  it('renders', () => {
    render(<MockAbout/>)
    const about = screen.getByTestId('about-content')
    expect(about).toBeInTheDocument()
  })
});
