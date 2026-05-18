import useToggle from '../hooks/useToggle';
import { openEnvelope, closeEnvelope } from './icons/toggleIcons';

export default function ToggleOpen() {
  const { isOpen, toggle } = useToggle();

  return (
    <div>
      <h2>Toggle Open</h2>
      <div>{isOpen ? openEnvelope : closeEnvelope}</div>
      <button onClick={toggle}>{isOpen ? 'Close' : 'Open'}</button>
    </div>
  );
}
