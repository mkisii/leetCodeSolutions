const findMedianSortedArrays = function(nums1, nums2) {
  let num1Arr = [];

  let num1 = 0;
  let indexNum1 = 0;
  while (nums1[indexNum1] != undefined) {
    num1++;
    indexNum1++;
  }
  for (let i = 0; i < num1; i++) {
    num1Arr.push(nums1[i]);
  }

  let num2 = 0;
  let indexNum2 = 0;
  while (nums2[indexNum2] != undefined) {
    num2++;
    indexNum2++;
  }
  for (let i = 0; i < num2; i++) {
    num1Arr.push(nums2[i]);
  }

  let arraL = 0;
  let inde = 0;
  while(num1Arr[inde] != undefined) {
      arraL ++;
      inde ++;
  }

  for (let i = 0; i <arraL ; i++) {
      for (let j = i +1; j <arraL; j++) {

          if (num1Arr[i] > num1Arr[j]) {
              let temp = num1Arr[i];
              num1Arr[i] = num1Arr[j];
              num1Arr[j] = temp;
          }
      }
  }
  let median;

  if(arraL % 2 ===0) {
      const mIndex = arraL/2;
       median = (num1Arr[mIndex -1] + num1Arr[mIndex])/2;

      return median;
  }else{
      const mIndex = arraL/2 - 0.5
       median = num1Arr[mIndex];
      return median
  }
};

