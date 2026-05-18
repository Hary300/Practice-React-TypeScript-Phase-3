import Alert from './components/Alert';
import Section from './components/Section';

function App() {
  return (
    <>
      <Section title='Profile'>
        <p>Name: Ahmad</p>
        <button className='bg-blue-500 px-4 py-2 rounded-2xl text-white'>
          Edit
        </button>
      </Section>
      <Alert type='success'>Data saved successfully</Alert>
      <Alert type='error'>Failed to save data</Alert>
    </>
  );
}

export default App;
