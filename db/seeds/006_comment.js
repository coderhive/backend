exports.seed = function (knex, Promise) {
    return knex("Comment").del().then(function () {
        return knex("Comment").insert([

            {user_id: 1, component_id: 1, comment: "I love this component! Heck, I made it!"},
            {user_id: 1, component_id: 2, comment: "Just okay in my opinion. Sorry!"},
            {user_id: 2, component_id: 1, comment: "Nice work, but you're the worst!"},
            {user_id: 2, component_id: 2, comment: "Nope, you just don't get it!"},
            {user_id: 3, component_id: 1, comment: "Nothing special"},
            {user_id: 3, component_id: 2, comment: "Don't waste your time!"},
            {user_id: 4, component_id: 1, comment: "Not bad IMHO"},
            {user_id: 4, component_id: 2, comment: "Don't let these guys get you down, it's solid!"},

            {user_id: 1, component_id: 3, comment: "What were you going for again?"},
            {user_id: 1, component_id: 4, comment: "Good work"},
            {user_id: 2, component_id: 3, comment: "What?"},
            {user_id: 2, component_id: 4, comment: "Who likes this thing?"},
            {user_id: 3, component_id: 3, comment: "Let's get back to work and do it"},
            {user_id: 3, component_id: 4, comment: "I saw something similar on codepen but this is better, obviously"},
            {user_id: 4, component_id: 3, comment: "Thanks for the great idea. Gonna clone this I think"},
            {user_id: 4, component_id: 4, comment: "What's the point! This is so much better than what I can do."},

            {user_id: 5, component_id: 5, comment: "Cool component. I like the styling"},
            {user_id: 1, component_id: 6, comment: "Great example of good testing"},
            {user_id: 2, component_id: 5, comment: "Beautiful CSS. I love it!"},
            {user_id: 2, component_id: 6, comment: "Nice job on the testing. I barely understand it haha"},
            {user_id: 3, component_id: 5, comment: "I agree with everyone about the styling"},
            {user_id: 3, component_id: 6, comment: "Tests are too complicated I think"},
            {user_id: 4, component_id: 5, comment: "Not bad IMHO"},
            {user_id: 4, component_id: 6, comment: "I'm totally BORROWING this thing. Sweet."},

            {user_id: 1, component_id: 7, comment: "Not sure about this. Give it another try?"},
            {user_id: 1, component_id: 8, comment: "Agreed. Total reative misadventure"},
            {user_id: 2, component_id: 9, comment: "Cool concept. What inspired you to do this?"},
            {user_id: 5, component_id: 10, comment: "High Five!"},
            {user_id: 3, component_id: 7, comment: "Seriously, this was a weird one."},
            {user_id: 3, component_id: 8, comment: "I don't like this one much"},
            {user_id: 4, component_id: 9, comment: "Not half bad. I actually really like it... :)"},
            {user_id: 4, component_id: 10, comment: "Great work... you've improved a ton imho."},

            {user_id: 1, component_id: 11, comment: "Not my finest work, but worth a try"},
            {user_id: 1, component_id: 12, comment: "Pretty, pretty, pretty, pretty..... cool."},
            {user_id: 2, component_id: 11, comment: "Haha, yeah, try again fool!!"},
            {user_id: 2, component_id: 12, comment: "Now I'm getting the hang of it. Read it and weep!"},
            {user_id: 3, component_id: 11, comment: "Not great. Not horrible"},
            {user_id: 5, component_id: 12, comment: "I'm a fan!"},
            {user_id: 4, component_id: 11, comment: "Not THAT bad... just kidding, it IS!"},
            {user_id: 4, component_id: 12, comment: "Don't let these guys get you down, it's solid!"},

            {user_id: 1, component_id: 13, comment: "What were you going for again?"},
            {user_id: 1, component_id: 14, comment: "Good work"},
            {user_id: 2, component_id: 15, comment: "What?"},
            {user_id: 2, component_id: 16, comment: "Who likes this thing?"},
            {user_id: 3, component_id: 13, comment: "Let's get back to work and do it"},
            {user_id: 3, component_id: 14, comment: "I saw something similar on codepen but this is better, obviously"},
            {user_id: 5, component_id: 15, comment: "Thanks for the great idea. Gonna clone this I think"},
            {user_id: 4, component_id: 16, comment: "What's the point! This is so much better than what I can do."},

            {user_id: 1, component_id: 17, comment: "What were you going for again?"},
            {user_id: 1, component_id: 18, comment: "Good work"},
            {user_id: 2, component_id: 19, comment: "What?"},
            {user_id: 2, component_id: 20, comment: "Who likes this thing?"},
            {user_id: 3, component_id: 17, comment: "Let's get back to work and do it"},
            {user_id: 3, component_id: 18, comment: "I saw something similar on codepen but this is better, obviously"},
            {user_id: 4, component_id: 19, comment: "Thanks for the great idea. Gonna clone this I think"},
            {user_id: 5, component_id: 20, comment: "What's the point! This is so much better than what I can do."},
        ]);
    });
};
