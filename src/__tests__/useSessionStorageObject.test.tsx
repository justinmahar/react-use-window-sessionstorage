import { renderHook } from '@testing-library/react-hooks';
import { useSessionStorageObject } from '../hooks/useSessionStorageObject';

describe('useSessionStorageObject Hook', () => {
  test('should run without crashing', () => {
    const { result } = renderHook(() => useSessionStorageObject('stats', { dragonballCount: 7 }));
    expect(result.error).toBe(undefined);
  });
});
