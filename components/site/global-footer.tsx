const universityLinks = [
  ['Stanford Home', 'https://www.stanford.edu'],
  ['Maps & Directions', 'https://visit.stanford.edu/basics'],
  ['Search Stanford', 'https://www.stanford.edu/search/'],
  ['Emergency Info', 'https://emergency.stanford.edu'],
] as const;

const policyLinks = [
  ['Terms of Use', 'https://www.stanford.edu/terms/'],
  ['Privacy', 'https://www.stanford.edu/privacy/'],
  ['Copyright', 'https://uit.stanford.edu/security/copyright-infringement'],
  ['Trademarks', 'https://adminguide.stanford.edu/chapter-1/subchapter-5/policy-1-5-4'],
  ['Non-Discrimination', 'https://studentservices.stanford.edu/more-resources/student-policies/non-academic/non-discrimination'],
  ['Accessibility', 'https://www.stanford.edu/accessibility'],
] as const;

export function GlobalFooter() {
  return (
    <footer className="cc w-full bg-cardinal-red text-white basefont-20 rs-py-1">
      <div className="flex flex-col lg:flex-row" title="Common Stanford resources">
        <div className="mt-5 mb-9 text-center">
          <a
            className="logo inline-block type-3 text-white no-underline hocus:text-white hocus:underline"
            href="https://www.stanford.edu"
          >
            Stanford<br />University
            <span className="sr-only"> (link is external)</span>
          </a>
        </div>
        <div className="grow text-left sm:text-center lg:pl-45 lg:text-left xl:pl-50">
          <nav
            aria-label="Global footer menu"
            className="mb-10 flex flex-row justify-center sm:flex-col sm:items-center lg:items-start"
          >
            <ul className="mr-19 mb-10 flex list-unstyled flex-col p-0 text-15 sm:mr-0 sm:mb-4 sm:flex-row sm:text-14 md:text-17 lg:text-17 2xl:text-18">
              {universityLinks.map(([label, href], index) => (
                <li className={index < universityLinks.length - 1 ? 'sm:mr-10 md:mr-20 lg:mr-27' : ''} key={href}>
                  <a className="text-white no-underline hocus:text-white hocus:underline" href={href}>
                    {label}<span className="sr-only"> (link is external)</span>
                  </a>
                </li>
              ))}
            </ul>
            <ul className="ml-19 mb-10 flex list-unstyled flex-col p-0 text-15 sm:ml-0 sm:mb-0 sm:flex-row sm:text-14 md:text-15 xl:text-16">
              {policyLinks.map(([label, href], index) => (
                <li className={index < policyLinks.length - 1 ? 'sm:mr-10 md:mr-20 lg:mr-27' : ''} key={href}>
                  <a className="text-white no-underline hocus:text-white hocus:underline" href={href}>
                    {label}<span className="sr-only"> (link is external)</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-center text-13 sm:text-14 lg:text-left">
            <span className="whitespace-nowrap">© Stanford University.</span>
            <span className="whitespace-nowrap"> Stanford, California 94305.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
