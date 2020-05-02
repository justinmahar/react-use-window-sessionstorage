import * as React from 'react';
import { useSessionStorageString } from '../../hooks/useSessionStorageString';

export function UseSessionStorageStringExample(): JSX.Element {
  const defaultValue = 'Zelda';
  const [enteredValue, setEnteredValue] = React.useState('');
  const [value, setValue, loading, available, reset] = useSessionStorageString('stringValue', defaultValue);
  const [value2, setValue2, loading2] = useSessionStorageString('stringValue', defaultValue);

  return (
    <div>
      {!loading && (
        <div>
          <div>
            Key "stringValue":{' '}
            <input
              type="text"
              value={enteredValue}
              onChange={e => setEnteredValue(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && setValue(enteredValue)}
            />
            <button onClick={() => setValue(enteredValue)}>Set</button>
          </div>
          <div>
            <strong>Stored value:</strong> {value}
          </div>
        </div>
      )}
      <div>
        <button onClick={() => reset()}>Reset "stringValue" to default</button>
      </div>
      <hr />
      {!loading2 && <div>Another "stringValue" hook (different hook, will synchronize): {value2}</div>}
    </div>
  );
}
