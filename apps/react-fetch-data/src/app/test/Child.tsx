import { memo } from 'react';

export const Child = memo(() => {
  console.log('Render child');

  return <button onClick={() => console.log('Child click')}>Button</button>;
});

