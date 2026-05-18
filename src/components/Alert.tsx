import type { ReactNode } from 'react';

type AlertProps = {
  type: 'success' | 'error';
  children: ReactNode;
};

export default function Alert({ type, children }: AlertProps) {
  return (
    <div
      className={`px-4 py-2 rounded-2xl w-fit text-white ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
    >
      {children}
    </div>
  );
}
