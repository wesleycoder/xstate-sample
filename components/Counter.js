export default function Counter({ counter = {}, disabled = false }) {
  return (
    <div>
      <h1>
        Count: <span>{counter.count}</span>
      </h1>
      <button onClick={() => counter.decrement()} disabled={disabled}>
        -1
      </button>
      <button onClick={() => counter.increment()} disabled={disabled}>
        +1
      </button>
      <button onClick={() => counter.reset()} disabled={disabled}>
        Reset
      </button>
    </div>
  );
}
