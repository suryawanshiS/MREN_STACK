import React from 'react'; // Removed unused `useState`
import useFetch from './hooks/useFetch';
import useLocalStorage from './hooks/useLocalStorage';
import useWindowSize from './hooks/useWindowSize';
import usePrevious from './hooks/usePrevious';
import useDebounce from './hooks/useDebounce';

const ExampleComponent = () => {
  const { data, loading, error } = useFetch('https://api.example.com/data');
  const [count, setCount] = useLocalStorage('count', 0);
  const { width, height } = useWindowSize();
  const previousCount = usePrevious(count);
  const debouncedCount = useDebounce(count, 500);
  
  return (
    <div>
      <h1>Example Component</h1>
      <p>Window size: {width} x {height}</p>
      <p>Current count: {count}</p>
      <p>Previous count: {previousCount}</p>
      <p>Debounced count: {debouncedCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default ExampleComponent;
