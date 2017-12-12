class RenderController {
	constructor({ componentRepository }) {
		this.componentRepository = componentRepository;
		this.generateHTML = this.generateHTML.bind(this);
	}

	async generateHTML(req, res, next) {
		try {
			const id = req.params.id;
			const component = await this.componentRepository.getById(id);
			let code = `class Component extends React.Component {
    render() {
      return (
        ${component.code}
      );
    }
  }`;
			let css = component.css;
			let html = `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>test</title>
          <style>
            ${css}
          </style>
        </head>
        <body>
          <div id="root"></div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.21.1/babel.min.js"></script>
          <script type="text/babel">
            ${code}

      ReactDOM.render(<Component />, document.getElementById("root"));
      </script>
        </body>
      </html>`;
			res.send(html);
		} catch (error) {
			console.error(error);
		}
	}
}

module.exports = RenderController;
