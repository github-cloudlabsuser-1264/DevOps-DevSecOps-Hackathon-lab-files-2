import { render, screen, fireEvent } from '@testing-library/react';
import WelcomePopup from './WelcomePopup';

describe('WelcomePopup', () => {
  test('renders WelcomePopup component and closes modal on button click', () => {
    render(<WelcomePopup />);

    // Assert that the heading "WELCOME" is rendered
    expect(screen.getByText(/WELCOME/i)).toBeInTheDocument();
    // Assert that the subheading "TO" is rendered
    expect(screen.getByText(/TO/i)).toBeInTheDocument();
    // Assert that the main heading is rendered
    expect(screen.getByText(/The DevSecOps Day 2 Hackathon!/i)).toBeInTheDocument();
    // Assert that the "Get Started" button is rendered
    const button = screen.getByRole('button', { name: /Get Started/i });
    expect(button).toBeInTheDocument();

    // Simulate clicking the "Get Started" button
    fireEvent.click(button);
    // Assert that the modal is closed
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
