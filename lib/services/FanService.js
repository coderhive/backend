const bcrypt = require("bcryptjs");

class FanService {
	constructor({ fanRepository }) {
		this.fanRepository = fanRepository;
	}

	async getByIdentifier(args, parent) {
		try {
			let componentId = parent.id;
			return await this.fanRepository.getCollectionByIdentifierSpecial(componentId, "component_id");
		} catch (error) {
			console.log(error);
		}
	}

	async getByUserId(args, parent) {
		try {
			let componentId = parent.id;
			return await this.fanRepository.getCollectionByIdentifierSpecial(componentId, "user_id");
		} catch (error) {
			console.log(error);
		}
	}

	async createNew(args, authenticatedUserId) {
		try {
			if (!authenticatedUserId) throw new Error("UNAUTHORIZED");
			if (authenticatedUserId !== args.user_id) throw new Error("UNAUTHORIZED");
			let existingFanCheck = await this.fanRepository.checkForDuplicateRelation(
				args.user_id,
				args.component_id
			);
			if (!!existingFanCheck.length)
				throw new Error("DUPLICATE: This user is already a fan of this component.");
			let newFan = await this.fanRepository.createNew(args);
			return newFan;
		} catch (error) {
			if (error.message === "UNAUTHORIZED") throw error;
			console.log(error);
		}
	}

	async delete(args, authenticatedUserId) {
		try {
			if (!authenticatedUserId) throw new Error("UNAUTHORIZED");
			let fanRelation = await this.fanRepository.getById(args.id);
			if (authenticatedUserId !== fanRelation.user_id) throw new Error("UNAUTHORIZED");
			const fanId = args.id;
			let deletedFan = await this.fanRepository.hardDelete(fanId);
			return deletedFan;
		} catch (error) {
			if (error.message === "UNAUTHORIZED") throw error;
			console.log(error);
		}
	}
}

module.exports = FanService;
