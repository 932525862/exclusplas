const images = import.meta.glob("@/assets/products/*.{png,jpg,jpeg}", {
    eager: true,
  });
  
  export const getImage = (fileName: string) => {
    return (images[`/src/assets/products/${fileName}`] as any)?.default
  }
  