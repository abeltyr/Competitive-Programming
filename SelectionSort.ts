//User function Template for javascript

/**
 *
 * select
 * @param {number[]} arr
 * @param {number} i
 * @return {number}
 *
 * selectionSort
 * @param {number[]} arr
 * @param {number} n
 */
class Solution {
    select(arr, i) {
        // code here such that selectionSort() sorts arr[]
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] > arr[i]) {
                    let newData = arr[i];
                    arr[i] = arr[j]
                    arr[j] = newData;
                }

            }
        }
    }

    //Function to sort the array using selection sort algorithm.
    selectionSort(arr, n) {
        //code here
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] > arr[i]) {
                    let newData = arr[i];
                    arr[i] = arr[j]
                    arr[j] = newData;
                }

            }
        }
    }

}