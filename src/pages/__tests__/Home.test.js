import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Home } from '../Home';


describe('The Home screen', () => {

  const MockHome = () => {
    return <BrowserRouter><Home /></BrowserRouter>
  }

  it('renders the title', () => {
    render(<MockHome/>);
    const titleOfStore = screen.getByRole('heading', {
      name: /prepared for the end/i,
    });
    expect(titleOfStore).toBeInTheDocument();
  });

  it('has a call to action button', () => {
    render(<MockHome/>);
    const callToActionButton = screen.getByRole('link', {
      name: /survive the apocalypse with our top-quality survival gear/i,
    });
    expect(callToActionButton).toBeInTheDocument();
  });

  // "Don't wait until it's too late, start preparing today and shop our collection now"
});
