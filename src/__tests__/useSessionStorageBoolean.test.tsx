import { renderHook } from '@testing-library/react-hooks';
import { useSessionStorageBoolean } from '../hooks/useSessionStorageBoolean';

describe('useSessionStorageBoolean Hook', () => {
  test('should run without crashing', () => {
    const { result } = renderHook(() => useSessionStorageBoolean('isAwesome', true));
    expect(result.error).toBe(undefined);
  });
});
