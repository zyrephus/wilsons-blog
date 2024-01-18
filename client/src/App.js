import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">Wilson's Blog</a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div className="post">
        <div className="image">
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Test Image"/>
        </div>
        <div className="texts"> 
          <h2>Test Title</h2>
          <p className="info">
            <span className="author">Wilson Chen</span>
            <time>10:15, Jan. 18, 2023</time>
          </p>
          <p className="summary">This is the description of the article/blog. Write the description here.</p>
        </div>
      </div>
      <div className="post">
        <div className="image">
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Test Image"/>
        </div>
        <div className="texts"> 
          <h2>Test Title</h2>
          <p className="info">
            <span className="author">Wilson Chen</span>
            <time>10:15, Jan. 18, 2023</time>
          </p>
          <p className="summary">This is the description of the article/blog. Write the description here.</p>
        </div>
      </div>
      <div className="post">
        <div className="image">
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Test Image"/>
        </div>
        <div className="texts"> 
          <h2>Test Title</h2>
          <p className="info">
            <span className="author">Wilson Chen</span>
            <time>10:15, Jan. 18, 2023</time>
          </p>
          <p className="summary">This is the description of the article/blog. Write the description here.</p>
        </div>
      </div>
    </main>
  );
}

export default App;
