Day 2 Reflection — HTML Elements & Page Structure

Name: Riya Rathod
Task: Day 02 — HTML Elements & Page Structure
Organization: Tech Fellows

1. Difference Between an HTML Tag, Element, and Attribute

- Tag: A tag is used to mark the beginning or end of an HTML element. Example: "<p>" and "</p>".
- Element: An element includes the opening tag, content, and closing tag. Example: "<p>Hello World</p>".
- Attribute: An attribute provides additional information about an element. Example: "href" in "<a href="#about">About Me</a>".

2. When Should We Use an Ordered List Instead of an Unordered List?

An ordered list ("<ol>") is used when items need to appear in a particular sequence, such as steps or learning goals. An unordered list ("<ul>") is used when the order of items does not matter, such as a list of skills.

3. Why Does an Informative Image Need Alt Text?

Alt text describes the meaning or purpose of an image. It helps people using screen readers understand the image and provides a description if the image cannot load.

4. What Did I Observe When I Broke and Fixed an Internal Link?

I temporarily changed the About Me link from "href="#about"" to "href="#wrong"" without changing the section ID. The link no longer jumped to the About Me section because its target did not exist. I restored "href="#about"", and the link worked correctly again.

5. Debugging Issue, Cause, and Fix

Issue: The profile image was not displayed on the webpage.

Cause: The browser could not find the image at the specified file path.

Fix: I placed the image inside the "images" folder and ensured its filename was "profile.jpg". After refreshing the webpage, the image displayed correctly.

Conclusion

I learned how to structure a webpage using semantic HTML, create internal and external links, use ordered and unordered lists, and add an image with meaningful alt text. I also practiced identifying and fixing common HTML issues.