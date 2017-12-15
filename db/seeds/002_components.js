exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex("Component").del().then(function() {
		// Inserts seed entries
		return knex("Component").insert([
			{
				status: "active",
				code: `class Component extends React.Component {
              render() {
                return (
                  <div className='first'> <p>Hi there friend.</p> </div>
                );
              }
            }`,
				css:
					"p {color: black; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
					" width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
				test: null,
				parent_component_id: null,
				clone_component_id: null,
				language: "JavaScript",
				framework: "React",
				privacy: "public",
				title: "Great form for login built with react",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
				component_picture: "https://s3-us-west-1.amazonaws.com/coderhive/component_1.jpeg",
				owner_user_id: 1,
				score: 2
			},
			{
				status: "active",
				code: `class Component extends React.Component {
              render() {
                return (
                  <div className='first'> <p>Hi there friend. HOW EXCITING</p> </div>
                );
              }
            }`,
				css:
					"p {color: white; font-weight: bold; font-size: 30px;} .first {background-color: black;" +
					" width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
				test: null,
				parent_component_id: null,
				clone_component_id: null,
				language: "JavaScript",
				framework: "React",
				privacy: "public",
				title: "My little button",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
				component_picture: "https://s3-us-west-1.amazonaws.com/coderhive/component_2.jpeg",
				owner_user_id: 1,
				score: 0
			},
			{
				status: "active",
				code: `class Component extends React.Component {
              render() {
                return (
                  <div className='first'> <p>Hi!</p> </div>
                );
              }
            }`,
				css:
					"p {color: white; font-weight: bold; font-size: 60px;} .first {background-color: blue;" +
					" width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
				test: null,
				parent_component_id: null,
				clone_component_id: null,
				language: "JavaScript",
				framework: "React",
				privacy: "public",
				title: "Big Layout",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum," +
					" faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
				component_picture: "https://s3-us-west-1.amazonaws.com/coderhive/component_3.jpeg",
				owner_user_id: 2,
				score: 0
			},
			{
				status: "active",
				code: `class Component extends React.Component {
              render() {
                return (
                  <div className='first'> <p>Not very creative here</p> </div>
                );
              }
            }`,
				css:
					"p {color: red; font-weight: bold; font-size: 20px;} .first {background-color: orange;" +
					" width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
				test: null,
				parent_component_id: null,
				clone_component_id: null,
				language: "JavaScript",
				framework: "React",
				privacy: "public",
				title: "Navbar (blue)",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
				component_picture: "https://s3-us-west-1.amazonaws.com/coderhive/component_4.jpeg",
				owner_user_id: 2,
				score: 4
			},
			{
				status: "active",
				code: `class Component extends React.Component {
              render() {
                return (
                  <div className='first'> <p>Hi there friend.</p> </div>
                );
              }
            }`,
				css:
					"p {color: blue; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
					" width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
				test: null,
				parent_component_id: null,
				clone_component_id: null,
				language: "JavaScript",
				framework: "React",
				privacy: "public",
				title: "Login Form React",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
				component_picture: "https://s3-us-west-1.amazonaws.com/coderhive/component_5.jpeg",
				owner_user_id: 3,
				score: 2
			},
			{
				status: "active",
				code: `class Component extends React.Component {
              render() {
                return (
                  <div className='first'> <p>Hi there friend.</p> </div>
                );
              }
            }`,
				css:
					"p {color: black; font-size: 30px;} .first {background-color: lightblue;" +
					" width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
				test: null,
				parent_component_id: null,
				clone_component_id: null,
				language: "JavaScript",
				framework: "React",
				privacy: "public",
				title: "Coolest Table",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
				component_picture: "https://s3-us-west-1.amazonaws.com/coderhive/component_6.jpeg",
				owner_user_id: 3,
				score: 2
			},
			{
				status: "active",
				code: `class Component extends React.Component {
              render() {
                return (
                  <div className='first'> <p>Hi there friend.</p> </div>
                );
              }
            }`,
				css:
					"p {color: white; font-weight: bold; font-size: 50px;} .first {background-color: lightblue;" +
					" width: 200px; padding: 30px; text-align: center; margin: 0 auto;}",
				test: null,
				parent_component_id: null,
				clone_component_id: null,
				language: "JavaScript",
				framework: "React",
				privacy: "public",
				title: "Last Table You'll Ever Need",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum," +
					" faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
				component_picture: "https://s3-us-west-1.amazonaws.com/coderhive/component_7.jpeg",
				owner_user_id: 4,
				score: 3
			},
			{
				status: "active",
				code: `class Component extends React.Component {
              render() {
                return (
                  <div className='first'> <p>Hi friend.</p> </div>
                );
              }
            }`,
				css:
					"p {color: black; font-weight: bold; font-size: 30px;} .first {background-color: red;" +
					" width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
				test: null,
				parent_component_id: null,
				clone_component_id: null,
				language: "JavaScript",
				framework: "React",
				privacy: "public",
				title: "My first Component",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
				component_picture: "https://s3-us-west-1.amazonaws.com/coderhive/component_8.jpeg",
				owner_user_id: 4,
				score: 4
			},
			{
				status: "active",
				code: `class Component extends React.Component {
              render() {
                return (
                  <div className='first'> <p>Hi there friend.</p> </div>
                );
              }
            }`,
				css:
					"p {color: orange; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
					" width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
				test: null,
				parent_component_id: null,
				clone_component_id: null,
				language: "JavaScript",
				framework: "React",
				privacy: "public",
				title: "React form",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
				component_picture: "https://s3-us-west-1.amazonaws.com/coderhive/component_9.jpeg",

				owner_user_id: 5,
				score: 2
			},
			{
				status: "active",
				code: `class Component extends React.Component {
              render() {
                return (
                  <div className='first'> <p>Hi there friend.</p> </div>
                );
              }
            }`,
				css:
					"p {color: red; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
					" width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
				test: null,
				parent_component_id: null,
				clone_component_id: null,
				language: "JavaScript",
				framework: "React",
				privacy: "public",
				title: "Template for blog",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
				component_picture: "https://s3-us-west-1.amazonaws.com/coderhive/component_10.jpeg",

				owner_user_id: 5,
				score: 0
			},
			{
				status: "active",
				code: `class Component extends React.Component {
              render() {
                return (
                  <div className='first'> <p>Hi there friend.</p> </div>
                );
              }
            }`,
				css:
					"p {color: gray; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
					" width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid red;}",
				test: null,
				parent_component_id: null,
				clone_component_id: null,
				language: "JavaScript",
				framework: "React",
				privacy: "public",
				title: "Text entry form",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
				component_picture: "https://s3-us-west-1.amazonaws.com/coderhive/component_11.jpeg",
				owner_user_id: 1,
				score: 0
			},
			{
				status: "active",
				code: `class Component extends React.Component {
              render() {
                return (
                  <div className='first'> <p>Hi there friend.</p> </div>
                );
              }
            }`,
				css:
					"p {color: purple; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
					" width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
				test: null,
				parent_component_id: null,
				clone_component_id: null,
				language: "JavaScript",
				framework: "React",
				privacy: "public",
				title: "Article Component",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
				component_picture: "https://s3-us-west-1.amazonaws.com/coderhive/component_12.jpeg",

				owner_user_id: 1,
				score: 4
			},
			{
				status: "active",
				code: `class Component extends React.Component {
              render() {
                return (
                  <div className='first'> <p>Hi there friend.</p> </div>
                );
              }
            }`,
				css:
					"p {color: black; font-weight: bold; font-size: 80px;} .first {background-color: lightblue;" +
					" width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
				test: null,
				parent_component_id: null,
				clone_component_id: null,
				language: "JavaScript",
				framework: "React",
				privacy: "public",
				title: "eCommerce Example",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum," +
					" faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
				component_picture: "https://s3-us-west-1.amazonaws.com/coderhive/component_13.jpeg",
				owner_user_id: 2,
				score: 2
			},
			{
				status: "active",
				code: `class Component extends React.Component {
              render() {
                return (
                  <div className='first'> <p>Hi there friend.</p> </div>
                );
              }
            }`,
				css:
					"p {color: yellow; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
					" width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
				test: null,
				parent_component_id: null,
				clone_component_id: null,
				language: "JavaScript",
				framework: "React",
				privacy: "public",
				title: "Favorite Styled Button",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
				component_picture: "https://s3-us-west-1.amazonaws.com/coderhive/component_14.jpeg",

				owner_user_id: 2,
				score: 2
			},
			{
				status: "active",
				code: `class Component extends React.Component {
              render() {
                return (
                  <div className='first'> <p>Hi there friend.</p> </div>
                );
              }
            }`,
				css:
					"p {color: black; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
					" width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
				test: null,
				parent_component_id: null,
				clone_component_id: null,
				language: "JavaScript",
				framework: "React",
				privacy: "public",
				title: "Blue Layout",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
				component_picture: "https://s3-us-west-1.amazonaws.com/coderhive/component_15.jpeg",
				owner_user_id: 3,
				score: 2
			},
			{
				status: "active",
				code: `class Component extends React.Component {
              render() {
                return (
                  <div className='first'> <p>Hi there friend.</p> </div>
                );
              }
            }`,
				css:
					"p {color: black; font-weight: bold; font-size: 90px;} .first {background-color: lightblue;" +
					" width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
				test: null,
				parent_component_id: null,
				clone_component_id: null,
				language: "JavaScript",
				framework: "React",
				privacy: "public",
				title: "My NavBar",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
				component_picture: "https://s3-us-west-1.amazonaws.com/coderhive/component_16.jpeg",

				owner_user_id: 3,
				score: 0
			},
			{
				status: "active",
				code: `class Component extends React.Component {
              render() {
                return (
                  <div className='first'> <p>Hi there friend.</p> </div>
                );
              }
            }`,
				css:
					"p {color: black; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
					" width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
				test: null,
				parent_component_id: null,
				clone_component_id: null,
				language: "JavaScript",
				framework: "React",
				privacy: "public",
				title: "Data Visualizer",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum," +
					" faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
				component_picture: "https://s3-us-west-1.amazonaws.com/coderhive/component_17.jpeg",
				owner_user_id: 4,
				score: 0
			},
			{
				status: "active",
				code: `class Component extends React.Component {
              render() {
                return (
                  <div className='first'> <p>Hi there friend.</p> </div>
                );
              }
            }`,
				css:
					"p {color: black; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
					" width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
				test: null,
				parent_component_id: null,
				clone_component_id: null,
				language: "JavaScript",
				framework: "React",
				privacy: "public",
				title: "Mobile Responsive Navigation",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
				component_picture: "https://s3-us-west-1.amazonaws.com/coderhive/component_18.jpeg",
				owner_user_id: 4,
				score: 3
			},
			{
				status: "active",
				code: `class Component extends React.Component {
              render() {
                return (
                  <div className='first'> <p>Hi there friend.</p> </div>
                );
              }
            }`,
				css:
					"p {color: black; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
					" width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
				test: null,
				parent_component_id: null,
				clone_component_id: null,
				language: "JavaScript",
				framework: "React",
				privacy: "public",
				title: "Music Maker Layout",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
				component_picture: "https://s3-us-west-1.amazonaws.com/coderhive/component_19.jpeg",
				owner_user_id: 5,
				score: 1
			},
			{
				status: "active",
				code: `class Component extends React.Component {
              render() {
                return (
                  <div className='first'> <p>Hi there friend.</p> </div>
                );
              }
            }`,
				css:
					"p {color: black; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
					" width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
				test: null,
				parent_component_id: null,
				clone_component_id: null,
				language: "JavaScript",
				framework: "React",
				privacy: "public",
				title: "TODO List Layout",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
				component_picture: "https://s3-us-west-1.amazonaws.com/coderhive/component_20.jpeg",
				owner_user_id: 5,
				score: 1
			}
		]);
	});
};
