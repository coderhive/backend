import bcrypt from "bcryptjs";
import cssbeautify from "cssbeautify";
const esformatter = require("esformatter");
const esformatterjsx = require("esformatter-jsx");
esformatter.register(esformatterjsx);

class ComponentService {
	constructor({ componentRepository, activityRepository, followRepository, fanRepository }) {
		this.componentRepository = componentRepository;
		this.activityRepository = activityRepository;
		this.followRepository = followRepository;
		this.fanRepository = fanRepository;
		this.update = this.update.bind(this);
	}

	async getById(id) {
		try {
			// TODO Authenticate for admin or ownership
			const component = await this.componentRepository.getById(id);
			if (component.css) {
				component.css = cssbeautify(component.css, {
					indent: "  ",
					autosemicolon: true
				});
				if (component.code) {
					component.code = esformatter.format(component.code);
				}
			}
			return component;
		} catch (error) {
			console.log(error);
		}
	}

	async getAll() {
		try {
			let components = await this.componentRepository.getAll("score");
			// users = users.map(user => {
			//     delete user.hashed_password;
			//     delete user.email;
			//     return user
			// });
			return components;
		} catch (error) {
			console.log(error);
		}
	}

	async getByIdentifier(args, parent) {
		try {
			// TODO Authenticate for admin or ownership
			let userId = parent.id;
			return await this.componentRepository.getCollectionByIdentifier(userId, "owner_user_id");
		} catch (error) {
			console.log(error);
		}
	}

	async getChildren(thisId) {
		try {
			let children = await this.componentRepository.getCollectionByIdentifier(
				thisId,
				"parent_component_id"
			);
			return children;
		} catch (error) {
			console.log(error);
		}
	}

	async getClones(thisId) {
		try {
			let children = await this.componentRepository.getCollectionByIdentifier(
				thisId,
				"clone_component_id"
			);
			return children;
		} catch (error) {
			console.log(error);
		}
	}

	async createNew(args, authenticatedUserId) {
		try {
			if (!authenticatedUserId) throw new Error("UNAUTHORIZED");
			if (authenticatedUserId !== args.owner_user_id) throw new Error("UNAUTHORIZED");
			args.code = `class Component extends React.Component {
    render() {
        return (<div className="new">Your Component Here</div>)
    }
}`;

			args.css = `.new {  background-color: blue;
  font-size:30px;
  color: white;
  width: 400px;
  text-align: center;
  margin: 0 auto;}`;
			let newComponent = await this.componentRepository.createNew(args);
			let followersToAlert = await this.followRepository.getFollowerIds(authenticatedUserId);
			await followersToAlert.map(async follow => {
				return await this.activityRepository.createNew({
					owner_id: follow.follower,
					type: "newComponent",
					user_id: authenticatedUserId,
					component_id: newComponent.id
				});
			});

			newComponent = this.update({
				id: newComponent.id,
				component_picture: `https://s3-us-west-1.amazonaws.com/coderhive/component_${newComponent.id}.jpeg`,
                owner_user_id: newComponent.owner_user_id
			}, authenticatedUserId);
			return newComponent;
		} catch (error) {
			if (error.message === "UNAUTHORIZED") throw error;
			console.log(error);
		}
	}

	async update(args, authenticatedUserId) {
		try {
			if (!authenticatedUserId) throw new Error("UNAUTHORIZED");
			if (authenticatedUserId !== args.owner_user_id) throw new Error('UNAUTHORIZED');
			let updatedComponent = await this.componentRepository.update(args);
			return updatedComponent;
		} catch (error) {
			if (error.message === "UNAUTHORIZED") throw error;
			console.log(error);
		}
	}

	async delete(args, authenticatedUserId) {
		try {
			if (!authenticatedUserId) throw new Error("UNAUTHORIZED");
			let toDelete = await this.componentRepository.getById(args.id);
			if (authenticatedUserId !== toDelete.owner_user_id) throw new Error("UNAUTHORIZED");
			let deletedComponent = await this.componentRepository.deleteComponent(args.id);
			return deletedComponent;
		} catch (error) {
			if (error.message === "UNAUTHORIZED") throw error;
			console.log(error);
		}
	}
}

module.exports = ComponentService;
