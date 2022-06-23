import { Child } from './Child';
import { MutableRefObject, useRef } from 'react';

export const Parent = () => {
  const ref: MutableRefObject<number> = useRef(0);

  return (
    <div>
      <button onClick={() => ref.current++}>Increment</button>
      <div>{ref.current}</div>
      <Child />
    </div>
  );
};
