# Facilitators Guide: Class 06 - Dynamic web pages with JavaScript

Conditional logic with `if` & `else`

Input and output with `prompt` & `document.write`

## Preparation

1. Review the Reading, the Lab, and the Demo code
1. To execute example JS in VSCode, install:
    - <https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner>

## Lecture Main Topics & Overall Flow

- [Slide Deck](https://docs.google.com/presentation/d/1NlKlBgC3bN0r1zmwrVD5eREgQk-KiloFsJhT7Uy0n10/edit)
- Review of previous class 1:00 - 1:30
  - Share your learning
    - HTML and CSS
- JavaScript 1:30 - 1:45
  - Recap from Code 101
- Read 06a: Dynamic web pages with JS 1:45 - 2:30
  - Discussion
  - Book Follow-along
  - Break
- From Mockup to Markup 2:30 - 3:15
  - Demo: Input and Output
- Lab 06: Activate web pages with JS 3:15 - End of class
  - Plan and Build

## Expected Student Questions and Challenges

- Although JavaScript is breifly discussed in 101, class-06 is the first hands-on JavaScript experience for most students 
- Students may try to unnecessarily change the index.html file in starter code.  
- js folder will not be in starter code from class repo.  Links may break if not using a js directory
- Create add-content.js during read-06 assignment
- Students are not accustommed to working in multiple repos, confirm work in the html/css/js repo as opposed to LJ or class repo clone

## Miscellaneous Comments and Notes

JavaScript tips and the 102 use case:

- Have a working demo
- Note that the DO ALONG from discussion assignemnt works through multiple iterations and imports javaScript in multiple ways 
- Examples:
  - Duckett: JavaScript & jQuery, Page 47 #3 (from DO ALONG assignment):
    - inline tag and all file logic returned from js file using document.write():  `<script src="js/add-content.js"></script>`
  - Duckett: JavaScript & jQuery, Page 49 #7 (from DO ALONG assignment):
    - an inline script example
    - `<script>document.write('<h3>Welcome!</h3>');</script>`
  - Also consider (during class demo):
    - script in html head
    - `<script src="<js/add-content.js>"></script>`
    - with inline function calls:
    - `<script> document.write(someFunction()); </script>`
- Have a deliberate conversation about where we import js file
  - In-line or in head of document for 102 purposes
- Use case here is the need for a quick, 102-level dev environment.  This will be done differently in 201 as student learning progresses.
- Assign Read 06b: Computer Architecture and Logic for homework.
