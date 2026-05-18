type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <div className='border px-4 py-2 rounded-2xl space-y-2'>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
