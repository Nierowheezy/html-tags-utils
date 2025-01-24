import test from "ava";
import htmlTags, {
	voidHtmlTags,
	isHtmlTag,
	isVoidHtmlTag,
	filterTags,
	sortTagsAlphabetically,
	groupTagsByLength,
} from "./index.js";

test("htmlTags is an array of HTML tags", (t) => {
	t.true(Array.isArray(htmlTags));
	t.true(htmlTags.length > 10 && htmlTags.length < 1000);
});

test("voidHtmlTags is an array of void HTML tags", (t) => {
	t.true(Array.isArray(voidHtmlTags));
	t.true(voidHtmlTags.length > 10 && voidHtmlTags.length < 1000);
});

test("isHtmlTag checks if a tag is valid", (t) => {
	t.true(isHtmlTag("div"));
	t.true(isHtmlTag("a"));
	t.false(isHtmlTag("invalid-tag"));
	t.false(isHtmlTag("custom-element"));
});

test("isVoidHtmlTag checks if a tag is void", (t) => {
	t.true(isVoidHtmlTag("br"));
	t.true(isVoidHtmlTag("img"));
	t.false(isVoidHtmlTag("div"));
	t.false(isVoidHtmlTag("span"));
});

test("filterTags filters tags by a given prefix", (t) => {
	const filteredTags = filterTags("d");
	t.true(Array.isArray(filteredTags));
	t.true(filteredTags.includes("div"));
	t.false(filteredTags.includes("span"));
});

test("sortTagsAlphabetically sorts tags in ascending or descending order", (t) => {
	const sortedAsc = sortTagsAlphabetically(htmlTags, true);
	t.deepEqual(sortedAsc.slice(0, 3), ["a", "abbr", "address"]); // First few tags in ascending order

	const sortedDesc = sortTagsAlphabetically(htmlTags, false);
	t.deepEqual(sortedDesc.slice(0, 3), ["wbr", "video", "var"]); // Last few tags in descending order
});

test("groupTagsByLength groups tags by their length", (t) => {
	const groupedTags = groupTagsByLength();
	t.true(typeof groupedTags === "object");
	t.true(Array.isArray(groupedTags[3])); // Example: Tags with length 3
	t.true(groupedTags[3].includes("div"));
	t.true(groupedTags[4].includes("html"));
});
