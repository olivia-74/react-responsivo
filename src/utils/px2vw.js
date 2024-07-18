// função "pixel to view"
// $: getElementById
const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`;
//valor do width padrão de 1440px

export default px2vw;