import * as React from 'react';
import { useSessionStorageObject } from '../../hooks/useSessionStorageObject';

export function UseSessionStorageObjectExample(): JSX.Element {
  const defaultValue = { first: 'Ron', last: 'Burgundy' };
  const [enteredFirstName, setEnteredFirstName] = React.useState(defaultValue.first);
  const [enteredLastName, setEnteredLastName] = React.useState(defaultValue.last);
  const enteredObj = { first: enteredFirstName, last: enteredLastName };
  const [value, setValue, loading, available, reset] = useSessionStorageObject('objValue', defaultValue);
  const [value2, setValue2, loading2] = useSessionStorageObject('objValue', defaultValue);

  return (
    <div>
      {!loading && (
        <div>
          <div>
            Key "objValue": {'{'} first:
            <input
              type="text"
              value={enteredFirstName}
              onChange={(e) => setEnteredFirstName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && setValue(enteredObj)}
            />
            , last:
            <input
              type="text"
              value={enteredLastName}
              onChange={(e) => setEnteredLastName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && setValue(enteredObj)}
            />
            {' } '}
            <button onClick={() => setValue(enteredObj)}>Set</button>
          </div>
          <div>
            <strong>Stored value:</strong> {JSON.stringify(value)}
          </div>
        </div>
      )}
      <div>
        <button onClick={() => reset()}>Reset "objValue" to default</button>
      </div>
      <hr />
      {!loading2 && <div>Another "objValue" hook (different hook, will synchronize): {JSON.stringify(value2)}</div>}
    </div>
  );
}
