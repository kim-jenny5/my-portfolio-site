export default function Links({ links, active }) {
  if (!links) return null;

  const githubLinks = links.gitHub || [];
  const liveLink = links.live || '';

  return (
    <div className='flex flex-col items-end gap-y-1'>
      {githubLinks.length > 0 &&
        githubLinks.map((ghLink, idx) => (
          <a
            key={`github-${idx}`}
            href={ghLink}
            className='block text-blue-600 underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            {githubLinks.length === 1 ? 'GitHub' : idx === 0 ? 'Frontend GitHub' : 'Backend GitHub'}
          </a>
        ))}
      {liveLink && (
        <span>
          <a
            href={liveLink}
            className='text-blue-600 underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            Live
          </a>
          <span className='italic text-gray-500'>{!active && ' (inactive)'}</span>
        </span>
      )}
    </div>
  );
}
