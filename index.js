import htmlTags from "./html-tags.json" assert { type: "json" };
import voidHtmlTags from "./html-tags-void.json" assert { type: "json" };
import detailedHtmlTags from "./html-tags-detailed.json" assert { type: "json" };

/**
 * Get tags by category
 * @param {string} category - The category name (e.g., "Inline", "Block").
 * @returns {string[]} - List of tags in the specified category.
 * @throws {TypeError} - If the category is not a string.
 */
export function getTagsByCategory(category) {
	if (typeof category !== "string") {
		throw new TypeError("The 'category' parameter must be a string.");
	}
	return detailedHtmlTags
		.filter((entry) => entry.category === category)
		.map((entry) => entry.tag);
}

/**
 * Get tag details by name
 * @param {string} tagName - The name of the tag (e.g., "div", "input").
 * @returns {Object|null} - Detailed information about the tag or null if not found.
 * @throws {TypeError} - If the tagName is not a string.
 */
export function getTagDetails(tagName) {
	if (typeof tagName !== "string") {
		throw new TypeError("The 'tagName' parameter must be a string.");
	}
	return detailedHtmlTags.find((entry) => entry.tag === tagName) || null;
}

/**
 * Get tags that include a specific attribute
 * @param {string} attribute - The attribute name (e.g., "href", "src").
 * @returns {string[]} - List of tags supporting the specified attribute.
 * @throws {TypeError} - If the attribute is not a string.
 */
export function getTagsByAttribute(attribute) {
	if (typeof attribute !== "string") {
		throw new TypeError("The 'attribute' parameter must be a string.");
	}
	return detailedHtmlTags
		.filter((entry) => entry.attributes?.includes(attribute))
		.map((entry) => entry.tag);
}

/**
 * Filter tags by a given prefix.
 * @param {string} prefix - The prefix to filter tags by.
 * @returns {string[]} - List of tags starting with the given prefix.
 * @throws {TypeError} - If the prefix is not a string.
 */
export function filterTags(prefix) {
	if (typeof prefix !== "string") {
		throw new TypeError("The 'prefix' parameter must be a string.");
	}
	if (prefix === "") {
		throw new Error("The 'prefix' parameter cannot be an empty string.");
	}
	return htmlTags.filter((tag) => tag.startsWith(prefix));
}

/**
 * Group tags by their length.
 * @returns {Object} - An object where keys are lengths and values are arrays of tags of that length.
 * @throws {Error} - If htmlTags is not an array.
 */
export function groupTagsByLength() {
	if (!Array.isArray(htmlTags)) {
		throw new Error("Invalid 'htmlTags' data. It must be an array.");
	}
	return htmlTags.reduce((groups, tag) => {
		const length = tag.length;
		if (!groups[length]) {
			groups[length] = [];
		}
		groups[length].push(tag);
		return groups;
	}, {});
}

/**
 * Sort tags alphabetically.
 * @param {string[]} tags - List of tags to sort.
 * @param {boolean} [ascending=true] - Whether to sort in ascending (true) or descending (false) order.
 * @returns {string[]} - List of tags sorted alphabetically.
 * @throws {TypeError} - If tags is not an array or ascending is not a boolean.
 */
export function sortTagsAlphabetically(tags, ascending = true) {
	if (!Array.isArray(tags)) {
		throw new TypeError("The 'tags' parameter must be an array.");
	}
	if (typeof ascending !== "boolean") {
		throw new TypeError("The 'ascending' parameter must be a boolean.");
	}
	return tags.sort((a, b) =>
		ascending ? a.localeCompare(b) : b.localeCompare(a),
	);
}

/**
 * Check if a string is a valid HTML tag.
 * @param {string} tag - The tag name to check.
 * @returns {boolean} - True if it's a valid HTML tag, false otherwise.
 * @throws {TypeError} - If the tag is not a string.
 */
export function isHtmlTag(tag) {
	if (typeof tag !== "string") {
		throw new TypeError("The 'tag' parameter must be a string.");
	}
	return htmlTags.includes(tag);
}

/**
 * Check if a string is a valid void HTML tag.
 * @param {string} tag - The tag name to check.
 * @returns {boolean} - True if it's a valid void HTML tag, false otherwise.
 * @throws {TypeError} - If the tag is not a string.
 */
export function isVoidHtmlTag(tag) {
	if (typeof tag !== "string") {
		throw new TypeError("The 'tag' parameter must be a string.");
	}
	return voidHtmlTags.includes(tag);
}

// Default export for all HTML tags
export default htmlTags;

// Named exports
export { htmlTags, voidHtmlTags };
