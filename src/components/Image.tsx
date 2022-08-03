import Image from "next/image";

export const Icon = ({
  src,
  width,
  height,
}: {
  src: any;
  width?: number | string;
  height?: number | string;
}) => {
  return (
    <div className="h-full flex justify-center items-center">
      <Image src={src} width={width} height={height} />
    </div>
  );
};
