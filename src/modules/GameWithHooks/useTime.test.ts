import { renderHook } from "@testing-library/react";
import { useTime } from "./useTime";
import { act } from "react";

const moveTimersByTime = (timeMustPass: number): void => {
    for(let i = 0; i < timeMustPass; i++) {
        act(() => {
            jest.advanceTimersByTime(1000);
        });
        
    }
}

describe('useTime test cases',  () => {
    it('Time works fine when game is started', () => {
        jest.useFakeTimers();

        const { result } = renderHook(() => useTime(true, false));

        const timeMustPass = 5;

        moveTimersByTime(timeMustPass);

        expect(result.current[0]).toBe(timeMustPass);
    });
    it('Timer stops when game is over', () => {
        jest.useFakeTimers();

        const { result } = renderHook(() => useTime(true, true));

        const timeMustPass = 5;

        moveTimersByTime(timeMustPass);

        expect(result.current[0]).toBe(0);
    });
    it('Timer full lifecycle', () => {
        jest.useFakeTimers();

        const { result, rerender} = renderHook(
            ({ isGameStarted, isGameOver }) => useTime(isGameStarted, isGameOver),
            {
                initialProps: { isGameStarted: false, isGameOver: false }
            }
        );
        moveTimersByTime(5);
        expect(result.current[0]).toBe(0);

        rerender({ isGameStarted: true, isGameOver: false });
        moveTimersByTime(5);
        expect(result.current[0]).toBe(5);

        rerender({ isGameStarted: true, isGameOver: true });
        moveTimersByTime(5);
        expect(result.current[0]).toBe(5);

        act(() => {
            //reset function
            result.current[1]();
        });

        expect(result.current[0]).toBe(0);
    });
});