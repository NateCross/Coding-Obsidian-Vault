# Getting Started with HTML and CSS
## 1. HTML and CSS
- We are starting our journey with [[A Smarter Way to Learn HTML and CSS.pdf]].
- p. 48 of PDF
- These are the very fundamentals; the basics of why HTML and CSS work and stuff.
	- HTML
		- Is a text file that tells the browser how to assemble a webpage.
		- It is pure text, without any formatting whatsoever.
		- Its extension is .html.
		- Each HTML document creates a single webpage in the browser.
		- index.html is loaded by default when no HTML doc is specified.
			- It's the site's home page.
		- CSS
			- Like HTML, is a plain text file.
			- Specifies the styling of the page -- fonts, colors, column widths, and the like.
			- Its extension is .css.
### Naming Conventions
- Use this as your reference from here on out. Naming is important, as per Clean Code.
	- The book advised to follow its style when doing exercises. Of course, not every place will follow the same style. But this will be used for the book.
- ==Use only lowercase characters.==
- ==Avoid spaces.==
- ==Stick to 0-9, a-z, and underscore.==

## 2. Creating Paragraphs
- P. 60 of [[A Smarter Way to Learn HTML and CSS.pdf]]
- Created the folder *chap-2-my-smarter-site*. As per the instructions.
	- Tested the live reload function. Here's the workflow:
		- Edit the html files in Neovim. No problem.
		- Go to the project root, where all the HTML files are, in another terminal.
		- Enter the following:
```
# aliased to a command of browser-sync that allows live-reload
serve
```
It should load up the website just fine.
- We made use of the \<p> tag.
	- Essentially allows us to make a line-break. It's literally a paragraph tag, so yeah.
		- Should come in handy once we go back to CSS stuff.
- Also, yes, tags. They come in pairs -- an opening and closing tag.
	- Don't forget that the closing tag has a "/".
	- Seriously, don't forget to close your tags.
	- Ex. \<p>Some text\</p>
- Uppercase tags technically do work, but are not recommended because style guide.