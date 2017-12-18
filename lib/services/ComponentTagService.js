const bcrypt = require("bcryptjs");

class ComponentService {
	constructor({ componentTagRepository }) {
		this.componentTagRepository = componentTagRepository;
	}

	async getTagsByComponent(args, parent) {
		try {
			// TODO Authenticate for admin or ownership
			let componentId = parent.id;
			return await this.componentTagRepository.getTagsByComponent(componentId);
		} catch (error) {
			console.log(error);
		}
	}

	async createNew(args) {
		let existingTagCheck = await this.componentTagRepository.checkForDuplicateTag(
			args.tag_id,
			args.component_id
		);
		existingTagCheck = existingTagCheck[0];
		if (existingTagCheck) throw new Error("DUPLICATE: Identical Tag");
		let newTagRelation = await this.componentTagRepository.createNew(args);
		return newTagRelation;
	}

	async delete(args) {
		try {
			let tag_id = args.tag_id;
			let component_id = args.component_id;
			let deletedTagRelationship = await this.componentTagRepository.hardDeleteByTag(
				tag_id,
				component_id
			);
			return deletedTagRelationship;
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = ComponentService;
