/* API query for feature sticky post */
const GetFeaturedArticle = async () => {
	const featuredArticle = await fetch(
		"https://lovethatwillnotdie.com/wp_robertsons/wp-json/wp/v2/posts/?_embed&sticky=true"
	);
	const response = await featuredArticle.json();
	return response;
};

/* API query for shop items */
const GetShopItems = async () => {
	const shopItems = await fetch(
		"https://spreadsheets.google.com/feeds/cells/1yQzFL0SsMvM4fJhzGdkq6B7jzre9KbAkMxu864SNexo/1/public/full?alt=json"
	);
	const response = await shopItems.json();
	return response;
};

const Database = { GetFeaturedArticle, GetShopItems };

export default Database;
