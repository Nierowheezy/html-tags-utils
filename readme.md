# ✨ html-tags-utils ✨

---

❤️ it? ⭐️ it on [GitHub](https://github.com/nierowheezy/html-tags-utils/stargazers) or Share on [Twitter](https://twitter.com/intent/tweet?text=Check%20out%20the%20html-tags-utils%20package%20for%20managing%20HTML%20tags%20with%20detailed%20metadata%20and%20utilities.&url=https%3A%2F%2Fgithub.com%2Fnierowheezy%2Fhtml-tags-utils&via=__nierowheezy&hashtags=javascript,html,webdevelopment)

![Version](https://img.shields.io/npm/v/html-tags-utils) ![Contributors](https://img.shields.io/github/contributors/nierowheezy/html-tags-utils) ![Issues](https://img.shields.io/github/issues/nierowheezy/html-tags-utils) ![Forks](https://img.shields.io/github/forks/nierowheezy/html-tags-utils)

[GitHub Repository](https://github.com/nierowheezy/html-tags-utils) | [Report Issues](https://github.com/nierowheezy/html-tags-utils/issues)

> A comprehensive utils for working with HTML tags, providing detailed metadata, enhanced features, and utilities for better management of HTML tags.

## This package extends the functionality of the original `html-tags` package by offering additional utilities, detailed metadata, and features for working with HTML tags, including validation, categorization, and more.

## Features

- **All HTML Tags**: Get a comprehensive list of all standard HTML tags.
- **Void Tags**: Identify self-closing tags (e.g., `<br>`, `<img>`).
- **Metadata**: Includes detailed information such as categories, attributes, and descriptions for each tag.
- **Utilities**:
  - Filter tags by prefix.
  - Sort tags alphabetically.
  - Group tags by length.
  - Search for tags by supported attributes.
- **Validation**: Check if a tag is valid or self-closing.

---

## Install

```bash
npm install html-tags-utils
```

---

## Usage

### Importing the Package

```javascript
import {
	htmlTags,
	voidHtmlTags,
	filterTags,
	isHtmlTag,
	isVoidHtmlTag,
	sortTagsAlphabetically,
	groupTagsByLength,
	getTagsByCategory,
	getTagsByAttribute,
	getTagDetails,
} from "html-tags-utils";
```

---

### Examples

#### 1. **Get All HTML Tags**

```javascript
import { htmlTags } from "html-tags-utils";

console.log(htmlTags);
//=> ['a', 'abbr', 'address', …]
```

#### 2. **Get Void (Self-Closing) HTML Tags**

```javascript
import { voidHtmlTags } from "html-tags-utils";

console.log(voidHtmlTags);
//=> ['area', 'base', 'br', …]
```

#### 3. **Check if a Tag is a Valid HTML Tag**

```javascript
import { isHtmlTag } from "html-tags-utils";

console.log(isHtmlTag("div")); //=> true
console.log(isHtmlTag("custom-element")); //=> false
```

#### 4. **Check if a Tag is a Void Tag**

```javascript
import { isVoidHtmlTag } from "html-tags-utils";

console.log(isVoidHtmlTag("img")); //=> true
console.log(isVoidHtmlTag("span")); //=> false
```

#### 5. **Filter Tags by Prefix**

```javascript
import { filterTags } from "html-tags-utils";

console.log(filterTags("d"));
//=> ['data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt']
```

#### 6. **Sort Tags Alphabetically**

```javascript
import { sortTagsAlphabetically } from "html-tags-utils";

console.log(sortTagsAlphabetically(htmlTags, true)); // Ascending order
//=> ['a', 'abbr', 'address', ...]

console.log(sortTagsAlphabetically(htmlTags, false)); // Descending order
//=> ['wbr', 'video', 'var', ...]
```

#### 7. **Group Tags by Length**

```javascript
import { groupTagsByLength } from "html-tags-utils";

console.log(groupTagsByLength());
//=> {
//     1: ['a', 'b', 'i', 'p', 'q', 's', 'u'],
//     2: ['br', 'hr', 'li', 'ol', 'ul', …],
//     3: ['div', 'img', 'pre', 'sub', 'sup', …],
//     …
//   }
```

#### 8. **Get Tags by Category**

```javascript
import { getTagsByCategory } from "html-tags-utils";

console.log(getTagsByCategory("Inline"));
//=> ['a', 'b', 'i', 'span', …]
```

#### 9. **Get Tags by Attribute**

```javascript
import { getTagsByAttribute } from "html-tags-utils";

console.log(getTagsByAttribute("href"));
//=> ['a', 'area', 'link']
```

#### 10. **Get Detailed Information About a Tag**

```javascript
import { getTagDetails } from "html-tags-utils";

console.log(getTagDetails("a"));
//=> {
//     tag: "a",
//     description: "Defines a hyperlink.",
//     attributes: ["href", "target", "rel", "type"]
// }
```

---

## Comparison with `html-tags` Package

The html-tags package is a popular utility that provides a straightforward list of all standard HTML tags. It's great for basic use cases where you just need to reference HTML tags quickly.

On the other hand, html-tags-utils builds on that foundation by adding more features and detailed metadata, making it even more powerful for developers who need additional utilities like tag validation, categorization, and more advanced ways to interact with HTML tags.

| Feature                  | `html-tags` | `html-tags-utils` |
| ------------------------ | ----------- | ----------------- |
| List of HTML Tags        | ✅          | ✅                |
| Void Tags                | ✅          | ✅                |
| Detailed Tag Metadata    | ❌          | ✅                |
| Tag Validation           | ❌          | ✅                |
| Filter Tags by Prefix    | ❌          | ✅                |
| Sort Tags Alphabetically | ❌          | ✅                |
| Group Tags by Length     | ❌          | ✅                |
| Search by Attribute      | ❌          | ✅                |

---

## Advanced Features

- **Categories**: Tags are categorized (e.g., "Inline", "Block", "Interactive").
- **Attributes**: Search for tags based on supported attributes.
- **Filtering and Sorting**: Flexible utilities to filter, sort, and group tags.

---

## Contributing

Feel free to open issues or submit pull requests. Contributions are welcome!

---

## License

MIT © [Olabode Olaniyi](https://niero-portfolio.vercel.app/)

---

This README is designed to give users an intuitive and complete understanding of the `html-tags-utils` package. 🚀
