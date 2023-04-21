import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "028304ca8ba54357bbc64cd84a87724a",
	},
});
