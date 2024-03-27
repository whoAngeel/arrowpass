const { Terminal, TerminalSchema } = require("./terminal.model");
function setupModels(sequelize) {
	Terminal.init(TerminalSchema, Terminal.config(sequelize));

	//
	Terminal.associate(sequelize.models);
}

module.exports = setupModels;
