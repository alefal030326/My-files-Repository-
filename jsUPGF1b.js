
function myFunction(arr, arr_size)
{
    let even_count = 0;
    let odd_count = 0;


    for (let i = 0; i < arr_size; i++) {


        if (arr[i] & 1 == 1)
            odd_count++;
        else
            even_count++;
    }

    document.write("Number of even elements = " + even_count
        + "<br>" + "Number of odd elements = " + odd_count);
}


    let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let n = arr.length;


    myFunction(arr, n);
