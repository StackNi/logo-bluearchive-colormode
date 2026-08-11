const loadImg = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
  });
};

export default async () => {
  await Promise.all([
    loadImg('/logo-bluearchive-colormode/images/halo.png').then((img) => (window.halo = img)),
    loadImg('/logo-bluearchive-colormode/images/cross.png').then((img) => (window.cross = img)),
  ]);
};
