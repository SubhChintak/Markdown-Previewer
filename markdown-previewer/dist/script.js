function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const defaultMarkdown = `# React Markdown Previewer

## Type your Markdown in the Editor!
<br><br>

### Main functionality

- Preview window updates real time with markdown syntax
- The editor has some predefined input on page load
- BONUS: Use &lt;br&gt; for line breaks

<br>

\`Is the syntax highlighting even working?\`
\`\`\`javascript
let s = "JavaScript syntax highlighting";
alert(s);
\`\`\`
<br>

> “If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.”
― Marcus Aurelius, Meditations 
<br>

![react logo](https://i.postimg.cc/Bv9y8sBZ/react-logo.png)
<br>

Coded by **Stahlone**, 2019 for [freeCodeCamp](https://www.freecodecamp.org) Front End Libraries Challenges
`;

// Line breaks allowed 
marked.setOptions({
  breaks: true });


// Line breaks allowed 
marked.setOptions({
  breaks: true });



class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      text: defaultMarkdown });_defineProperty(this, "onChange",


    e => {
      this.setState({
        text: e.target.value });

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "App" }, /*#__PURE__*/
      React.createElement("h1", { id: "title" }, "Markdown Previewer"), /*#__PURE__*/
      React.createElement("textarea", {
        id: "editor",
        value: this.state.text,
        onChange: this.onChange,
        placeholder: "Enter Markdown..." }), /*#__PURE__*/
      React.createElement("div", {
        id: "preview",
        dangerouslySetInnerHTML: { __html: marked(this.state.text) } })));



  }}
;


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));