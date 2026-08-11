const loadImg = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
};

export default async () => {
  await Promise.all([
    loadImg('/images/halo.png').then((img) => (window.halo = img)),
    loadImg('/images/cross.png').then((img) => (window.cross = img)),
  ]);
};
