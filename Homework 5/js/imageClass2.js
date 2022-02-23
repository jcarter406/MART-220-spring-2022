class imageClass2
{

    constructor(img2, x2, y2, w2, h2) 
    {
        this.img2 = img2;
        this.x2 = x2;
        this.y2 = y2;
        this.w2 = w2;
        this.h2 = h2;
    }

    getImage2() 
    {
        return this.img2;
    }
    getX2()
    {
        return this.x2;
    }
    getY2()
    {
        return this.y2;
    }
    getW2()
    {
        return this.w2;
    }

    getH2()
    {
        return this.h2;
    }

    moveX2(speed)
    {
        this.x2 += speed;
    }
}