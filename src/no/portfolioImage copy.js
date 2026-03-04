const portfolioImages = [
    // 插畫設計
    {
        src: new URL('@/assets/portfolio/illustration01.jpg', import.meta.url).href,
        alt: '酪印-菜單DM',
        width: 2480,
        height: 3508,
    },
    {
        src: new URL('@/assets/portfolio/illustration02.jpg', import.meta.url).href,
        alt: '雙11-單身也瘋狂-宣傳海報',
        width: 2480,
        height: 3508,
    },
    {
        src: new URL('@/assets/portfolio/illustration03.jpg', import.meta.url).href,
        alt: '福來朗-開幕慶-FB宣傳圖',
        width: 883,
        height: 1252,
    },
    {
        src: new URL('@/assets/portfolio/illustration01.jpg', import.meta.url).href,
        alt: '酪印-菜單DM',
        width: 2480,
        height: 3508,
    },
    {
        src: new URL('@/assets/portfolio/illustration02.jpg', import.meta.url).href,
        alt: '雙11-單身也瘋狂-宣傳海報',
        width: 2480,
        height: 3508,
    },
    {
        src: new URL('@/assets/portfolio/illustration03.jpg', import.meta.url).href,
        alt: '福來朗-開幕慶-FB宣傳圖',
        width: 883,
        height: 1252,
    },
    {
        src: new URL('@/assets/portfolio/illustration01.jpg', import.meta.url).href,
        alt: '酪印-菜單DM',
        width: 2480,
        height: 3508,
    },
    {
        src: new URL('@/assets/portfolio/illustration02.jpg', import.meta.url).href,
        alt: '雙11-單身也瘋狂-宣傳海報',
        width: 2480,
        height: 3508,
    },
    {
        src: new URL('@/assets/portfolio/illustration03.jpg', import.meta.url).href,
        alt: '福來朗-開幕慶-FB宣傳圖',
        width: 2480,
        height: 3508,
    },
    {
        src: new URL('@/assets/portfolio/illustration01.jpg', import.meta.url).href,
        alt: '酪印-菜單DM',
        width: 2480,
        height: 3508,
    },
    {
        src: new URL('@/assets/portfolio/illustration02.jpg', import.meta.url).href,
        alt: '雙11-單身也瘋狂-宣傳海報',
        width: 2480,
        height: 3508,
    },
    {
        src: new URL('@/assets/portfolio/illustration03.jpg', import.meta.url).href,
        alt: '福來朗-開幕慶-FB宣傳圖',
        width: 2480,
        height: 3508,
    },
    {
        src: new URL('@/assets/portfolio/illustration03.jpg', import.meta.url).href,
        alt: '福來朗-開幕慶-FB宣傳圖',
        width: 2480,
        height: 3508,
    },

    // 平面設計
    // logo
    {
        src: new URL('@/assets/portfolio/graphic01.jpg', import.meta.url).href,
        alt: '各式LOGO',
        width: 1920,
        height: 1078,
    },
    {
        src: new URL('@/assets/portfolio/graphic02.jpg', import.meta.url).href,
        alt: '福來朗-LOGO',
        width: 1920,
        height: 1332,
    },
        {
        src: new URL('@/assets/portfolio/graphic03.jpg', import.meta.url).href,
        alt: '酪印-菜單DM',
        width: 1920,
        height: 1078,
    },
    {
        src: new URL('@/assets/portfolio/graphic04.png', import.meta.url).href,
        alt: '酪印-菜單DM',
        width: 2480,
        height: 3508,
    },
    {
        src: new URL('@/assets/portfolio/graphic02.png', import.meta.url).href,
        alt: '雙11-單身也瘋狂-宣傳海報',
        width: 2480,
        height: 3508,
    },
    {
        src: new URL('@/assets/portfolio/graphic03.png', import.meta.url).href,
        alt: '福來朗-開幕慶-FB宣傳圖',
        width: 2480,
        height: 3508,
    },
    {
        src: new URL('@/assets/portfolio/graphic03.png', import.meta.url).href,
        alt: '福來朗-開幕慶-FB宣傳圖',
        width: 2480,
        height: 3508,
    },
       {
        src: new URL('@/assets/portfolio/graphic02.png', import.meta.url).href,
        alt: '雙11-單身也瘋狂-宣傳海報',
        width: 2480,
        height: 3508,
    },
    {
        src: new URL('@/assets/portfolio/graphic03.png', import.meta.url).href,
        alt: '福來朗-開幕慶-FB宣傳圖',
        width: 2480,
        height: 3508,
    },
    {
        src: new URL('@/assets/portfolio/graphic01.png', import.meta.url).href,
        alt: '酪印-菜單DM',
        width: 2480,
        height: 3508,
    },

]

const illustration = portfolioImages.filter(img => img.src.includes('/illustration'))
const graphic = portfolioImages.filter(img => img.src.includes('/graphic'))
const website = portfolioImages.filter(img => img.src.includes('/website'))
const frontEnd = portfolioImages.filter(img => img.src.includes('/frontEnd'))

export { portfolioImages, illustration, graphic, website, frontEnd }


