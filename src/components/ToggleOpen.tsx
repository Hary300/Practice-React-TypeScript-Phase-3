import useToggle from '../hooks/useToggle';
import { openEnvelope, closeEnvelope } from './icons/toggleIcons';

export default function ToggleOpen() {
  const { isOpen, toggle } = useToggle();

  return (
    <div>
      <h1>Toggle Open</h1>
      <div>{isOpen ? openEnvelope : closeEnvelope}</div>
      <button onClick={toggle}>{isOpen ? 'Close' : 'Open'}</button>
    </div>
  );
}
