export const faqItems = [
  {
    question: 'Who is Decanter for?',
    answer: 'Decanter is for developers and designers inside Stanford, and for external partners creating Stanford digital products. It is intended for administrative, departmental, school, lab, institute, campaign, and service websites.',
  },
  {
    question: 'What problem does Decanter solve?',
    answer: 'It gives teams a shared, accessible foundation for Stanford-branded interfaces. That reduces repeated design and implementation work while making brand and accessibility expectations easier to meet consistently.',
  },
  {
    question: 'Is Decanter a component library or a Tailwind preset?',
    answer: 'Version 8 is a CSS-first preset for Tailwind CSS v4. It adds Stanford design tokens, base styles, utilities, variants, and a focused set of CSS component classes. Product-specific React components remain the responsibility of each application.',
  },
  {
    question: 'Can Decanter be used outside Next.js?',
    answer: 'Yes. Decanter works with any Tailwind CSS v4 integration, including the Tailwind CLI, PostCSS, and Vite. This documentation site uses Next.js, but the Decanter package itself is framework-independent.',
  },
  {
    question: 'How is Decanter used with WordPress or Drupal?',
    answer: 'Install Decanter in the theme build pipeline, import its CSS entry point, and use the generated utilities and component classes in templates. Version 8 no longer needs a JavaScript Tailwind preset.',
  },
  {
    question: 'How are new features chosen?',
    answer: 'The system stays deliberately foundational. A feature should be reusable, content-agnostic, have a clear use case, expressly address accessibility and usability, and remain useful as web conventions evolve.',
  },
  {
    question: 'Who governs Decanter?',
    answer: 'A cross-functional Stanford team of developers, designers, accessibility specialists, and digital communicators stewards the code and design direction. Changes are informed by the products that use Decanter and by Stanford identity guidance.',
  },
  {
    question: 'What accessibility standard does this site target?',
    answer: 'This documentation site targets WCAG 2.1 Level AA. Adopting Decanter helps provide an accessible foundation, but each product team is still responsible for accessible content, markup, interaction design, and testing.',
  },
  {
    question: 'Is all documentation public?',
    answer: 'The code and documentation are public. Some design assets, including Figma libraries, can require Stanford access or a manual handoff.',
  },
  {
    question: 'How do I get help or contribute?',
    answer: 'Open an issue or pull request in the Decanter GitHub repository. Stanford community members can also join the #decanter Slack channel to ask questions and share projects.',
  },
  {
    question: 'Which browsers does Decanter support?',
    answer: 'Decanter supports many browser versions and is configurable by you through Browserslist. We recommend the Browserslist "default" preset, which covers the last 2 versions of all major browsers with good global coverage.',
  },
  {
    question: 'How long are older Decanter versions supported?',
    answer: 'Version 7 released on June 26, 2023. As a Long Term Support (LTS) release, it will continue to be supported for one full year after the version 8 release. Version 6 and older are obsolete and unsupported.',
  },
] as const;
