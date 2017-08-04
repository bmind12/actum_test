import Flickity from 'flickity';

const flickity = (container) => {
    const carousel = container;
    const flkty = new Flickity(carousel, {
        cellAlign: 'left',
        contain: true,
        pageDots: false
    });
};

export default flickity;
