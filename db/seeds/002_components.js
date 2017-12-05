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
                component_picture: 'https://react-etc.net/files/2016-11/web-components.png',
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
                component_picture: 'https://react-etc.net/files/2017-01/typescript-polymer.png',
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
                component_picture: 'https://react-etc.net/files/2016-11/web-components.png',
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
                component_picture: 'https://react-etc.net/files/2017-01/typescript-polymer.png',
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
                component_picture: 'https://react-etc.net/files/2016-11/web-components.png',
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
                component_picture: 'https://react-etc.net/files/2017-01/typescript-polymer.png',
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
                component_picture: 'https://i0.wp.com/alibassam.com/wp-content/uploads/2015/08/css-pie-4.png',
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
                component_picture: 'https://image.slidesharecdn.com/creating-a-component-library-1205022030581340-4/95/creating-a-component-library-33-728.jpg?cb=1451589347',
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
                component_picture: 'https://i0.wp.com/alibassam.com/wp-content/uploads/2015/08/css-pie-4.png',
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
                component_picture: 'https://image.slidesharecdn.com/creating-a-component-library-1205022030581340-4/95/creating-a-component-library-33-728.jpg?cb=1451589347',
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
                title: "Component #12 Here",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum, faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
                component_picture: 'https://d33wubrfki0l68.cloudfront.net/a6329fb5cfaefae59414a941966307c481e5987d/6a9a2/images/drop-caps/b.svg',
                owner_user_id: 1,
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
                title: "Component #13 Here!",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla fermentum," +
                " faucibus turpis eu, sagittis purus. Fusce ultrices venenatis fringilla. Mauris sodales aliquam enim in fringilla.",
                component_picture: 'https://avatars2.githubusercontent.com/u/6311119?v=4&s=64',
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
                component_picture: 'https://d33wubrfki0l68.cloudfront.net/a6329fb5cfaefae59414a941966307c481e5987d/6a9a2/images/drop-caps/b.svg',
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
                component_picture: 'https://avatars2.githubusercontent.com/u/6311119?v=4&s=64',
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
                component_picture: 'https://d33wubrfki0l68.cloudfront.net/a6329fb5cfaefae59414a941966307c481e5987d/6a9a2/images/drop-caps/b.svg',
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
                component_picture: 'https://avatars2.githubusercontent.com/u/6311119?v=4&s=64',
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
                component_picture: 'http://brandmark.io/logo-rank/random/pepsi.png',
                owner_user_id: 5,
                score: 0
            },

        ]);
    });
};