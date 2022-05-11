const myArr = [1, 4, 10, 19, 6, 3, 2, 18, 30];

// Hàm để hoán đổi vị trí của 2 phần tử
function swap(arr, a ,b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

// Hàm để so sánh giá trí của 2 phần tử liền nhau
const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
}

function defaultCompare(a,b) {
    if(a === b) {
        return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

// Thuật toán Bubble Sort: Sắp xếp nổi bọt
// Tình huống tốt nhất: Độ phức tạp = O(n) (đi qua đúng n phần tử)
// Tình huống tệ nhất: Độ phức tạp: O(n^2) (đi qua đúng n^2 phần tử)
/*
Ý tưởng của thuật toán: Thuật toán sắp xếp nổi bọt thực hiện sắp xếp dãy số bằng cachs lặp lại công việc 
đổi chỗ 2 số liên tiếp nhau nếu chúng đứng sai thứ tự(số sau bé hơn số trước với trường hợp sắp xếp tăng dần)
cho đến khi dãy só được sắp xếp
*/

function bubbleSort(arr, compare = defaultCompare) {
    // Gán đối tượng length thành một kiểu object;
    const { length } = arr;
    for(let i = 0 ; i < length ; i++) {
        for(let j =  0  ; j < length-1-i ; j++) {
            if(compare(arr[j], arr[j+1]) === Compare.BIGGER_THAN) {
                swap(arr, j , j+1);
            } 
        } 
    }
    return arr;
}

console.log(bubbleSort(myArr))