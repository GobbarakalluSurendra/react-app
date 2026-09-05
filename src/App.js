function App() {
  return (
    <div>
      <h1>Contact Form</h1>

      <form>
        <input
          type="text"
          placeholder="Enter your name"
        />

        <br />

        <input
          type="email"
          placeholder="Enter your email"
        />

        <br />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;