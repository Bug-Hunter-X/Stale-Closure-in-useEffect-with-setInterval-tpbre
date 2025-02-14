```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval. The callback function doesn't capture the latest 'setCount' function.
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1); // Correct way: Use functional update
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```