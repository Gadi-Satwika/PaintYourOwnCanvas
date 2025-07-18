var paintcanvas = document.getElementById("canvas1");
        var context = paintcanvas.getContext("2d");
        var color = 'black';
        var radius = 10;
        var isPainting = false;

        function setWidth(value)
        {
        var num = isNumeric(value);
        if(num)
            {
            paintcanvas.width =value;
            }
        else
            {
            alert("Enter Valid width");
            }
        }
        function setHeight(value)
        {
        if(isNumeric(value))
            {
            paintcanvas.height = value;
            }
        else
            {
            alert("Enter valid height value");
            }
        }
        function clearCanvas()
        {
            context.clearRect(0,0,paintcanvas.width, paintcanvas.height);
        }

        function paintCircle (x, y) {
            context.beginPath();
            context.arc(x, y, radius, 0, Math.PI * 2, true);
            context.fillStyle=color;
            context.fill();
        }

        function startPaint()
        {
        isPainting = true;
        }
        function endPaint()
        {
        isPainting = false;
        }
        function doPaint(x,y)
        {
        if(isPainting==true)
            {
            paintCircle(x,y);
            }
        }
        function changeColor(newColor)
        {
        color = newColor;
        }
        function reSize(newSize)
        {
        radius = newSize; document.getElementById("sizeOutput").value = newSize;
        }
        function isNumeric(value)
        {
            return !isNaN(value);
        }