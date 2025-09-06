import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AlertButton } from './alert-button';

describe('AlertButton', () => {
  beforeEach(() => {});

  afterEach(() => {});

  it('should render an alert button', async () => {});

  it.only('should trigger an alert', async () => {
    const alertSpy = vi.spyOn(window, 'alert');
    render(<AlertButton />);

    const input = screen.getByLabelText('Message');
    const button = screen.getByRole('button', { name: /trigger alert/i });

    await act(async () => {
      await userEvent.clear(input);
      await userEvent.type(input, 'Hello');
      await userEvent.click(button);
    });
    expect(alertSpy).toHaveBeenCalled();
  });
});
