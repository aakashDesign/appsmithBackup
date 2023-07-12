export default {
	defaultName: "Anonymous",
	getAuthor: () => {
		if(appsmith.user.name === "anonymousUser" || anonymous.isChecked) {
			return JSObject1.defaultName;
		}
		return appsmith.user.name;
	},
	getEmail: () => {
		if(appsmith.user.name === "anonymousUser" || anonymous.isChecked) {
			return "johncena@appsmith.com";
		}
		return appsmith.user.email;
	}
}