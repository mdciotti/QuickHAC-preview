# QuickHAC Version 3.0 Mockups

Please refer to https://github.com/quickhac/qhac-common for the core QuickHAC project.

This repository contains the design mockups for the upcoming version 3.0 of QuickHAC.

Please keep in mind that because this is for a Chrome extension, only Chrome is supported. Layouts will most likely be broken in other browsers.

## Installation

You will need to run `bower install` in order to install all dependencies. This means you need [Bower](http://bower.io). You will also need [TypeScript](http://www.typescriptlang.org/) if you plan on editing scripts.

## Usage

Open up `dist/index.html` in Chrome. Everything should run fine, no need to build anything. If you make any modifications to the styles or templates, however, you'll have to rebuild.

To build scripts, run `make scripts`.

To build templates, run `make templates`.

To build styles, run `make styles`.

To build everything, run `make all`.

If you add a new style, make sure to add an `@import` rule for it in the `main.scss` file. If you add a new template or script, make sure to add it in the `Makefile`.

## To Do

* Mobile mockups
* Exam/semester grades?
* Dashboard (year at a glance)
* Icon
* Redo student switching (like gmail on iOS)
* Add student menu
* Lock screen
* Grade editing
* Convert templates to Handlebars
* Forgot password
* Cancel login/error messages
* Homepage
* Investigate standalone chrome app
* GPA calculations page
* Full page animations (and sidebar)
* Grade conditional formatting
* Grade change indicators
* Trends
* Print style
* Keyboard shortcuts

## In Progress

* Welcome screen (select students and app showcase)
* Change pixel font sizes to em
* Use variables for layout
* Preferences

## Done

* Fix login animations
* Cycle switching
* Login screen
* Student switching menu
* Course grades
* General layout
* Templates (DustJS)
* Basic framework (router)

## Ideas 

* Pull to refresh (mobile)
* Pin (freeze) course grade edits
* Preview sample student in browser (without downloading extension, requires Chrome)
* Grade "watchdog" --- catches numerous missing grades or low/failed assessments, alerts the user
* Allow users to set goals for each course, can show progress towards goal and how individual grades affect achieving that goal
* Maybe instead of having the user enter the student ID upon login, we could just scrape all the siblings' IDs from HAC then have all the students auto-populated in the student switcher. This would simplify things a bit for the user, and is easier for parents who may not know their student's ID.


## Things Users Would Like to See Improved

- "Maybe a notifications chart, sometimes i dont get the notification and i dont know what changed"
- "When u click the icon it pops out. When you click it again it should dissapear. not just refresh another popout"
- "Standalone app rather than a chrome extension"
- "Also, comparison to other quickhacers who make their grades "public" (or comparison to the average)"
- "Maybe also add in a feature to check attendance. Then it would make actually going to HAC superfluous."
- "Ability to permanently change my grades"
- "If possible, a notification for when a new grade is entered even if it doesn't change a grade average"
- "Possibly GPA calculation"
- "I would like to see what assignment made my grade change when I get a notification."
- "Grades table looks too busy/cramped. Also the grade cells don't have the same width (Semester averages)"
