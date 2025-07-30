/* Reset some default styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  line-height: 1.6;
  color: #333;
  background: #f9f9f9;
}

header {
  background: #007BFF;
  color: white;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 2rem;
  margin-top: 0.5rem;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}

nav a:hover {
  text-decoration: underline;
}

main {
  padding: 2rem;
}

section {
  margin-bottom: 3rem;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

h2 {
  margin-bottom: 1rem;
  color: #007BFF;
}

form input, form textarea {
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

form button {
  background: #007BFF;
  color: white;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

form button:hover {
  background: #0056b3;
}

footer {
  background: #222;
  color: #aaa;
  text-align: center;
  padding: 1rem;
}