export function IdentityBar() {
  return (
    <div className="bg-cardinal-red px-20 pt-5 pb-1 sm:px-30 md:px-50 lg:px-30">
      <a
        className="cc logo inline-block text-20 leading-none text-white no-underline hocus:text-white hocus:underline"
        href="https://www.stanford.edu"
      >
        Stanford University
        <span className="sr-only"> (link is external)</span>
      </a>
    </div>
  );
}
