interface ProfileImageProps {
  src: string;
  alt: string;
}

export function ProfileImage({ src, alt }: ProfileImageProps) {
  return (
    <div className="relative z-10 group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
      <div className="relative">
        <img
          src={src}
          alt={alt}
          className="rounded-full w-48 h-48 object-cover border-4 border-white shadow-lg"
        />
      </div>
    </div>
  );
}