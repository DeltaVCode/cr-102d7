# Facilitators Guide: Class 04 - Structure web pages with HTML

Semantic HTML tags FTW!

Rather than lecturing on HTML, the class will tell you what they know. Use the discussion time to highlight WHY, WHAT, and HOW. For HOW, focus specifically on the anatomy of an element (open, closing tags, attributes, content), a few common tags (or whatever they can tell you about), and emphasis that HTML is about structuring pages with semantic tags. 

The Demo will be generating a wireframe for an arbitrary project, and then coding up the basic structure. 

In-class demo should split screen between VSCode and Chrome to display VSCode Live Server extension.  Students can then see HTML populate the browser during live demo.

- note:  If not familiar with the VSCode extension:  
  - [VScode Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  - potentially less student-confusing than the globally installed live-server package used commonly in 201/301
  - guide students to install the extension if they have not already through VS Code

## Preparation

1. Review the Reading Discussion, the Demo, and the Lab assignment. 
1. It's time to run code from VS Code in the browser. Install the live-server extention, and direct students to do the same:
    - <https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer>

## Lecture Main Topics & Overall Flow

- [Slide Deck](https://docs.google.com/presentation/d/1GkRizg4oZGcFrus-8nWGDR51oJvmBIllTyPi4quoAsc/edit)
- Review of previous class 1:00 - 1:15
  - Share your learning
    - Cloning, Gitflow
- HTML 1:15 - 1:30
  - Recap from Code 101
- Read 04: Structure Web Pages With HTML 1:30 - 2:30
  - Who, What, Why?
- From Mockup to Markup 2:30 - 3:00
  - Demo
- Lab 04: Wireframe and Build 3:00 - End of class
  - Pair with partner/ Wireframes on whiteboard
  - Build HTML page / semantic tags

## Expected Student Questions and Challenges

Some students will mix up what tags go where (eg: `nav` for links). 

## Miscellaneous Comments and Notes

- split screen with VSCode and Chrome to display VSCode Live Server extension 
- use the same class-mobbed HTML wireframe for next class
- helpful wireframe inclusions:
  - header
    - h1
    - nav > ul > li*4
  - main
    - section > article*3 > figure > img
    - insert figcaption as first or lastchild of figure (accessibility FTW!) 
  - footer 
    - `&copy;` - symbol insertion
    - sitemap - nav > ul > li*4
- *note CSS opportunities in class-05*: using these wireframe inclusions
