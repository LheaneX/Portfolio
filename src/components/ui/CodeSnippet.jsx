import { aboutSnippet } from '../../data/site';

const tokenClass = {
    comment: 'text-slate-500',
    keyword: 'text-violet-400',
    name: 'text-sky-400',
    key: 'text-emerald-400',
    string: 'text-amber-300',
    boolean: 'text-blue-400',
};

const CodeSnippet = () => (
    <div className="mt-4 space-y-1 font-mono text-sm text-slate-300">
        <p className={tokenClass.comment}>// {aboutSnippet.filename}</p>
        {aboutSnippet.lines.map((line, index) => {
            if (line.type === 'comment') {
                return (
                    <p key={index} className={tokenClass.comment}>
                        {line.text}
                    </p>
                );
            }

            return (
                <div key={index}>
                    <p>
                        <span className={tokenClass.keyword}>const</span>{' '}
                        <span className={tokenClass.name}>{line.name}</span> = {'{'}
                    </p>
                    {line.props.map((prop) => (
                        <p key={prop.key} className="pl-4">
                            <span className={tokenClass.key}>{prop.key}</span>:{' '}
                            <span className={tokenClass[prop.kind]}>{prop.value}</span>,
                        </p>
                    ))}
                    <p>{'};'}</p>
                </div>
            );
        })}
    </div>
);

export default CodeSnippet;
