# [Decanter Website](https://github.com/SU-SWS/decanter-website)
##### Version: 1.0.0

Changelog: [CHANGELOG.md](CHANGELOG.md)

[![Maintainability](https://api.codeclimate.com/v1/badges/5ad9555da4ffa2086204/maintainability)](https://codeclimate.com/github/SU-SWS/decanter/maintainability)

Demo
---

To see a live demo of Decanter please [view the styleguide.](https://decanter.stanford.edu)

Description
---

Decanter is a web design and development system for Stanford University.
It includes a responsive layout system and a browsable collection of design patterns
that can be used in any Stanford project.

Accessibility
---
[![WCAG Conformance 2.0 AA Badge](https://www.w3.org/WAI/wcag2AA-blue.png)](https://www.w3.org/TR/WCAG20/)

Evaluation Date: 201X-XX-XX
This project conforms to level AA WCAG 2.0 standards as required by the university's accessibility policy. For more information on the policy please visit: [https://ucomm.stanford.edu/policies/accessibility-policy.html](https://ucomm.stanford.edu/policies/accessibility-policy.html).

Configuration and Installation
---
###Local Setup
```
git clone https://github.com/SU-SWS/decanter-web.git
cd decanter-web
npm install # Install node_modules dependencies
```

###Build Command(s)
```
npm build # Builds Applciation
npm start # Starts development server at http://localhost:3000/
```

###Symlink local Decanter project
Use [npm-link](https://docs.npmjs.com/cli/link) to symlink a package folder.

1. Clone [Decanter](https://github.com/SU-SWS/decanter) to your local.
2. Navigate to the Decanter dependency folder within the Decanter-web directory:\
``
cd decanter-web/node_modules/decanter
``
3. Within that directory, run the following command:\
``
npm link /path/to/my/local-decanter-project
``
\
\
Your decanter-web project should now be linked to your local decanter project.
