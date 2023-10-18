function change(){
    var element1 = document.getElementById("text");
    var element2 = document.getElementById("times");
    var x = Math.min(element1.value,1000000);
    x = Math.max(x,1);
    x = Math.floor(x);
    element2.innerHTML = x;
    
    for(var i = 0;i < 14;i++) a[i] = 0;

    for(var i = 0;i < x;i++){
        var y = Math .random();
        var z = invNormalDistStd(y);
        var w = Math.exp(-z*z/2);
        var l = 0;
        for(var j = 0;j < 7;j++){
            if(j/7 <= w && w <= (j+1)/7){
                l = j;
                break;
            }
        }
        if(z < 0){
            a[l]++;
            c[l]++;
        }
        else{
            a[13-l]++;
            c[13-l]++;
        }
    }
    a[14] = x;
    b[14] = 0;
    c[14] += x;
    d[14] = 0;

    for(var i = 0;i < 14;i++){
        b[i] = 100*a[i]/a[14];
        d[i] = 100*c[i]/c[14];
        b[14] += b[i];
        d[14] += d[i];
    }
    
    var a0 = document.getElementById("0");
    var a1 = document.getElementById("1");
    var a2 = document.getElementById("2");
    var a3 = document.getElementById("3");
    var a4 = document.getElementById("4");
    var a5 = document.getElementById("5");
    var a6 = document.getElementById("6");
    var a7 = document.getElementById("7");
    var a8 = document.getElementById("8");
    var a9 = document.getElementById("9");
    var a10 = document.getElementById("10");
    var a11 = document.getElementById("11");
    var a12 = document.getElementById("12");
    var a13 = document.getElementById("13");
    var a14 = document.getElementById("14");

    a0.innerHTML = a[0];
    a1.innerHTML = a[1];
    a2.innerHTML = a[2];
    a3.innerHTML = a[3];
    a4.innerHTML = a[4];
    a5.innerHTML = a[5];
    a6.innerHTML = a[6];
    a7.innerHTML = a[7];
    a8.innerHTML = a[8];
    a9.innerHTML = a[9];
    a10.innerHTML = a[10];
    a11.innerHTML = a[11];
    a12.innerHTML = a[12];
    a13.innerHTML = a[13];
    a14.innerHTML = a[14];

    var b0 = document.getElementById("x0");
    var b1 = document.getElementById("x1");
    var b2 = document.getElementById("x2");
    var b3 = document.getElementById("x3");
    var b4 = document.getElementById("x4");
    var b5 = document.getElementById("x5");
    var b6 = document.getElementById("x6");
    var b7 = document.getElementById("x7");
    var b8 = document.getElementById("x8");
    var b9 = document.getElementById("x9");
    var b10 = document.getElementById("x10");
    var b11 = document.getElementById("x11");
    var b12 = document.getElementById("x12");
    var b13 = document.getElementById("x13");
    var b14 = document.getElementById("x14");

    b0.innerHTML = b[0];
    b1.innerHTML = b[1];
    b2.innerHTML = b[2];
    b3.innerHTML = b[3];
    b4.innerHTML = b[4];
    b5.innerHTML = b[5];
    b6.innerHTML = b[6];
    b7.innerHTML = b[7];
    b8.innerHTML = b[8];
    b9.innerHTML = b[9];
    b10.innerHTML = b[10];
    b11.innerHTML = b[11];
    b12.innerHTML = b[12];
    b13.innerHTML = b[13];
    b14.innerHTML = b[14];

    var c0 = document.getElementById("y0");
    var c1 = document.getElementById("y1");
    var c2 = document.getElementById("y2");
    var c3 = document.getElementById("y3");
    var c4 = document.getElementById("y4");
    var c5 = document.getElementById("y5");
    var c6 = document.getElementById("y6");
    var c7 = document.getElementById("y7");
    var c8 = document.getElementById("y8");
    var c9 = document.getElementById("y9");
    var c10 = document.getElementById("y10");
    var c11 = document.getElementById("y11");
    var c12 = document.getElementById("y12");
    var c13 = document.getElementById("y13");
    var c14 = document.getElementById("y14");

    c0.innerHTML = c[0];
    c1.innerHTML = c[1];
    c2.innerHTML = c[2];
    c3.innerHTML = c[3];
    c4.innerHTML = c[4];
    c5.innerHTML = c[5];
    c6.innerHTML = c[6];
    c7.innerHTML = c[7];
    c8.innerHTML = c[8];
    c9.innerHTML = c[9];
    c10.innerHTML = c[10];
    c11.innerHTML = c[11];
    c12.innerHTML = c[12];
    c13.innerHTML = c[13];
    c14.innerHTML = c[14];

    var d0 = document.getElementById("z0");
    var d1 = document.getElementById("z1");
    var d2 = document.getElementById("z2");
    var d3 = document.getElementById("z3");
    var d4 = document.getElementById("z4");
    var d5 = document.getElementById("z5");
    var d6 = document.getElementById("z6");
    var d7 = document.getElementById("z7");
    var d8 = document.getElementById("z8");
    var d9 = document.getElementById("z9");
    var d10 = document.getElementById("z10");
    var d11 = document.getElementById("z11");
    var d12 = document.getElementById("z12");
    var d13 = document.getElementById("z13");
    var d14 = document.getElementById("z14");

    d0.innerHTML = d[0];
    d1.innerHTML = d[1];
    d2.innerHTML = d[2];
    d3.innerHTML = d[3];
    d4.innerHTML = d[4];
    d5.innerHTML = d[5];
    d6.innerHTML = d[6];
    d7.innerHTML = d[7];
    d8.innerHTML = d[8];
    d9.innerHTML = d[9];
    d10.innerHTML = d[10];
    d11.innerHTML = d[11];
    d12.innerHTML = d[12];
    d13.innerHTML = d[13];
    d14.innerHTML = d[14];
}