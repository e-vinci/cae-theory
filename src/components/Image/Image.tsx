import { Box } from "@mui/material";

interface ImageProps {
  height?: number;
  width?: number;
  src: string;
  alt?: string;
}

const Image = ({ height, width, src, alt = "Image" }: ImageProps) => {
  return (
    <Box
      height={height ? `${height}px` : "100%"}
      width={width ? `${width}px` : "100%"}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <img
        src={src}
        alt={alt}
        style={{
          maxHeight: height ? "100%" : "auto",
          maxWidth: width ? "100%" : "auto",
          height: height ? "100%" : "auto",
          width: width ? "100%" : "auto",
        }}
      />
    </Box>
  );
};

export default Image;
