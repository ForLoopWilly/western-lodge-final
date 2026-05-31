interface MapEmbedProps {
  className?: string;
}

export function MapEmbed({ className }: MapEmbedProps) {
  return (
    <div className={`overflow-hidden rounded-[1.25rem]${className ? ` ${className}` : ""}`}>
      <iframe
        title="Western Highway Lodge Location — Marabut, Samar"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31353.123456789!2d125.37833!3d11.47297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDI4JzIyLjciTiAxMjXCsDIyJzQyLjAiRQ!5e0!3m2!1sen!2sph!4v1620000000000!5m2!1sen!2sph"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
