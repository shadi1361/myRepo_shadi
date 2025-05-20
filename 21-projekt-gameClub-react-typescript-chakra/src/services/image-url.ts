const getCroppedImageUrl = (url: string | null | undefined) => {

  if (!url || !url.includes("media/")) return "/no-image-icon-4.png";

  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
