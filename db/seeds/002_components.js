exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex("Component").del().then(function () {
        // Inserts seed entries
        return knex("Component").insert([
            {
                status: "active",
                code: "<div className='first'> <p>Hi there friend.</p> </div>",
                css: "p {color: black; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
                " width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
                test: null,
                parent_component_id: null,
                clone_component_id: null,
                language: "JavaScript",
                framework: "React",
                privacy: 'public',
                title: "Component #1 Here",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
                component_picture: 'http://www.our-happy-cat.com/images/scared-cat-hiding.jpg',
                owner_user_id: 1,
                score: 2
            },
            {
                status: "active",
                code: "<div className='first'> <p>Hi there friend.</p> </div>",
                css: "p {color: black; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
                " width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
                test: null,
                parent_component_id: null,
                clone_component_id: null,
                language: "JavaScript",
                framework: "React",
                privacy: 'public',
                title: "Component #2 Here",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
                component_picture: 'http://www.our-happy-cat.com/images/scared-cat-hiding.jpg',
                owner_user_id: 1,
                score: 1
            },
            {
                status: "active",
                code: "<div className='first'> <p>Hi there friend.</p> </div>",
                css: "p {color: black; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
                " width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
                test: null,
                parent_component_id: null,
                clone_component_id: null,
                language: "JavaScript",
                framework: "React",
                privacy: 'public',
                title: "Component #3 Here!",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum," +
                " faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
                component_picture: 'http://www.our-happy-cat.com/images/scared-cat-hiding.jpg',
                owner_user_id: 2,
                score: 0
            },
            {
                status: "active",
                code: "<div className='first'> <p>Hi there friend.</p> </div>",
                css: "p {color: black; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
                " width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
                test: null,
                parent_component_id: null,
                clone_component_id: null,
                language: "JavaScript",
                framework: "React",
                privacy: 'public',
                title: "Component #4 Here!",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
                component_picture: 'http://www.our-happy-cat.com/images/scared-cat-hiding.jpg',
                owner_user_id: 2,
                score: 0
            },
            {
                status: "active",
                code: "<div className='first'> <p>Hi there friend.</p> </div>",
                css: "p {color: black; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
                " width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
                test: null,
                parent_component_id: null,
                clone_component_id: null,
                language: "JavaScript",
                framework: "React",
                privacy: 'public',
                title: "Component #5 Here",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
                component_picture: 'http://www.our-happy-cat.com/images/scared-cat-hiding.jpg',
                owner_user_id: 3,
                score: 0
            },
            {
                status: "active",
                code: "<div className='first'> <p>Hi there friend.</p> </div>",
                css: "p {color: black; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
                " width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
                test: null,
                parent_component_id: null,
                clone_component_id: null,
                language: "JavaScript",
                framework: "React",
                privacy: 'public',
                title: "Component #6 Here",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
                component_picture: 'http://www.our-happy-cat.com/images/scared-cat-hiding.jpg',
                owner_user_id: 3,
                score: 0
            },
            {
                status: "active",
                code: "<div className='first'> <p>Hi there friend.</p> </div>",
                css: "p {color: black; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
                " width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
                test: null,
                parent_component_id: null,
                clone_component_id: null,
                language: "JavaScript",
                framework: "React",
                privacy: 'public',
                title: "Component #7 Here!",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum," +
                " faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
                component_picture: 'http://www.our-happy-cat.com/images/scared-cat-hiding.jpg',
                owner_user_id: 4,
                score: 0
            },            {
                status: "active",
                code: "<div className='first'> <p>Hi there friend.</p> </div>",
                css: "p {color: black; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
                " width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
                test: null,
                parent_component_id: null,
                clone_component_id: null,
                language: "JavaScript",
                framework: "React",
                privacy: 'public',
                title: "Component #8 Here!",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
                component_picture: 'http://www.our-happy-cat.com/images/scared-cat-hiding.jpg',
                owner_user_id: 4,
                score: 0
            },
            {
                status: "active",
                code: "<div className='first'> <p>Hi there friend.</p> </div>",
                css: "p {color: black; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
                " width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
                test: null,
                parent_component_id: null,
                clone_component_id: null,
                language: "JavaScript",
                framework: "React",
                privacy: 'public',
                title: "Component #9 Here",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
                component_picture: 'http://www.our-happy-cat.com/images/scared-cat-hiding.jpg',
                owner_user_id: 5,
                score: 0
            },
            {
                status: "active",
                code: "<div className='first'> <p>Hi there friend.</p> </div>",
                css: "p {color: black; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
                " width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
                test: null,
                parent_component_id: null,
                clone_component_id: null,
                language: "JavaScript",
                framework: "React",
                privacy: 'public',
                title: "Component #10 Here",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
                component_picture: 'http://www.our-happy-cat.com/images/scared-cat-hiding.jpg',
                owner_user_id: 5,
                score: 0
            },
            {
                status: "active",
                code: "<div className='first'> <p>Hi there friend.</p> </div>",
                css: "p {color: black; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
                " width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
                test: null,
                parent_component_id: null,
                clone_component_id: null,
                language: "JavaScript",
                framework: "React",
                privacy: 'public',
                title: "Component #11 Here",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
                component_picture: 'http://www.our-happy-cat.com/images/scared-cat-hiding.jpg',
                owner_user_id: 1,
                score: 2
            },
            {
                status: "active",
                code: "<div className='first'> <p>Hi there friend.</p> </div>",
                css: "p {color: black; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
                " width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
                test: null,
                parent_component_id: null,
                clone_component_id: null,
                language: "JavaScript",
                framework: "React",
                privacy: 'public',
                title: "Component #12 Here",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
                component_picture: 'http://www.our-happy-cat.com/images/scared-cat-hiding.jpg',
                owner_user_id: 1,
                score: 1
            },
            {
                status: "active",
                code: "<div className='first'> <p>Hi there friend.</p> </div>",
                css: "p {color: black; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
                " width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
                test: null,
                parent_component_id: null,
                clone_component_id: null,
                language: "JavaScript",
                framework: "React",
                privacy: 'public',
                title: "Component #13 Here!",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum," +
                " faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
                component_picture: 'http://www.our-happy-cat.com/images/scared-cat-hiding.jpg',
                owner_user_id: 2,
                score: 0
            },
            {
                status: "active",
                code: "<div className='first'> <p>Hi there friend.</p> </div>",
                css: "p {color: black; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
                " width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
                test: null,
                parent_component_id: null,
                clone_component_id: null,
                language: "JavaScript",
                framework: "React",
                privacy: 'public',
                title: "Component #14 Here!",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
                component_picture: 'http://www.our-happy-cat.com/images/scared-cat-hiding.jpg',
                owner_user_id: 2,
                score: 0
            },
            {
                status: "active",
                code: "<div className='first'> <p>Hi there friend.</p> </div>",
                css: "p {color: black; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
                " width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
                test: null,
                parent_component_id: null,
                clone_component_id: null,
                language: "JavaScript",
                framework: "React",
                privacy: 'public',
                title: "Component #15 Here",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
                component_picture: 'http://www.our-happy-cat.com/images/scared-cat-hiding.jpg',
                owner_user_id: 3,
                score: 0
            },
            {
                status: "active",
                code: "<div className='first'> <p>Hi there friend.</p> </div>",
                css: "p {color: black; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
                " width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
                test: null,
                parent_component_id: null,
                clone_component_id: null,
                language: "JavaScript",
                framework: "React",
                privacy: 'public',
                title: "Component #16 Here",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
                component_picture: 'http://www.our-happy-cat.com/images/scared-cat-hiding.jpg',
                owner_user_id: 3,
                score: 0
            },
            {
                status: "active",
                code: "<div className='first'> <p>Hi there friend.</p> </div>",
                css: "p {color: black; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
                " width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
                test: null,
                parent_component_id: null,
                clone_component_id: null,
                language: "JavaScript",
                framework: "React",
                privacy: 'public',
                title: "Component #17 Here!",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum," +
                " faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
                component_picture: 'http://www.our-happy-cat.com/images/scared-cat-hiding.jpg',
                owner_user_id: 4,
                score: 0
            },            {
                status: "active",
                code: "<div className='first'> <p>Hi there friend.</p> </div>",
                css: "p {color: black; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
                " width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
                test: null,
                parent_component_id: null,
                clone_component_id: null,
                language: "JavaScript",
                framework: "React",
                privacy: 'public',
                title: "Component #18 Here!",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
                component_picture: 'http://www.our-happy-cat.com/images/scared-cat-hiding.jpg',
                owner_user_id: 4,
                score: 0
            },
            {
                status: "active",
                code: "<div className='first'> <p>Hi there friend.</p> </div>",
                css: "p {color: black; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
                " width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
                test: null,
                parent_component_id: null,
                clone_component_id: null,
                language: "JavaScript",
                framework: "React",
                privacy: 'public',
                title: "Component #19 Here",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
                component_picture: 'http://www.our-happy-cat.com/images/scared-cat-hiding.jpg',
                owner_user_id: 5,
                score: 0
            },
            {
                status: "active",
                code: "<div className='first'> <p>Hi there friend.</p> </div>",
                css: "p {color: black; font-weight: bold; font-size: 30px;} .first {background-color: lightblue;" +
                " width: 200px; padding: 30px; text-align: center; margin: 0 auto; border: 1px solid grey;}",
                test: null,
                parent_component_id: null,
                clone_component_id: null,
                language: "JavaScript",
                framework: "React",
                privacy: 'public',
                title: "Component #20 Here",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
                component_picture: 'http://www.our-happy-cat.com/images/scared-cat-hiding.jpg',
                owner_user_id: 5,
                score: 0
            },

        ]);
    });
};