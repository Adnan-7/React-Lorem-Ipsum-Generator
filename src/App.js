import React, { useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum</h3>
      <form className='lorem-form'>
        <label htmlFor='count'>paragraphs</label>
        <input type='number' name='count' id='count' />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>

      <article>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptas
          incidunt, a eius tenetur adipisci delectus culpa totam neque unde.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptas
          incidunt, a eius tenetur adipisci delectus culpa totam neque unde.
        </p>
      </article>
    </section>
  );
}

export default App;
