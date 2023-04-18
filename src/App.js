import './App.css';

function App() {
  const title = "Welcome to the blog";
  const likes = 50;
  const link = "http://www.google.com";

  return (
    <div className="App">
      <h1>{title}</h1>
      <p>Liked by {likes} people</p>
      <a href={link}>Google</a>
    </div>
  );
}

export default App;