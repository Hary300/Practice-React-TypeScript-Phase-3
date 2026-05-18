import { useState } from 'react';

type InitialData = {
  name: string;
  email: string;
  age: number | '';
};

const initialData: InitialData = {
  name: '',
  email: '',
  age: '',
};

export default function ProfileForm() {
  const [formData, setFormData] = useState<InitialData>(initialData);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    const key = name as keyof InitialData;
    if (key === 'age') {
      setFormData((prev) => ({
        ...prev,
        [key]: value === '' ? '' : Number(value),
      }));
      return;
    }
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  console.log(formData);
  return (
    <form>
      <h2>Profile Form</h2>
      <div className='name'>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          name='name'
          id='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Enter your name...'
        />
      </div>

      <div className='email'>
        <label htmlFor='email'>Email: </label>
        <input
          type='text'
          name='email'
          id='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter you email...'
        />
      </div>

      <div className='age'>
        <label htmlFor='age'>Age: </label>
        <input
          type='number'
          name='age'
          id='age'
          value={formData.age}
          onChange={handleChange}
          placeholder='Enter your age...'
        />
      </div>
    </form>
  );
}
