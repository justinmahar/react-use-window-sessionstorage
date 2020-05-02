import { renderHook } from '@testing-library/react-hooks';
import { useClearSessionStorage } from '../hooks/useClearSessionStorage';

describe('useClearSessionStorage Hook', () => {
  test('should run without crashing', () => {
    const { result } = renderHook(() => useClearSessionStorage());
    expect(result.error).toBe(undefined);
  });
});
