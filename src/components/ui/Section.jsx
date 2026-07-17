export const Section = ({ id, children, className = '' }) => (
    <section id={id} className={`min-h-screen flex items-center py-20 ${className}`}>
        <div className="container mx-auto w-full px-4 md:px-6">{children}</div>
    </section>
);

export const SectionHeader = ({ eyebrow, title, description, dark = false }) => (
    <div className="mb-12 max-w-2xl">
        {eyebrow && (
            <span
                className={`mb-2 block text-sm font-semibold uppercase tracking-wider ${
                    dark ? 'text-blue-400' : 'text-primary'
                }`}
            >
                {eyebrow}
            </span>
        )}
        <h2 className={`text-3xl font-bold md:text-4xl ${dark ? 'text-white' : 'text-slate-900'}`}>
            {title}
        </h2>
        {description && (
            <p className={`mt-3 text-lg leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
                {description}
            </p>
        )}
    </div>
);
