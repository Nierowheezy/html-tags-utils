import htmlTagsJson from "./html-tags.json" assert { type: "json" };
import voidHtmlTagsJson from "./html-tags-void.json" assert { type: "json" };
import detailedHtmlTagsJson from "./html-tags-detailed.json" assert { type: "json" };

export const htmlTags: HtmlTags[] = htmlTagsJson as HtmlTags[];
export const voidHtmlTags: VoidHtmlTags[] = voidHtmlTagsJson as VoidHtmlTags[];
export const detailedHtmlTags: TagDetails[] =
	detailedHtmlTagsJson as TagDetails[];

/**
 * Get tags by category
 * @param {string} category - The category name (e.g., "forms", "headings").
 * @returns {HtmlTags[]} - List of tags in the specified category.
 */
export function getTagsByCategory(category: string): HtmlTags[] {
	return detailedHtmlTags
		.filter((tag) => tag.category === category)
		.map((tag) => tag.tag);
}

/**
 * Get tag details by name
 * @param {HtmlTags} tagName - The name of the tag (e.g., "div", "input").
 * @returns {TagDetails | null} - Detailed information about the tag or null if not found.
 */
export function getTagDetails(tagName: HtmlTags): TagDetails | null {
	const tagDetail = detailedHtmlTags.find((tag) => tag.tag === tagName);
	if (tagDetail) {
		return {
			...tagDetail,
			examples: tagDetail.examples || [],
			category: tagDetail.category || "general",
			attributes: tagDetail.attributes || [],
		};
	}
	return null;
}

/**
 * Get tags that include a specific attribute
 * @param {string} attribute - The attribute name (e.g., "href", "src").
 * @returns {HtmlTags[]} - List of tags supporting the specified attribute.
 */
export function getTagsByAttribute(attribute: string): HtmlTags[] {
	return detailedHtmlTags
		.filter((tag) => tag.attributes?.includes(attribute))
		.map((tag) => tag.tag);
}

/**
 * Filter tags by a given prefix.
 * @param {string} prefix - The prefix to filter tags by.
 * @returns {HtmlTags[]} - List of tags starting with the given prefix.
 */
export function filterTags(prefix: string): HtmlTags[] {
	return htmlTags.filter((tag) => tag.startsWith(prefix)) as HtmlTags[];
}

/**
 * Group tags by their length.
 * @returns {Record<number, HtmlTags[]>} - An object where keys are lengths and values are arrays of tags of that length.
 */
export function groupTagsByLength(): Record<number, HtmlTags[]> {
	return htmlTags.reduce(
		(groups, tag) => {
			const length = tag.length;
			if (!groups[length]) {
				groups[length] = [];
			}
			groups[length].push(tag as HtmlTags);
			return groups;
		},
		{} as Record<number, HtmlTags[]>,
	);
}

/**
 * Sort tags alphabetically.
 * @param {HtmlTags[]} tags - List of tags to sort.
 * @param {boolean} [ascending=true] - Whether to sort in ascending (true) or descending (false) order.
 * @returns {HtmlTags[]} - List of tags sorted alphabetically.
 */
export function sortTagsAlphabetically(
	tags: HtmlTags[],
	ascending: boolean = true,
): HtmlTags[] {
	return [...tags].sort((a, b) =>
		ascending ? a.localeCompare(b) : b.localeCompare(a),
	);
}

/**
 * Check if a string is a valid HTML tag.
 * @param {string} tag - The tag name to check.
 * @returns {boolean} - True if it's a valid HTML tag, false otherwise.
 */
export function isHtmlTag(tag: string): boolean {
	return htmlTags.includes(tag as HtmlTags);
}

/**
 * Check if a string is a valid void HTML tag.
 * @param {string} tag - The tag name to check.
 * @returns {boolean} - True if it's a valid void HTML tag, false otherwise.
 */
export function isVoidHtmlTag(tag: string): boolean {
	return voidHtmlTags.includes(tag as VoidHtmlTags);
}

export { voidHtmlTags, htmlTags, detailedHtmlTags };

export default htmlTags;

// Type Definitions
export type HtmlTags =
	| "a"
	| "abbr"
	| "address"
	| "area"
	| "article"
	| "aside"
	| "audio"
	| "b"
	| "base"
	| "bdi"
	| "bdo"
	| "blockquote"
	| "body"
	| "br"
	| "button"
	| "canvas"
	| "caption"
	| "cite"
	| "code"
	| "col"
	| "colgroup"
	| "data"
	| "datalist"
	| "dd"
	| "del"
	| "details"
	| "dfn"
	| "dialog"
	| "div"
	| "dl"
	| "dt"
	| "em"
	| "embed"
	| "fieldset"
	| "figcaption"
	| "figure"
	| "footer"
	| "form"
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "head"
	| "header"
	| "hgroup"
	| "hr"
	| "html"
	| "i"
	| "iframe"
	| "img"
	| "input"
	| "ins"
	| "kbd"
	| "label"
	| "legend"
	| "li"
	| "link"
	| "main"
	| "map"
	| "mark"
	| "math"
	| "menu"
	| "meta"
	| "meter"
	| "nav"
	| "noscript"
	| "object"
	| "ol"
	| "optgroup"
	| "option"
	| "output"
	| "p"
	| "param"
	| "picture"
	| "pre"
	| "progress"
	| "q"
	| "rb"
	| "rp"
	| "rt"
	| "rtc"
	| "ruby"
	| "s"
	| "samp"
	| "script"
	| "section"
	| "select"
	| "slot"
	| "small"
	| "source"
	| "span"
	| "strong"
	| "style"
	| "sub"
	| "summary"
	| "sup"
	| "svg"
	| "table"
	| "tbody"
	| "td"
	| "template"
	| "textarea"
	| "tfoot"
	| "th"
	| "thead"
	| "time"
	| "title"
	| "tr"
	| "track"
	| "u"
	| "ul"
	| "var"
	| "video"
	| "wbr";

export type VoidHtmlTags =
	| "area"
	| "base"
	| "br"
	| "col"
	| "embed"
	| "hr"
	| "img"
	| "input"
	| "link"
	| "meta"
	| "param"
	| "source"
	| "track"
	| "wbr";

export type TagDetails = {
	tag: HtmlTags;
	description: string;
	examples?: string[];
	category?: string;
	attributes?: string[];
};
