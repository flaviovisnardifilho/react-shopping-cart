export function About() {
  return (
    <div className="about" data-testid='about-content'>

      <p>
        The goal of this project was built a shopping cart using react, react-router-dom and the react testing library. It's an assigment from {' '}
        <a href="https://www.theodinproject.com/lessons/node-path-javascript-shopping-cart">
          The Odin Project.
        </a>
      </p>

      <p>You can see the code on <a href="https://github.com/flaviovisnardifilho/react-shopping-cart">my GitHub.</a></p>

      <p>All images are AI generated, from <a href="https://www.bluewillow.ai/">BlueWillow.</a></p>

      <p>A good amount of the text (if not all) is from <a href="https://openai.com/blog/chatgpt/">ChatGPT.</a></p>
    </div>
  );
}
