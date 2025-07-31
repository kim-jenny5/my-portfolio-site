export default function SpotifyPlayer({ style: styleFromProps }) {
  return (
    <div className={styleFromProps}>
      <iframe
        style={{ borderRadius: '12px', border: '0' }}
        src='https://open.spotify.com/embed/playlist/4sp8WEHBqmXrS14xdJBpOu?utm_source=generator&theme=0'
        width='100%'
        height='100%'
        allowfullscreen=''
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
      ></iframe>
    </div>
  );
}
