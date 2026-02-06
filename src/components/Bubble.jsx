/**
 * Bubble component that displays a message inside a styled bubble.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The content to be displayed inside the bubble.
 * @returns {JSX.Element} The rendered Bubble component.
 */
import React from 'react';
function Bubble({ children }) {
    return (
      <div className="bg-[var(--color-bubble)] text-center p-4 rounded-xl max-w-xl mx-auto mt-6">
        <p className="text-sm text-[var(--color-primary)]">{children}</p>
      </div>
    );
  }
  
  export default Bubble;
  