const path = require("path");

const constantsFiles = ["RequestStatusEnum"];
const formattersFiles = [
	"currency/brl",
	"currency/brlPlain",
	"currency/index",
	"percentage/decimals",
	"percentage/index",
];

const helpersFiles = [
	"axiosWrapper/index",
	"errorBuilder/index",
	"file/downloadFileHandler",
	"file/index",
	"validators/cpfOrCnpj",
	"validators/email",
	"validators/index",
	"localStorageWrapper/index",
	"notify/notification",
	"notify/notificationWrapper",
	"notify/index",
	"store/gettersBuilder",
	"store/index",
	"store/userAccess/index",
	"store/mutationsBuilder",
	"store/resetListBuilder",
	"fileSaver/index",
	"string/capitalize",
	"string/index",
	"toClipboard/index"
];
const mixinsFiles = ["gtag", "routeRole", "exportHandler"];

let entry = {};
constantsFiles.forEach((file) => {
	entry["consts/" + file] = `./src/consts/${file}.js`;
});
formattersFiles.forEach((file) => {
	entry["formatters/" + file] = `./src/formatters/${file}.js`;
});
helpersFiles.forEach((file) => {
	entry["helpers/" + file] = `./src/helpers/${file}.js`;
});
mixinsFiles.forEach((file) => {
	entry["mixins/" + file] = `./src/mixins/${file}.js`;
});

module.exports = {
	entry,
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].js",
		libraryTarget: "umd",
	},
	resolve: {
		extensions: [".js"],
	},
};
