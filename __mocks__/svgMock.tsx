import React from "react"; // Ensure React is imported

// Simple functional component mock
const SvgMock = (props: React.SVGProps<SVGSVGElement>) => {
  // We can make it render a basic <svg> or even just null
  // Rendering null might be simplest if we don't need to test icon presence
  // return null;

  // Or render a basic svg tag to accept props like className
  return <svg {...props} data-testid="mock-svg" />;
};

export const ReactComponent = SvgMock; // Handle potential named import if needed
export default SvgMock; // Handle default import
