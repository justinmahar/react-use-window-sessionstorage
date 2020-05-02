import * as React from 'react';
import { useClearSessionStorage } from '../../hooks/useClearSessionStorage';
import { useSessionStorageNumber } from '../../hooks/useSessionStorageNumber';

export function UseClearExample(): JSX.Element {
  const [val1, setVal1] = useSessionStorageNumber('val1', 0);
  const [val2, setVal2] = useSessionStorageNumber('val2', 0);
  const [val3, setVal3] = useSessionStorageNumber('val3', 0);
  const [val4, setVal4] = useSessionStorageNumber('val4', 0);
  const [val5, setVal5] = useSessionStorageNumber('val5');
  const clearSessionStorage = useClearSessionStorage();

  return (
    <div>
      <div>
        <div>
          <strong>Stored values:</strong>
          <ul>
            <li>val1: {val1}</li>
            <li>val2: {val2}</li>
            <li>val3: {val3}</li>
            <li>val4: {val4}</li>
            <li>val5 (no default): {val5}</li>
          </ul>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            setVal1(Math.random());
            setVal2(Math.random());
            setVal3(Math.random());
            setVal4(Math.random());
            setVal5(Math.random());
          }}
        >
          Generate Random Values
        </button>
      </div>
      <div>
        <button onClick={() => clearSessionStorage()}>Clear</button>
      </div>
    </div>
  );
}
