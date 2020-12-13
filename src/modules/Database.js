// API query for feature sticky post
const GetFeaturedArticle = async () => {
	const featuredArticle = await fetch(
		"https://lovethatwillnotdie.com/wp_robertsons/wp-json/wp/v2/posts/?_embed&sticky=true"
	);
	const response = await featuredArticle.json();
	return response;
};

// API query for shop items
// const GetShopItems = async () => {
// 	const shopItems = await Axios(endpoint);
// 	return shopItems;
// };

const Database = { GetFeaturedArticle };

export default Database;
