import React from 'react';
interface SectionProps {
  className?: string;
  id?: string;
  children: React.ReactNode
}

export default function Section({children, className, id=''}: SectionProps) {
    return (
        <section 
            id={id}
            className={`max-w-7xl mx-auto px-4 xl:px-0 ${className}`}>
            {children}
        </section>
    )
}