function sortNums(nums) {
    nums.sort((a, b) => b - a);

    nums.forEach(element => {
        console.log(element);
    });
}
sortNums([2, 1, 3]);