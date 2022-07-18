type ImgProps = {
  alt: string;
  src: string;
  className?: string;
  height?: string;
  width?: string;
};

const Image: React.FC<ImgProps> = ({ alt, className, height, src, width }) => (
  <img
    className={className}
    width={width}
    height={height}
    src={src}
    alt={alt}
  />
);

export { Image };
