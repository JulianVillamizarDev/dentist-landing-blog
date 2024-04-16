interface SectionProps {
  className?: string;
}

export default function Section({children, className}: any) {
    return (
        <section className={`max-w-7xl mx-auto px-4 xl:px-0 py-32 ${className}`}>
            {children}
        </section>
    )
}