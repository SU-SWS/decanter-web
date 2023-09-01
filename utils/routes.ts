/**
 * Convenience functions for centralized routing
 */
export const home = () => '/';
export const about = () => '/about';
export const forDevelopers = () => '/for-developers';
export const forDesigners = () => '/for-designers';
export const examples = () => '/examples';
export const decanterFaq = () => '/decanter-faq';

// For developers
export const installation = () => `${forDevelopers()}/installation`;
export const browserCompatibility = () => `${forDevelopers()}/browser-compatibility`;
export const strategiesAndConventions = () => `${forDevelopers()}/strategies-and-conventions`;
export const supportAndVersions = () => `${forDevelopers()}/support-and-versions`;
export const howToExtend = () => `${forDevelopers()}/how-to-extend`;
export const tailwindcssPlugins = () => `${forDevelopers()}/tailwindcss-plugins`;

// For designers
export const figma = () => `${forDesigners()}/figma`;
export const stanfordIdentity = () => `${forDesigners()}/stanford-identity-and-brand-compliance`;
export const accessibilityNotes = () => `${forDesigners()}/accessibility-notes`;
export const typeGridsAndColor = () => `${forDesigners()}/type-grids-and-color`;
export const patternsAndExamples = () => `${forDesigners()}/patterns-and-examples`;

// Examples
export const modularTypography = () => `${examples()}/modular-typography`;
export const containers = () => `${examples()}/containers`;
export const formElements = () => `${examples()}/form-elements`;
export const globalFooter = () => `${examples()}/global-footer`;
export const Layout = () => `${examples()}/layout`;
export const gridFlex = () => `${examples()}/grid-flex`;
export const gridCssGrid = () => `${examples()}/grid-css-grid`;
export const cards = () => `${examples()}/cards`;
export const identityBar = () => `${examples()}/identity-bar`;
export const logo = () => `${examples()}/logo`;
