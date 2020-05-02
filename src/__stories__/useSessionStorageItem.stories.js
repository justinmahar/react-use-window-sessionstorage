import React from 'react';
import { useSessionStorageBoolean } from '../hooks/useSessionStorageBoolean';
import { useSessionStorageNumber } from '../hooks/useSessionStorageNumber';
import { useSessionStorageObject } from '../hooks/useSessionStorageObject';
import { useSessionStorageString } from '../hooks/useSessionStorageString';
import { useClearSessionStorage } from '../hooks/useClearSessionStorage';

// A Storybook is a collection of stories. Each story represents a single visual state of a component.
// Technically, a story is a function that returns something that can be rendered to screen.

// The default export defines metadata that applies to the group.
export default {
  title: 'useSessionStorage Hook',
};

// The named exports define the stories

// Needed to wrap the hook and give it visual representation.
const HookComponent = () => {
  const defaultCheese = 'Cheddar';
  const [
    favCheese,
    setFavCheese,
    favCheeseLoading,
    favCheeseAvailable,
    resetFavCheese,
    restoreFavCheese,
  ] = useSessionStorageString('favCheese', defaultCheese);
  const [
    favCheese2,
    setFavCheese2,
    favCheese2Loading,
    favCheese2Available,
    resetFavCheese2,
    restoreFavCheese2,
  ] = useSessionStorageString('favCheese', defaultCheese);
  const [
    favCheese3,
    setFavCheese3,
    favCheese3Loading,
    favCheese3Available,
    resetFavCheese3,
    restoreFavCheese3,
  ] = useSessionStorageString('favCheese', defaultCheese);

  const [
    favAnimal,
    setFavAnimal,
    favAnimalLoading,
    favAnimalAvailable,
    resetFavAnimal,
    restoreFavAnimal,
  ] = useSessionStorageString('favAnimal');
  const [
    numChickens,
    setNumChickens,
    numChickensLoading,
    numChickensAvailable,
    resetNumChickens,
    restoreNumChickens,
  ] = useSessionStorageNumber('numChickens', 3);
  const [
    isAwesome,
    setIsAwesome,
    isAwesomeLoading,
    isAwesomeAvailable,
    resetIsAwesome,
    restoreIsAwesome,
  ] = useSessionStorageBoolean('isAwesome', true);
  const [
    inventory,
    setInventory,
    inventoryLoading,
    inventoryAvailable,
    resetInventory,
    restoreInventory,
  ] = useSessionStorageObject('inventory', {
    books: [
      { title: 'Adventures of Link', ISBN: '123-4123-123' },
      { title: 'Potion Recipes', ISBN: '39138-23923-23' },
    ],
    swordCount: 1,
    inventoryFull: false,
    owner: 'Zelda',
  });

  const clearSessionStorage = useClearSessionStorage();

  return (
    <>
      <div>sessionStorage Available: {favCheeseAvailable + ''}</div>
      <div>
        Favorite Cheese (default Cheddar): {favCheeseLoading ? 'Loading...' : favCheese ? favCheese : <code>null</code>}
      </div>
      <div>
        <button onClick={() => setFavCheese('Parmesan')}>Set to Parmesan</button>{' '}
        <button onClick={() => setFavCheese('Brie')}>Set to Brie</button>{' '}
        <button onClick={() => setFavCheese(null)}>
          Set to <code>null</code>
        </button>{' '}
        <button onClick={() => resetFavCheese()} disabled={favCheese === defaultCheese}>
          Reset
        </button>{' '}
        <button onClick={() => restoreFavCheese()}>Restore</button>{' '}
      </div>
      <div>
        Favorite Cheese 2 (default Cheddar):{' '}
        {favCheese2Loading ? 'Loading...' : favCheese2 ? favCheese2 : <code>null</code>}
      </div>
      <div>
        <button onClick={() => setFavCheese2('Parmesan')}>Set to Parmesan</button>{' '}
        <button onClick={() => setFavCheese2('Brie')}>Set to Brie</button>{' '}
        <button onClick={() => setFavCheese2(null)}>
          Set to <code>null</code>
        </button>{' '}
        <button onClick={() => resetFavCheese2()} disabled={favCheese2 === defaultCheese}>
          Reset
        </button>{' '}
        <button onClick={() => restoreFavCheese2()}>Restore</button>{' '}
      </div>
      <div>
        Favorite Cheese 3 (default Cheddar):{' '}
        {favCheese3Loading ? 'Loading...' : favCheese3 ? favCheese3 : <code>null</code>}
      </div>
      <div>
        <button onClick={() => setFavCheese3('Parmesan')}>Set to Parmesan</button>{' '}
        <button onClick={() => setFavCheese3('Brie')}>Set to Brie</button>{' '}
        <button onClick={() => setFavCheese3(null)}>
          Set to <code>null</code>
        </button>{' '}
        <button onClick={() => resetFavCheese3()} disabled={favCheese3 === defaultCheese}>
          Reset
        </button>{' '}
        <button onClick={() => restoreFavCheese3()}>Restore</button>{' '}
      </div>
      <div>
        Favorite Animal (no default): {favAnimalLoading ? 'Loading...' : favAnimal ? favAnimal : <code>null</code>}
      </div>
      <div>
        <button onClick={() => setFavAnimal('Cat')}>Set to Cat</button>{' '}
        <button onClick={() => setFavAnimal('Dog')}>Set to Dog</button>{' '}
        <button onClick={() => setFavAnimal(null)}>
          Set to <code>null</code>
        </button>{' '}
        <button onClick={() => resetFavAnimal()} disabled={favAnimal === null}>
          Reset
        </button>{' '}
        <button onClick={() => restoreFavAnimal()}>Restore</button>{' '}
      </div>
      <div>
        Number of chickens (default 3):{' '}
        {numChickensLoading ? 'Loading...' : numChickens !== null ? numChickens : <code>null</code>}
      </div>
      <div>
        <button onClick={() => setNumChickens(numChickens - 1)}>-</button>{' '}
        <button onClick={() => setNumChickens(numChickens + 1)}>+</button>{' '}
        <button onClick={() => setNumChickens(null)}>
          Set to <code>null</code>
        </button>{' '}
        <button onClick={() => resetNumChickens()} disabled={numChickens === 3}>
          Reset
        </button>{' '}
        <button onClick={() => restoreNumChickens()}>Restore</button>{' '}
      </div>
      <div>
        Awesome (default true)?{' '}
        {isAwesomeLoading ? 'Loading...' : isAwesome !== null ? '' + isAwesome : <code>null</code>}
      </div>
      <div>
        <button onClick={() => setIsAwesome(!isAwesome)}>Toggle</button>{' '}
        <button onClick={() => setIsAwesome(null)}>
          Set to <code>null</code>
        </button>{' '}
        <button onClick={() => resetIsAwesome()} disabled={isAwesome !== null && isAwesome}>
          Reset
        </button>{' '}
        <button onClick={() => restoreIsAwesome()}>Restore</button>{' '}
      </div>
      <div>
        Inventory (default provided):{' '}
        {inventoryLoading ? (
          'Loading...'
        ) : inventory !== null ? (
          (() => {
            try {
              return JSON.stringify(inventory);
            } catch (e) {
              return e + '';
            }
          })()
        ) : (
          <code>null</code>
        )}
        <div>
          <button onClick={() => setInventory({ hi: 'there' })}>
            Set to <code>{`{ hi: "there" }`}</code>
          </button>{' '}
          <button onClick={() => setInventory(null)}>
            Set to <code>null</code>
          </button>{' '}
          <button onClick={() => resetInventory()}>Reset</button>{' '}
          <button onClick={() => restoreInventory()}>Restore</button>{' '}
        </div>
      </div>
      <div>
        <p>
          <button
            onClick={() =>
              sessionStorage
                ? resetFavCheese() ||
                  resetFavCheese2() ||
                  resetFavCheese3() ||
                  resetFavAnimal() ||
                  resetNumChickens() ||
                  resetIsAwesome() ||
                  resetInventory()
                : undefined
            }
          >
            Reset All
          </button>{' '}
        </p>
      </div>
      <div>
        Clear all using hook (synchronizes): <button onClick={e => clearSessionStorage()}>Clear</button>
      </div>
      <div>
        <p>
          The &quot;Reset&quot; button calls the <code>reset</code> function returned by the hook, which resets the hook
          value back to the default (or <code>null</code> if no default was provided).
        </p>
        <p>
          Local Storage uses <code>null</code> to represent a missing value, so setting a value to <code>null</code>{' '}
          will also cause it to fall back to a default, if present.
        </p>
        <p>
          If something changes sessionStorage outside the hook (such as calling <code>sessionStorage.clear()</code> to clear
          all keys/values), React has no idea this is happening. You&apos;ll need a way to restore the hook items to the
          actual state in sessionStorage. To accomplish this, you can use the <code>restore</code> function returned by
          the hook.
        </p>
        <p>
          The following buttons change sessionStorage outside of the hook (React can&apos;t see these changes):
          <br />
          <button onClick={() => (sessionStorage ? sessionStorage.clear() : undefined)}>
            <code>sessionStorage.clear()</code>
          </button>{' '}
          <button onClick={() => (sessionStorage ? sessionStorage.setItem('favCheese', 'Gouda') : undefined)}>
            Set Cheese
          </button>{' '}
          <button onClick={() => (sessionStorage ? sessionStorage.setItem('favAnimal', 'Koala') : undefined)}>
            Set Animal
          </button>
        </p>
      </div>
      <div>
        <p>
          This button restores all hooks from sessionStorage using <code>restore</code>:<br />
          <button
            onClick={() =>
              sessionStorage
                ? restoreFavCheese() ||
                  restoreFavCheese2() ||
                  restoreFavCheese3() ||
                  restoreFavAnimal() ||
                  restoreNumChickens() ||
                  restoreIsAwesome() ||
                  restoreInventory()
                : undefined
            }
          >
            Restore All
          </button>{' '}
        </p>
      </div>
    </>
  );
};

export const SessionStorageStory = () => <HookComponent />;
SessionStorageStory.story = {
  name: 'SessionStorage',
};
