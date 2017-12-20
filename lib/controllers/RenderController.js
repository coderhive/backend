class RenderController {
	constructor({ componentRepository }) {
		this.componentRepository = componentRepository;
		this.generateHTML = this.generateHTML.bind(this);
	}

	async generateHTML(req, res, next) {
		try {
			const id = req.params.id;
			const component = await this.componentRepository.getById(id);
			let code = component.code;
			let css = component.css;

			let html = `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>CoderHive</title>
          <style>
            html {height: 100%; width: 100%;}
            body {height: 100%; width: 100%;}
            #root {height: 100%; width: 100%; display: "flex"; justify-content: "center"; align-items: "center"}
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
